import { ParcelForm } from "./features/parcel/ParcelForm";
import { CarriersInfo } from "./features/carrier/CarriersInfo";
import { FormProvider } from "./FormContext";
import "./App.scss";

function App() {
  return (
    <div className="container mx-auto mt-6 px-4">
      <FormProvider>
        <ParcelForm />
        <CarriersInfo />
      </FormProvider>
    </div>
  );
}

export default App;
