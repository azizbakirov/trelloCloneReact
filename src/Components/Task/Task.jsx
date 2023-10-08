import React from "react";
import style from "./Task.module.scss";
import { Walpeper, Account } from "../../Assets/index";
import New_task from "./New_Task/New_task";

function Task() {
  return (
    <div className={style.task}>
      <div className={style.bg} style={{ backgroundImage: `url(${Walpeper})` }}>
        <div className={style.task_item}>
          <div className={style.task_board}>
            <div className={style.board}>
              <div className={style.letter}>A</div>
              <p>
                Aziz: рабочее пространство <span>Бесплатно</span>
              </p>
            </div>
            <div className={style.board_left_icon}>
              <i className="fa-solid fa-chevron-left"></i>
            </div>
          </div>
          <div className={style.board_menu}>
            <div className={style.menu}>
              <button>
                <div>
                  <i className="fa-brands fa-trello"></i>
                  <span>Доски</span>
                </div>
              </button>
              <button>
                <div>
                  <i className="fa-regular fa-user"></i>
                  <span>Участники</span>
                </div>
                <div>
                  <i className="fa-solid fa-plus"></i>
                </div>
              </button>
              <button>
                <div>
                  <i className="fa-solid fa-gear"></i>
                  <span>Настройки рабочего пространства</span>
                </div>
                <div>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </button>
            </div>
            <div className={style.tab_menu}>
              <p>Режимы просмотра рабочего пространства </p>

              <button>
                <div className={style.table}>
                  <i className="fa-solid fa-table"></i>
                  <span>Таблица</span>
                </div>
                <div className={style.menu_icon}>
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </button>

              <button>
                <div className={style.table}>
                  <i className="fa-solid fa-calendar"></i>
                  <span>Календарь</span>
                </div>
                <div className={style.menu_icon}>
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </button>
            </div>
            <div className={style.my_board}>
              <div className={style.my_board_title}>
                <p>Мои доски </p>
                <div className={style.add_meu}>
                  <i className="fa-solid fa-ellipsis"></i>
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className={style.my_board_edit}>
                <div className={style.editon}>
                  <img src={Walpeper} alt="1" />
                  <span>My board</span>
                </div>
                <div className={style.icon}>
                  <i className="fa-solid fa-ellipsis"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.edit_task}>
          <div className={style.nav}>
            <div className={style.nav_left}>
              <p>My board</p>

              <div className={style.btn}>
                <button>
                  <i className="fa-regular fa-star"></i>
                </button>
                <button>
                  <i className="fa-solid fa-lock"></i>
                </button>
                <button className={style.board_btn}>
                  <i className="fa-solid fa-chart-simple"></i>
                  <span>По доске</span>
                </button>
                <button>
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
              </div>
            </div>
            <div className={style.nav_right}>
              <button>
                <i className="fa-solid fa-rocket"></i>
              </button>
              <button>
                <i className="fa-solid fa-bolt"></i>
              </button>
              <button className={style.filter_btn}>
                <i className="fa-solid fa-filter"></i>
                <span>Фильтр</span>
              </button>
              <div className={style.acc_items}>
                <div className={style.account}>
                  <img src={Account} alt="" />
                </div>
                <button className={style.btn_send}>
                  <i className="fa-solid fa-user-plus"></i>
                  <span>Поделиться</span>
                </button>
                <button className={style.menu}>
                  <i className="fa-solid fa-ellipsis"></i>
                </button>
              </div>
            </div>
          </div>

          <div className={style.tasks}>
            <New_task />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
