import React from "react";
import style from "./Main.module.scss";
import { Walpeper } from "../../Assets";

function Main({toggleBtn}) {

  // toggle add btn
  

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
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>

        <div className={style.news}>Not Found</div>

        <div className={style.recently}>
          <div className={style.recent}>
            <i className="fa-regular fa-clock"></i>
            <span>Недавно просмотренное</span>
          </div>
          <div className={style.viewed}>
            <div className={style.recent_img}>
              <img src={Walpeper} alt="walpaper" />
            </div>
            <div className={style.recently_viewd}>
              <p className={style.title}>1-on-1 Meeting Agenda</p>
              <p className={style.desc}>Aziz: рабочее пространство</p>
            </div>
          </div>
          <div className={style.create_task}>
            <p className={style.task_url}>Ссылки</p>
            <div className={style.create} onClick={toggleBtn}>
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
