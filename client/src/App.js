import {BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import Auth from "./pages/UserAuth";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
