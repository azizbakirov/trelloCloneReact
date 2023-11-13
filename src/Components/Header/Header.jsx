import React from 'react'
import style from "./Header.module.scss"
import Navbar from './Navbar/Navbar'


function Header({setOpenTaskModal, setToggleFunc, setPageModal, openModal }) {
  return (
    <header>
      <Navbar
        setOpenTaskModal={setOpenTaskModal}
        setToggleFunc={setToggleFunc}
        openModal={openModal}
        setPageModal={setPageModal}
      />
    </header>
  );
}

export default Header