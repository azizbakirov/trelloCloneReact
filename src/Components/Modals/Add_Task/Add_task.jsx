import React, { useState } from "react";
import style from "./add.module.scss";
import { Walpeper, Grids } from "../../../Assets";
import DesignModal from "../DesignModal/DesignModal";

function Add_task({toggleBtn}) {

  const [toggle, setToggle] = useState(false)

  function parrentClick(e) {
    toggleBtn()
  }
  function child (e) {
    console.log(e);
    console.log(e.stopPropagation());

  }

  return (
    <div>
      {toggle ? <DesignModal /> : ""}
      <div className={style.modals} onClick={parrentClick}>
        <div className={style.modal} onClick={child}>
          <div className={style.title_close}>
            <div></div>
            <p>Создать доску</p>
            <i onClick={toggleBtn} className="fa-solid fa-xmark"></i>
          </div>
          <div className={style.info}>
            <div className={style.image}>
              <img className={style.img} src={Walpeper} alt="" />
            </div>
            <div className={style.grid}>
              <div>
                <i className="fa-brands fa-trello"></i>
              </div>
              <img src={Grids} alt="" />
            </div>
          </div>
          <div className={style.bg}>
            <p>Фон</p>
            <div className={style.bg_wrapper}>
              <div className="bg_1">
                <img src={Walpeper} alt="1" />
              </div>
              <div className="bg_1">
                <img src={Walpeper} alt="1" />
              </div>
              <div className="bg_1">
                <img src={Walpeper} alt="1" />
              </div>
              <div className="bg_1">
                <img src={Walpeper} alt="1" />
              </div>
            </div>
            <div className={style.bg_color}>
              <div
                style={{
                  background: "rgb(87,157,255)",
                  background:
                    "linear-gradient(90deg, rgba(87,157,255,1) 0%, rgba(150,237,255,1) 100%)",
                }}
              ></div>
              <div
                style={{
                  background: "rgb(87,157,255)",
                  background:
                    "linear-gradient(90deg, rgba(255,140,226,1) 0%, rgba(194,8,47,1) 100%)",
                }}
              ></div>
              <div
                style={{
                  background: "rgb(87,157,255)",
                  background:
                    "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
                }}
              ></div>
              <div
                style={{
                  background: "rgb(87,157,255)",
                  background:
                    "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(252,176,69,1) 100%)",
                }}
              ></div>
              <div
                style={{
                  background: "rgb(87,157,255)",
                  background:
                    "linear-gradient(0deg, rgba(135,178,255,1) 0%, rgba(255,71,71,1) 100%)",
                }}
              ></div>

              <div className={style.bg_all} onClick={() => setToggle(!toggle)}>
                <i className="fa-solid fa-ellipsis"></i>
              </div>
            </div>
          </div>
          <div className={style.tasks}>
            <form action="">
              <div className={style.board}>
                <span>Заголовок доски *</span>
                <input type="text" />
                <span>👋 Укажите название доски.</span>
              </div>
              <div className={style.select_view}>
                <label htmlFor="">Видимость</label>
                <select id="type">
                  <option value="private" selected>
                    Приватная
                  </option>
                  <option value="workingSpace">Рабочее пространство</option>
                  <option value="Public">Публичная</option>
                </select>
              </div>
              <div className={style.btn}>
                <button className={style.create}>Создать</button>
                <button className={style.template}>Сделать по шаблону</button>
              </div>
              <div className={style.info_type}>
                <div class="l4Bk0ZOo4mmgiO">
                  Используя изображения с сайта Unsplash, вы принимаете его{" "}
                  <a href="https://unsplash.com/terms" target="_blank">
                    Условия использования
                  </a>{" "}
                  и{" "}
                  <a href="https://unsplash.com/license" target="_blank">
                    правила лицензии
                  </a>
                  .
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_task;