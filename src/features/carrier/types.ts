export interface ICarrier {
  id: number;
  name: string;
  color: string;
  price: number;
}

export interface ICarrierBox {
  carrier: ICarrier;
}
export interface CarriersInfoState {
  status: string;
  carriers: [] | ICarrier[];
  error: null | Error;
}

export type CarriersFetchReducer = (
  state: CarriersInfoState,
  action: {
    type: string;
    payload?: any;
  }
) => CarriersInfoState;
