import "./App.css";
import { Routes, Route } from "react-router-dom";

import DetailsPage from "./Pages/DetailsPage/index";
import HomePage from "./Pages/HomePage/index";
import NavBar from "./components/NavBar/index";
import ShopPage from "./Pages/ShopPage/index";
//import "./my-sass.scss";

function App() {
  return (
    <div className="App">
      <NavBar className="navbar" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details:id" element={<DetailsPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
