import { Link, Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/fragments/Navbar";
import AppRoutes from "./routes/Routes";
import Button from "./components/Elements/Button/Button";
import { useDarkMode } from "./context/DarkModeContext";

function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen transition-colors duration-700  ${
        isDarkMode ? "bg-slate-800 text-white" : "bg-slate-200"
      }`}>
      <Navbar
        variant={`${
          isDarkMode
            ? "bg-red-500 backdrop-blur-[5px]"
            : "bg-slate-200/40 backdrop-blur-[5px]"
        } `}></Navbar>

      <AppRoutes />
    </div>
  );
}

export default App;
