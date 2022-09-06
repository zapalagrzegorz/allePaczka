// import { initialState } from "./App";
// import { parcelCheckboxes, parcelInputs } from "./parcelDescription";
import { ParcelCheckboxes } from "./ParcelCheckboxes";
import { ParcelInputs } from "./ParcelInputs";

export const ParcelForm = () => {
  return (
    <div
      className="border rounded p-10 mb-12 formBorderColor"
      style={{
        // borderColor: "#e1e3e8",
        // padding: "40px",
        // marginBottom: "48px",
      }}
    >
      <h1
        style={{
          fontSize: "1.6rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
          color: "#424B57",
        }}
      >
        Wyceń przesyłkę
      </h1>
      <ParcelInputs />

      <ParcelCheckboxes />
    </div>
  );
};
