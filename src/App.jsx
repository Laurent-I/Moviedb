import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Card from "./Components/UI/Card";
import Poster from "./Components/Navbar/Poster";

function App() {
  const [isOpen ,setIsOpen] = useState(false)

  const onClickHandler = () =>{
    setIsOpen(false)
  }
  return (
    
    <div onClick={onClickHandler} className="font-mono" >
    <Header open = {isOpen}/>
      {/* <Card /> */}
      <Poster/>
    </div> 
  );
}

export default App;
