import "./App.css";
import { Routes, Route } from "react-router-dom";

import DetailsPage from "./Pages/DetailsPage";
import HomePage from "./Pages/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <h1>WEBSHOP PROJECT</h1>
      <NavBar />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/DetailsPage" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
