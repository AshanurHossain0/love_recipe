import {BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import Auth from "./pages/UserAuth";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
