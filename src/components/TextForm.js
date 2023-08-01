import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick= ()=>{
        console.log("Upper case clicked");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Text is capitalized","success")
        
    }

    const handleloClick= ()=>{
        console.log("lowercase case clicked");
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Text is lowerized","success")
    }

    const clear= ()=>{
        // console.log("lowercase case clicked");
        let newText='';
        setText(newText);
        props.showAlert("Text is Cleared","success")
    }
    const handleCopy= ()=>{
        
      
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();     //deselect selected text
        props.showAlert("Text is Copied to Clipboard","success")
       
    }
    const handleSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("All spaces are removed","success")
    }

    const handleOnChange= (event)=>{
        console.log("On chnage");
        setText(event.target.value);
    }
    
   

    const [text, setText] = useState('');
    // text="new text";  //Wrong way
    // setText('Bye'); //write way
    return (
        <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
  <h1 className='mb-4'>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#212529', color:props.mode==='light'?'black':'white'}} rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}> Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleloClick}> Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-success mx-2 my-1"  onClick={clear}> Clear Text</button>
  <button disabled={text.length===0} className="btn btn-success mx-2 my-1"  onClick={handleCopy}> Copy Text</button>
  <button disabled={text.length===0} className="btn btn-success mx-2 my-1"  onClick={handleSpace}>Remove Extra spaces</button>
  
  </div>

  <div className="container my-2"  style={{color:props.mode==='light'?'black':'white'}} >
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
    <p> Time required to read in minutes:{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
    <h2>Privew</h2>
    <p>{text.length<=0?"Enter something to preview":text}</p>
  </div>
  </>
  )
}
