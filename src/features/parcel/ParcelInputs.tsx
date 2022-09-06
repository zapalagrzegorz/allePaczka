import { useFormContext, useFormDispatchContext } from "../../FormContext";
import { ParcelInput } from "./ParcelInput";
import { IParcelInput } from "./types";

const parcelInputs = [
  { name: "weight", label: "Waga", quantity: "kg" },
  { name: "length", label: "Długość", quantity: "cm" },
  { name: "width", label: "Szerokość", quantity: "cm" },
  { name: "height", label: "Wysokość", quantity: "cm" },
];

export const ParcelInputs = () => {
  const { state } = useFormContext();
  const { dispatch } = useFormDispatchContext();

  type ObjectKey = keyof typeof state;

  const parcelInputProps = parcelInputs.map((parcelInput) => {
    const key = parcelInput.name as ObjectKey;
    const value = state[key];
    const parcelProp: IParcelInput = {
      value: Number(value),
      dispatch,
      name: parcelInput.name,
      label: parcelInput.label,
      quantity: parcelInput.quantity,
    };
    return parcelProp;
  });

  return (
    <div className="flex flex-wrap">
      {parcelInputProps.map((parcelProps) => (
        <ParcelInput {...parcelProps} key={parcelProps.name} />
      ))}
    </div>
  );
};
