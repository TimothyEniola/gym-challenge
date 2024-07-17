import Homepage from "./Pages/Homepage/Homepage";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import Classes from "./Pages/Classes/Classes";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="classes" element={<Classes />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
