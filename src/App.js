import "./App.css";
import { Routes, Route } from "react-router-dom";

import DetailsPage from "./Pages/DetailsPage/index";
import HomePage from "./Pages/HomePage/index";
import NavBar from "./components/NavBar/index";

function App() {
  return (
    <div className="App">
      <h1>WEBSHOP PROJECT</h1>
      <NavBar className="navbar" />
      <Routes>
        <Route path="/HomePage/index" element={<HomePage />} />
        <Route path="/DetailsPage/index" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
