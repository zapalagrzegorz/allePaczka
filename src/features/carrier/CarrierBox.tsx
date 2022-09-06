// import { couriers } from "./parcelDescription";
import { ICarrierBox } from "./types";

export const CarrierBox = ({ carrier }: ICarrierBox) => {
  const { price, color, name } = carrier;
  return (
    <div
      style={{
        // width: "48%",
        border: `2px solid ${color}`,
        color: color,
        borderRadius: "4px",
        padding: "40px",
        marginBottom: "32px",
      }}
    >
      <div>
        <h2 style={{ fontSize: "2rem", color: "#424B57", fontWeight: 700 }}>
          {name}
        </h2>
      </div>
      <span style={{ fontSize: "23px", fontWeight: 700 }}>{price}</span>
    </div>
  );
};
