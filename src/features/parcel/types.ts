import { initialState } from "../../FormContext";

type Action = {
  type: string;
  payload?: any;
};
export type AppDispatch = React.Dispatch<Action>;

export type parcelCheckbox = { label: string; value: string };

export type ParcelFormReducer = (
  state: typeof initialState,
  action: Action
) => typeof initialState;

export interface IParcelInputs {
  state: typeof initialState;
  dispatch: AppDispatch;
}

export interface IParcelForm {
  state: typeof initialState;
  dispatch: AppDispatch;
}

export interface ParcelDetail {
  name: string;
  label: string;
  value: number;
  quantity: string;
}

export interface IParcelInput {
  label: string;
  name: string;
  value: number;
  quantity: string;
  dispatch: AppDispatch;
}
