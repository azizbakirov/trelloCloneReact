import React from 'react'
import style from "./Header.module.scss"
import Navbar from './Navbar/Navbar'


function Header({ setToggleFunc, setPageModal }) {
  return (
    <header>
      <Navbar setToggleFunc={setToggleFunc} setPageModal={setPageModal} />
    </header>
  );
}

export default Header