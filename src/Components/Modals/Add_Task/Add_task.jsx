import React, { useState } from "react";
import style from "./add.module.scss";
import { Walpeper, Grids } from "../../../Assets";
import DesignModal from "../DesignModal/DesignModal";
import { useDispatch, useSelector } from "react-redux";
import { setTaskValue } from "../../../Context/store/TaskAddValue/TaskAddValueSlice";
import uniqid from "uniqid";
import { bgGradient } from "../../../Constants/GradientColor/GradientColor";

function Add_task({
  notSearchPhoto,
  loading,
  setQueryPage,
  openModal,
  handleSelectImg,
  setToggleFunc,
  
  setSearchPhoto,
}) {
  const data_UNSPLASH_IMG = useSelector((state) => state.api.value);
  const dataTask = useSelector((state) => state.data.value);
  const [saveGradientColor, setSaveGradientColor] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [btnToggle, setBtnToggle] = useState(true);
  const [saveImg, setSaveImg] = useState(
    data_UNSPLASH_IMG.photos[0],
    );
    const dispatch = useDispatch();
    const dataUnsplashImg = data_UNSPLASH_IMG?.photos.slice(0, 4);
  

  function handleSelectImg(id) {
    data_UNSPLASH_IMG.photos.map((data) => {
      if (data.id === id) {
        return setSaveImg(data);
      }
    });
  }

  function parrentClick(e) {
    openModal();
    e.preventDefault();
  }
  function child(e) {
    e.stopPropagation();
  }

  const handleTypeInput = (e) => {
    if (e.target.value.length === 0) {
      setBtnToggle(true);
    } else {
      setBtnToggle(false);
    }
  };

  const handleSubmitValue = (e) => {
    e.preventDefault();

    dispatch(
      setTaskValue([
        ...dataTask,
        {
          id: uniqid(),
          img: saveImg,
          nameTask: e.target[0].value,
          typeTask: e.target[1].value,
        },
      ]),
    );
    e.target[0].value = "";
  };

  const handleColorPicer = (e) => {
    setSaveImg(e.target.style.background);
  };


  return (
    <div>
      {toggle ? (
        <DesignModal
        handleColorPicer={handleColorPicer}
          loading={loading}
          setQueryPage={setQueryPage}
          setSearchPhoto={setSearchPhoto}
          setToggle={setToggle}
          setSaveImg={setSaveImg}
          notSearchPhoto={notSearchPhoto}
        />
      ) : (
        ""
      )}
      <div className={style.modals} onClick={parrentClick}>
        <div className={style.modal} onClick={child}>
          <div className={style.title_close}>
            <div></div>
            <p>Создать доску</p>
            <i onClick={openModal} className="fa-solid fa-xmark"></i>
          </div>
          <div className={style.info}>
            <div className={style.image}>
            

              {saveImg?.urls ? (
                <img
                  src={
                    saveImg?.urls?.small ||
                    data_UNSPLASH_IMG.photos[0].urls.small
                  }
                  alt=""
                  className={style.img}
                />
              ) : (
                <div
                  className={style.img}
                  style={{
                    background: "rgb(87,157,255)",
                    background: saveImg,
                  }}
                ></div>
              )}
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
              {dataUnsplashImg.map((data) => (
                <div
                  key={data.id}
                  className="bg_1"
                  onClick={() => handleSelectImg(data.id)}
                >
                  <img src={data.urls.small} id={data.id} />
                  <i className="fas-fa succes"></i>
                </div>
              ))}
            </div>
            <div className={style.bg_color}>
              {bgGradient.map((gradients) => (
                <>
                  <div
                  key={gradients}
                    onClick={handleColorPicer}
                    id={uniqid}
                    style={{
                      background: "rgb(87,157,255)",
                      background: gradients.background,
                    }}
                  ></div>
                </>
              ))}
              <div className={style.bg_all} onClick={() => setToggle(!toggle)}>
                <i className="fa-solid fa-ellipsis"></i>
              </div>
            </div>
          </div>
          <div className={style.tasks}>
            <form action="" onSubmit={handleSubmitValue}>
              <div className={style.board}>
                <span>Заголовок доски *</span>
                <input
                  autoFocus
                  onChange={handleTypeInput}
                  type="text"
                  defaultValue={""}
                />
                {btnToggle ? <span>👋 Укажите название доски.</span> : ""}
              </div>
              <div className={style.select_view}>
                <label htmlFor="">Видимость</label>
                <select defaultValue={"private"} id="type">
                  <option value="private">Приватная</option>
                  <option value="workingSpace">Рабочее пространство</option>
                  <option value="Public">Публичная</option>
                </select>
              </div>
              <div className={style.btn}>
                <button
                  disabled={btnToggle ? true : false}
                  className={style.create}
                  onClick={() => setToggleFunc(false)}
                >
                  Создать
                </button>
                <button className={style.template}>Сделать по шаблону</button>
              </div>
              <div className={style.info_type}>
                <div className="l4Bk0ZOo4mmgiO">
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
