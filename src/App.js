import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/main";
import Vehicles from "./pages/Vehicles";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
