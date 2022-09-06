import React, { useContext, useReducer } from "react";
import { parcelFormReducer } from "./features/parcel/parcelReducer";
import { AppDispatch } from "./features/parcel/types";

const FormContext = React.createContext<{ state: typeof initialState } | null>(
  null
);
const FormDispatchContext = React.createContext<{
  dispatch: AppDispatch;
} | null>(null);

export const initialState = {
  weight: 1,
  length: 12,
  width: 12,
  height: 12,
  fromPointShipment: false,
  fromDoorShipment: false,
  toPointDelivery: false,
  toDoorDelivery: false,
};

export const FormProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(parcelFormReducer, initialState);
  return (
    <FormContext.Provider value={{ state }}>
      <FormDispatchContext.Provider value={{ dispatch }}>
        {children}
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  );
};

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within FormProvider");
  }
  return context;
}
export function useFormDispatchContext() {
  const context = useContext(FormDispatchContext);
  if (!context) {
    throw new Error("useFormDispatchContext must be used within FormProvider");
  }
  return context;
}
