import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Add_task from "./Components/Modals/Add_Task/Add_task";
import Task from "./Components/Task/Task";

function App() {
  // State toggle
  const [toggle, setToggle] = useState(false)


  // toggle function
  const toggleBtn = () => {
      setToggle(!toggle)
  }


  return (
    <div>
      <div className="modals" >
       {toggle ?  <Add_task toggleBtn={toggleBtn} /> : ""}
      </div>
       
      {/* Header and navbar */}
      <Header />

      {/* Main and home */}
     {toggle ?  <Main toggleBtn={toggleBtn} /> : <Task />}
    </div>
  );
}

export default App;
