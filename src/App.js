import './App.css';
import Navbar from './Component/Navbar';
import TextUtil from './Component/TextUtil';
import { useState } from 'react';
import Alert from './Component/Alert';
import About from './Component/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  let [mode,setMode] = useState("light");
  let [alert,setAlert] = useState(null);

  let showAlert = (message,type)=>{
    setAlert({
      message: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  let toggleMode = ()=>{
    if(mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor="#222222";
        showAlert("Success: Dark Mode Activated!!","success");
    }else{
        setMode("light");
        document.body.style.backgroundColor="white";
        showAlert("Success: Light Mode Activated !!","success");
    }
}
  return (
    <>
    <Router>
    <Navbar text="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
     <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextUtil heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} showAlert={showAlert} />} />
     </Routes>
    </div>
    
    </Router>
    </>
  );
}

export default App;


// npx create-react-app my-app  - command to create react app
// npm install react-router-dom - npm command for react router 
// "Switch" is replaced by routes "Routes"
// element is necessary in Route for it to work