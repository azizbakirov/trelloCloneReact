import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Add_task from "./Components/Modals/Add_Task/Add_task";
import Task from "./Components/Task/Task";
import { useDispatch, useSelector } from "react-redux";
import { setUnsplashApi } from "./Context/store/Unsplash/UnsplashApi";
import { getPhotosApi } from "./API/Unsplash";
import PageModal from "./Components/Modals/PageModal/PageModal";

function App() {
  const unsplashData = useSelector(state => state.api.value)
  const dispatch = useDispatch();

  // State toggle
  const [toggleFunc, setToggleFunc] = useState(true);
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const [pageModal, setPageModal] = useState(false);
  const [searchPhoto, setSearchPhoto] = useState("nature")
  const [queryPage, setQueryPage] = useState(30)
  

  // Loading state
  const [loading, setLoading] = useState(true)

  console.log(unsplashData);
  console.log(searchPhoto);


  useEffect(() => {
    console.log("loading");
    setLoading(true)
    getPhotosApi(searchPhoto, queryPage)
    .then((data) => {
      dispatch(
        setUnsplashApi({
          photos: data.data.results,
        }),
        );
        setLoading(false)
        console.log('loading end', data);
    });
  }, [searchPhoto]);

  const openModal = () => {
    setOpenTaskModal(!openTaskModal);
  };

  return (
    <div>
      <div className="modals">
        {pageModal ? <PageModal /> : ""}

        {openTaskModal ? (
          <Add_task
            loading={loading}
            setQueryPage={setQueryPage}
            setSearchPhoto={setSearchPhoto}
            openModal={openModal}
            setToggleFunc={setToggleFunc}
          />
        ) : (
          ""
        )}
      </div>

      {/* Header and navbar */}
      <Header setToggleFunc={setToggleFunc} setPageModal={setPageModal} />

      {/* Main and home */}
      {toggleFunc ? (
        <Main openModal={openModal} setToggleFunc={setToggleFunc} />
      ) : (
        <Task />
      )}
    </div>
  );
}

export default App;
