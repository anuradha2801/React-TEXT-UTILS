import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { useState } from "react";
function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
  if(mode==='light')
  {
    setMode('dark');
    document.body.style.backgroundColor='#042743';
  }

 else{
  setMode('light');
  document.body.style.backgroundColor='white';
 }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="aboutText" mode={mode}  toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading="Enter Your Text Below To Analyse" mode={mode}/>
    </div>
    </>
  );
}

export default App;
