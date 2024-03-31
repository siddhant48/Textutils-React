import React, { Component, useState } from 'react'

export default function TextUtil(prop) {
    let convertToUpper = () =>{
        let a= text.toUpperCase();
        setText(a);
        prop.showAlert("Success: Text Converted to UpperCase!!","success");
    }

    let convertToLower = () =>{
        let a= text.toLowerCase();
        setText(a);
        prop.showAlert("Success: Text Converted to LowerCase!!","success");
    }

    let toChangeText = (event) =>{
        setText(event.target.value);
    }

    let clearText = () =>{
        setText("");
        prop.showAlert("Success: Text Cleared!!","success");
    }

    let copyText = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        prop.showAlert("Success: Copy to Clipboard!!","success");
    }

    let removeExtraSpace = ()=>{
        setText(text.replace(/\s+/g, ' ').trim());
        prop.showAlert("Success: Extra Space Removed!!","success");
    }

    let countWords= ()=>{
        return text.split(/\s+/).filter((word)=>{
           return word.length>0 ;  
        }).length;
    };

    let [text,setText] = useState("");
  return (
    <>
    <div className={`container text-${prop.mode === 'light'? 'dark':'light'}`}> 
            <h1 style={{margin: "30px", textAlign:'center'}}>{prop.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" onChange={toChangeText} value={text}  placeholder="Enter the text to perform operation" id="myBox" rows="8" 
            style={{backgroundColor: prop.mode==='dark'?'grey':'white', color: prop.mode==='dark'?'white':'#042743'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={convertToUpper} >Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={convertToLower} >Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={copyText} >Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={removeExtraSpace} >Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={clearText} >Clear Text</button>
    </div>
    <div className={`container text-${prop.mode === 'light'? 'dark':'light'} my-3 `}>
        <h2>Text Summary</h2>
        <p>The count of total word is {countWords()} and total character is {text.length}</p>
        <p>{0.008 *  countWords()} Minutes read</p>
    </div>
    <div className={`container text-${prop.mode === 'light'? 'dark':'light'}`}>
        <h1>Preview</h1>
        {text.length>0? text:"Enter something in the textbox above to preview it here"}
    </div>
    </>
  )
}
