import React from "react";
import style from "./Main.module.scss";
import { Walpeper } from "../../Assets";
import { useDispatch, useSelector } from "react-redux";
import Task from "../Task/Task";

function Main({ openModal, setToggleFunc }) {
  const dataTasks = useSelector((state) => state.data.value);

  const handleOpenTask = (id) => {
    dataTasks.map((data) => {
      if (data.id === id) {
        return setToggleFunc(false);
      }
    });
  };

  return (
    <main className="container">
      <div className={style.content}>
        <div className={style.menu}>
          <div className={style.btn}>
            <i className="fa-brands fa-trello"></i>
            <span>Доски</span>
          </div>
          <div className={style.btn}>
            <i className="fa-brands fa-trello"></i>
            <span>Шаблоны</span>
          </div>
          <div className={`${style.btn} ${style.btn_active}`}>
            <i className="fa-solid fa-explosion"></i>
            <span>Главная страница</span>
          </div>
          <div className="line">
            <hr />
          </div>
          <div className={style.task_template}>
            <div className={style.task_template_add}>
              <p>Рабочие пространства</p>
              <i className="fa-solid fa-plus"></i>
            </div>
            <div className={style.template}>
              <div className={style.letter_wrapp}>
                <div className={style.letter}>A</div>
                <p>Aziz: рабочее пространство</p>
              </div>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>

        <div className={style.news}>Not Found</div>

        <div className={style.recently}>
          <div className={style.recent}>
            <i className="fa-regular fa-clock"></i>
            <span>Недавно просмотренное</span>
          </div>
          {dataTasks.map((data, index) => (
            <div
              key={index}
              className={style.viewed}
              onClick={() => handleOpenTask(data.id)}
            >
              <div className={style.recent_img}>
                <img
                  className={style.image}
                  src={data?.img.urls?.small}
                  alt="walpaper"
                />
              </div>
              <div className={style.recently_viewd}>
                <p className={style.title}>{data.nameTask}</p>
                <p className={style.desc}>Aziz: рабочее пространство</p>
              </div>
            </div>
          ))}
          <div className={style.create_task}>
            <p className={style.task_url}>Ссылки</p>
            <div className={style.create} onClick={openModal}>
              <p className={style.task_icon}>
                <i className="fa-regular fa-plus"></i>
              </p>
              <p>Создать доску</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
