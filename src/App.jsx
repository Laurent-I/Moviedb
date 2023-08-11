import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Card from "./Components/UI/Card";
import Poster from "./Components/Navbar/Poster";

function App() {
  return (
    
    <div className="font-mono" >
    <Header />
      {/* <Card /> */}
      <Poster/>
    </div> 
  );
}

export default App;
