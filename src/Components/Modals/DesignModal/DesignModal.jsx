import React, { useRef, useState } from "react";
import style from "./modal.module.scss";
import { Walpeper } from "../../../Assets";
import { useSelector } from "react-redux";
import SearchPhotosModal from "../SearchPhotos/SearchPhotosModal";
import GradientColor from "../GradientColor/GradientColor";

function DesignModal({ setToggle, setSaveImg }) {
  const unsplash_data = useSelector((state) => state.api.value);
  const [lengthImg, setLengthImg] = useState(6);
  const [searchPhotos, setSearchPhotos] = useState(true);
  const designModalTask = useRef(null);

  console.log(designModalTask?.current?.style);

  function handleClickImg(e) {
    setSaveImg(e.target.src);
    // setToggle(false);
  }
  const handleClickParrent = () => {
    setToggle(false);
    e.stopPropagation();
  };
  const handleProp = (e) => {
    e.stopPropagation();
  };

  const data_unsplashImg = unsplash_data?.photos.slice(0, lengthImg);

  return (
    <div onClick={handleClickParrent} className={style.modals}>
      <div
        className={style.modal}
        ref={designModalTask}
        onClick={handleProp}
        style={{
          height: searchPhotos ? "" : `90%`,
          top: searchPhotos ? "" : `60px`,
        }}
      >
        {searchPhotos ? (
          <div>
            <div className={style.title_close}>
              <div></div>
              <p>Фон доски</p>
              <i
                onClick={() => setToggle(false)}
                className="fa-solid fa-xmark"
              ></i>
            </div>
            <div className={style.bg}>
              <div className={style.title}>
                <p>Фотографии</p>
                <button
                  onClick={() => setSearchPhotos(false)}
                  className={style.template}
                >
                  Подробнее
                </button>
              </div>
              <div className={style.bg_wrapper}>
                <div className={style.grid_img}>
                  {data_unsplashImg.map((data) => (
                    <div key={data.id} onClick={handleClickImg}>
                      <img src={data.urls.small} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              <div className={style.bg_color}>
                <div className={style.title}>
                  <p>Цвета</p>
                  <button
                    onClick={() => setSearchPhotos(false)}
                    className={style.template}
                  >
                    Подробнее
                  </button>
                </div>
                <div className={style.color}>
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
                  <div
                    style={{
                      background: "rgb(87,157,255)",
                      background:
                        "linear-gradient(0deg, rgba(155,177,255,1) 0%, rgba(255,71,71,1) 100%)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ) : <SearchPhotosModal
            setSearchPhotos={setSearchPhotos}
            setSaveImg={setSaveImg}
            setToggle={setToggle}
            handleClickImg={handleClickImg}
          />  }
          {/* <GradientColor setSearchPhotos={setSearchPhotos} /> */}
      </div>
    </div>
  );
}

export default DesignModal;
