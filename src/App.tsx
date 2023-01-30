import Navbar from "./components/Navbar";
import AppRoutes from "./routes/routes";
import "./app.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
