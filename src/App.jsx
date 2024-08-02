import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import DataStore from "./store/context";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <DataStore>
        <Navbar></Navbar>
        <Outlet />
        <Footer />
      </DataStore>
    </>
  );
}

export default App;
