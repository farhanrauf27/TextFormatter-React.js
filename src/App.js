import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';


import { BrowserRouter as Router, 
  Routes, 
  Route, 
 } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#212529';
      showAlert("dark mode has enable","success");
      
    //   setInterval(() => {
    //     document.title='Text Utiles - Dark mode';
    //   }, 2000);                                     for timing interval of something
    //   setInterval(() => {
    //     document.title='Text Utiles is amazaing';
    //   }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("light mode has enable","success");
    }
  }

  const [gmode, setgMode] = useState('light');
  const togglegMode=()=>{
    if(gmode==='light' || gmode==='dark'){
      setgMode('success');
      document.body.style.backgroundColor ='green';
      showAlert("Green mode has enable","success");
    }
    else{
      setgMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("light mode has enable","success");
    }
  }




  const [alert, setalert] = useState(null);
  const showAlert=(message, type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1000)
  }
  return (
    <>
   
<Router>
<Navbar title="TextUtiles" about="About us" mode={mode} toggleMode={toggleMode} togglegMode={togglegMode}  />
<Alert alert={alert}/>
<div className="container my-3">


<Routes>

          <Route exact path="/about" element={<About mode={mode} />}/>
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter The text to analyze below" mode={mode}/>}/>
        </Routes>
</div>
</Router>

</>

  );
}

export default App;
