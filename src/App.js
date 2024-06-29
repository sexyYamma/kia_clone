import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/main";
import Vehicles from "./pages/Vehicles";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
    </>
  );
}

export default App;
