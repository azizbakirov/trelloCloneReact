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
import CreateTasks from "./Components/Modals/CreateTasks/CreateTasks";

function App() {
  const unsplashData = useSelector((state) => state.api.value);
  const myData = useSelector(state => state.data.value)
  const dispatch = useDispatch();


  const [toggleFunc, setToggleFunc] = useState(true); // State toggle
  const [openTaskModal, setOpenTaskModal] = useState(false); //task open modal
  const [pageModal, setPageModal] = useState(false); //open modal
  const [searchPhoto, setSearchPhoto] = useState("nature"); //search query
  const [queryPage, setQueryPage] = useState(30); //page query
  const [loading, setLoading] = useState(true); //loading state
  const [notSearchPhoto, setNotSearchPhoto] = useState(true); //search photos not search value


  useEffect(() => {
    setLoading(true);
    setNotSearchPhoto(true);
    getPhotosApi(searchPhoto, queryPage)
      .then((data) => {
        if (data.data?.total === 0) {
          console.log("rasimlar topilmadi");
          setNotSearchPhoto(false);
        } else {
          dispatch(
            setUnsplashApi({
              photos: data.data.results,
            }),
          );
          setLoading(false);
        }
      })
      .catch((err) => window.alert(err))
      .finally();
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
            setNotSearchPhoto={setNotSearchPhoto}
            notSearchPhoto={notSearchPhoto}
          />
        ) : (
          ""
        )}
        {/* <MenuModal /> */}
        {openTaskModal === "newTask" && (
          <CreateTasks setOpenTaskModal={setOpenTaskModal} />
        )}
      </div>

      {/* Header and navbar */}
      <Header
        setOpenTaskModal={setOpenTaskModal}
        setToggleFunc={setToggleFunc}
        setPageModal={setPageModal}
        openModal={openModal}
      />

      {/* Main and home */}
      {toggleFunc ? (
        <Main
        
          setOpenTaskModal={setOpenTaskModal}
          openModal={openModal}
          setToggleFunc={setToggleFunc}
        />
      ) : (
        <Task toggleFunc={toggleFunc} />
      )}
    </div>
  );
}

export default App;
