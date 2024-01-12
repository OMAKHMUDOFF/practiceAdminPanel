import { ToastContainer } from "react-toastify";
import Config from "./config/Config";
import PageIndex from "./pages/PageIndex";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Config />
      <PageIndex />
    </>
  );
}

export default App;
