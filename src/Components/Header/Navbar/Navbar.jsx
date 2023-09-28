import React from "react";
import style from "./Nav.module.scss";
import { Logo, Burger, Account } from "../../../Assets";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className="container">
        <div className={style.nav}>
          <div className={style.wrapper}>
            <div className={style.burger}>
              <img src={Burger} alt="" className={style.menu} />
            </div>
            <div className="logo">
              <img src={Logo} alt="" className={style.logo} />
            </div>
            <div className={style.pages}>
              <button className={style.btn}>
                <span>Рабочие пространства</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <button className={style.btn}>
                <span>Недавние</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <button className={style.btn}>
                <span>В избранном</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <button className={style.btn}>
                <span>Шаблоны</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>
            <div className="add_task">
              <button className={style.add_btn}>Создать</button>
            </div>
          </div>
          <div className={style.right_wrapper}>
            <div className={style.search}>
              <form action="">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Поиск" />
              </form>
            </div>
            <div className={style.notification}>
              <button>
                <i className="fa-regular fa-bell"></i>
              </button>
            </div>
            <div className={style.info}>
              <button>
                <i className="fa-regular fa-circle-question"></i>
              </button>
            </div>
            <div className={style.account}>
                <img src={Account} alt="" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
