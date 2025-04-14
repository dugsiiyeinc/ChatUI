// App.jsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";
import React from "react";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
