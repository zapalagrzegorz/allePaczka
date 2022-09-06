import { IParcelInput } from "./types";

export const ParcelInput = ({
  name,
  label,
  value,
  quantity,
  dispatch,
}: IParcelInput) => {
  return (
    <div className="w-full sm:w-1/4 md:w-1/5 mb-6 flex flex-col items-center  md:block">
      {/* // style={{ marginBottom: "25px" }}> */}
      <label className="parcelFormLabel">{label}</label>
      <div
        style={{
          maxWidth: "112px",
          height: "55px",
          display: "flex",
          alignItems: "center",
          border: "1px solid #E1E3E8",
        }}
      >
        <input
          style={{
            color: "#424B57",
            borderRight: "1px solid #E1E3E8",
            minHeight: "100%",
            maxWidth: "62px",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "600",
          }}
          type="number"
          name={name}
          value={value}
          onChange={(e) => {
            dispatch({ type: `${name}Changed`, payload: e.target.value });
          }}
          required={true}
          inputMode="decimal"
          min="0.1"
          step="0.1"
        />
        <span
          style={{
            color: "#606774",
            backgroundColor: "#F1F2F4",
            padding: "0 13px",
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "600",
          }}
        >
          {quantity}
        </span>
      </div>
    </div>
  );
};
