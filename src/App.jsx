
import Homepage from "./Pages/Homepage/Homepage";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink, Link} from "react-router-dom";
import Classes from "./Pages/Classes/Classes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="classes" element={<Classes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
