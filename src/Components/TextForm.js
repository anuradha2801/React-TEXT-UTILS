
import React, {useState} from 'react'





export default function TextForm(props)
{
    const handleUpClick=()=>{
    //console.log("Uppercase was cliked")
    let newText=text.toUpperCase();
     setText(newText)
    }
    const handleOnChange=(event)=>{
    //console.log("On change");
    setText(event.target.value);
    }
    const[text,setText]=useState("");
  
   const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
   }
    
   const handleExtraSpaces=()=>{
   let newText=text.split(/[ ]+/);
   setText(newText.join(" "))
    

    }   
const msg = new SpeechSynthesisUtterance()

   const speechHandler = (msg) => {
     msg.text = text
     window.speechSynthesis.speak(msg)
   }

   
    return(
        <>       
         <div className="conatainer" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3 "  style={{backgroundColor:props.mode==='dark'?'black':'white'}}>
            <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}}value={text} id="textAreaExample2" placeholder='Enter Text' onChange={handleOnChange}rows="9" col="5"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase  </button>
            <button className="btn btn-primary mx-2 my-2" onClick={() => speechHandler(msg)}>Convert to Speech</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            
        </div>
        <div className="container my-5" style={{color:props.mode==='dark'?'white':'black'}}>
            <h4>Your Text Summary</h4>
            <p>{text.split(" ").filter((element)=>{
                return element.length!==0
            }).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minute read</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Enter text to preview it here"}</p>
        </div>
        </>




    )
    
}