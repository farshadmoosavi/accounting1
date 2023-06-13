import React from "react";
import './styles/app.scss'
import OpenAccount from "./components/OpenAccount";
import SignIn from "./components/SignIn";


function App() {
  return (
    <div className="App">
     <SignIn/>
     {/* <OpenAccount/> */}
    </div>
  );
}

export default App;
