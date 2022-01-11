import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import Game from './pages/Game';
import Login from './pages/Login';
import Register from "./pages/Register";
import Saves from "./pages/Saves";
import NewSave from "./pages/NewSave";
import { zones } from "./objects/zones";

function App() {
  const [zone, setZone] = useState(null)
  const [inventory, setInventory] = useState([])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/play" element={<Game zone={zone} setZone={setZone} inventory={inventory} setInventory={setInventory} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/saves" element={<Saves setZone={setZone} setInventory={setInventory} />} />
        <Route path="/new_save" element={<NewSave />} />
      </Routes>
    </Router>
  );
}

export default App;
