import React from "react";
import { useFormContext, useFormDispatchContext } from "../../FormContext";
import { ParcelCheckbox } from "./ParcelCheckbox";

const parcelCheckboxes = [
  {
    label: "Nadanie",
    values: [
      { label: "W punkcie", name: "fromPointShipment" },
      { label: "Podjazd kuriera", name: "fromDoorShipment" },
    ],
  },
  {
    label: "Odbiór",
    values: [
      { label: "W punkcie", name: "toPointDelivery" },
      { label: "Podjazd kuriera", name: "toDoorDelivery" },
    ],
  },
];

export const ParcelCheckboxes = () => {
  const { state } = useFormContext();
  const { dispatch } = useFormDispatchContext();
  type ObjectKey = keyof typeof state;
  return (
    <div className="flex flex-wrap">
      {parcelCheckboxes.map((parcelCheckboxGroup) => {
        return (
          <div
            className="w-full md:w-2/5 mb-5 lg:mb-0"
            key={parcelCheckboxGroup.label}
          >
            <span className="parcelFormLabel">{parcelCheckboxGroup.label}</span>
            <div>
              {parcelCheckboxGroup.values.map((parcelCheckboxInfo) => {
                const value = state[parcelCheckboxInfo.name as ObjectKey];
                const handleChange = (
                  e: React.ChangeEvent<HTMLInputElement>
                ) => {
                  dispatch({
                    type: `${parcelCheckboxInfo.name}Changed`,
                    payload: e.target.checked,
                  });
                };
                return (
                  <ParcelCheckbox
                    key={parcelCheckboxInfo.name}
                    {...parcelCheckboxInfo}
                    value={Boolean(value)}
                    handleChange={handleChange}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
