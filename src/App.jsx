// App.jsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
     <Header/>
      
      {/* <NavBar /> */}
      <AppRoutes />
     
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
