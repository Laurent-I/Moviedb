import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Card from "./Components/UI/Card";

function App() {
  const [isOpen ,setIsOpen] = useState(false)

  const onClickHandler = () =>{
    setIsOpen(false)
  }
  return (
    
    <div onClick={onClickHandler} >
    <Header open = {isOpen}/>
      <Card />
    </div> 
  );
}

export default App;
