// import { initialState } from "./App";
import { ParcelFormReducer } from "./types";

export const parcelFormReducer: ParcelFormReducer = (state, action) => {
  switch (action.type) {
    case "weightChanged":
      return { ...state, weight: action.payload };
    case "lengthChanged":
      return { ...state, length: action.payload };
    case "heightChanged":
      return { ...state, height: action.payload };
    case "widthChanged":
      return { ...state, width: action.payload };
    case "pricesChanged":
      return { ...state, prices: action.payload };
    case "fromPointShipmentChanged":
      return { ...state, fromPointShipment: action.payload };
    case "fromDoorShipmentChanged":
      return { ...state, fromDoorShipment: action.payload };
    case "toPointDeliveryChanged":
      return { ...state, toPointDelivery: action.payload };
    case "toDoorDeliveryChanged":
      return { ...state, toDoorDelivery: action.payload };
    default:
      throw Error("No such action");
  }
};
