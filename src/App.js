import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./Pages/MainPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}
