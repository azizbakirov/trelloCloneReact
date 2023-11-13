import React, { useState } from "react";
import style from "./Main.module.scss";
import { Walpeper } from "../../Assets";
import { useDispatch, useSelector } from "react-redux";
import Task from "../Task/Task";
import Team from "./HomeTeamTab/Team";
import CreateTaskItem from "./Home/Home";
import Home from "./Home/Home";
import Board from "./Boards/Board";

function Main({openTaskModal, setOpenTaskModal, openModal, setToggleFunc }) {
  const dataTasks = useSelector((state) => state.data.value); //data state value inputs
  const [createBtn, setCreateBtn] = useState(false);
  const [activeBtn, setActiveBtn] = useState("homePage");

  const handleOpenTask = (id) => {
    dataTasks.map((data) => {
      if (data.id === id) {
        return setToggleFunc(data);
      }
    });
  };

  return (
    <main className="container_content">
      <div className={style.content}>
        <div className={style.menu}>
          <div
            className={`${style.btn} ${
              activeBtn === "boards" ? style.btn_active : ""
            }`}
            onClick={() => setActiveBtn("boards")}
          >
            <i className="fa-brands fa-trello"></i>
            <span>Доски</span>
          </div>
          <div
            className={`${style.btn} ${
              activeBtn === "templates" ? style.btn_active : ""
            }`}
            onClick={() => setActiveBtn("templates")}
          >
            <i className="fa-brands fa-trello"></i>
            <span>Шаблоны</span>
          </div>
          <div
            className={`${style.btn} ${
              activeBtn === "homePage" ? style.btn_active : ""
            }`}
            onClick={() => setActiveBtn("homePage")}
          >
            <i className="fa-solid fa-explosion"></i>
            <span>Главная страница</span>
          </div>
          <div className="line">
            <hr />
          </div>
          <div className={style.task_template}>
            <div className={style.task_template_add}>
              <p>Рабочие пространства</p>
              <i
                className="fa-solid fa-plus"
                onClick={() => setOpenTaskModal("newTask")}
              ></i>
            </div>
            <div
              className={style.template}
              onClick={() => setCreateBtn(!createBtn)}
            >
              <div className={style.letter_wrapp}>
                <div className={style.letter}>A</div>
                <p>Aziz: рабочее пространство</p>
              </div>
              <i
                className={`fa-solid ${
                  createBtn ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </div>
            {createBtn ? <Team /> : ""}
          </div>
        </div>

        <div className={style.wrapper_tasks}>
          {activeBtn === "homePage" && (
            <Home dataTasks={dataTasks} openModal={openModal} />
          )}
          {activeBtn === "boards" && <Board openModal={openModal} />}
        </div>
      </div>
    </main>
  );
}

export default Main;
