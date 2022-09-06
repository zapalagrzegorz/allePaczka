import { CarriersFetchReducer } from "./types";

export const carriersFetchReducer: CarriersFetchReducer = (state, action) => {
  switch (action.type) {
    case "request":
      return { ...state, status: "loading" };
    case "success":
      return { ...state, status: "resolved", carriers: action.payload };
    case "error":
      return { ...state, status: "error", error: action.payload };
    default:
      throw Error("No such action");
  }
};
