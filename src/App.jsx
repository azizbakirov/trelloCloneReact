import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Add_task from "./Components/Modals/Add_Task/Add_task";
import Task from "./Components/Task/Task";
import { useDispatch, useSelector } from "react-redux";
import { setUnsplashApi } from "./Context/store/Unsplash/UnsplashApi";
import { getPhotosApi } from "./API/Unsplash";

function App() {
  const taskValue = useSelector((state) => state.data.value);
  const dispatch = useDispatch();

  // State toggle
  const [toggle, setToggle] = useState(true);
  const [openTaskModal, setOpenTaskModal] = useState(false);

  useEffect(() => {
    getPhotosApi("mountain").then((data) => {
      dispatch(
        setUnsplashApi({
          photos: data.data.results,
        }),
      );
    });
  }, []);

  // toggle function
  // const toggleBtn = () => {
  //   setToggle(!toggle);
  // };
  const openModal = (e) => {
    setOpenTaskModal(!openTaskModal);
  };

  return (
    <div>
      <div className="modals">
        {openTaskModal ? <Add_task openModal={openModal} /> : ""}
      </div>

      {/* Header and navbar */}
      <Header />
      {/* <Task /> */}

      {/* Main and home */}
      <Main openModal={openModal} />
    </div>
  );
}

export default App;
