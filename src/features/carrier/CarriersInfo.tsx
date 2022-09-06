import { useEffect, useReducer } from "react";
import { carriersFetchReducer } from "./carriersFetchReducer";
import { CarrierBox } from "./CarrierBox";
import { ICarrier } from "./types";
import { useFormContext } from "../../FormContext";
import { queryStringFromObject } from "../../utils";
import "./Loader.css";

const baseAPI = `https://ak-frontend-task.vercel.app/api/carriers`;

export function CarriersInfo() {
  const { state: stateForm } = useFormContext();

  const [state, dispatch] = useReducer(carriersFetchReducer, {
    status: "idle",
    carriers: [],
    error: null,
  });

  const queryParams = queryStringFromObject(stateForm);

  const query = baseAPI + "?" + queryParams;

  useEffect(() => {
    async function getPrices() {
      const resp = await fetch(query);
      if (resp.ok) {
        const results = await resp.json();
        dispatch({
          type: "success",
          payload: results,
        });
      } else {
        if (resp.status === 404) {
          dispatch({ type: "success", payload: [] });
        } else {
          dispatch({ type: "error", payload: resp.statusText });
        }
      }
    }

    if (!query) {
      return;
    }
    let timeout: NodeJS.Timeout;
    try {
      dispatch({ type: "request" });
      timeout = setTimeout(() => getPrices(), 300);
    } catch (err) {
      dispatch({ type: "error", payload: err });
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  const carriersResult = state.carriers.length ? (
    state.carriers.map((carrier: ICarrier) => (
      <CarrierBox carrier={carrier} key={carrier.name} />
    ))
  ) : (
    <h2
      style={{
        fontSize: "1.6rem",
        fontWeight: "500",
        marginBottom: "1.5rem",
        color: "#424B57",
      }}
    >
      Brak ofert dla podanych kryteriów
    </h2>
  );

  if (state.status === "resolved") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-11"
        style={{
          // display: "flex",
          // flexWrap: "wrap",
          justifyContent: state.carriers.length ? "space-between" : "center",
        }}
      >
        {carriersResult}
      </div>
    );
  } else if (state.status === "loading") {
    return <div className="loader">Loading...</div>;
  } else if (state.status === "error") {
    return (
      <div>
        Wystąpił błąd:{" "}
        <pre style={{ whiteSpace: "normal" }}>{state.error!.message}</pre>
      </div>
    );
  } else {
    return null;
  }
}
