import React, { useRef, useState } from "react";
import style from "./modal.module.scss";
import { Walpeper } from "../../../Assets";
import { useSelector } from "react-redux";
import SearchPhotosModal from "./SearchPhotos/SearchPhotosModal";
import GradientColor from "./GradientColor/GradientColor";
import { bgGradient } from "../../../Constants/GradientColor/GradientColor";

function DesignModal({
  loading,
  setQueryPage,
  setToggle,
  toggle,
  setSaveImg,
  handleSelectImg,
  setSearchPhoto,
  notSearchPhoto,
  handleColorPicker,
}) {
  const unsplash_data = useSelector((state) => state.api.value);
  const [searchPhotos, setSearchPhotos] = useState("");
  const designModalTask = useRef(null);

  function handleSelectImg(id) {
    unsplash_data.photos.map((data) => {
      if (data.id === id) {
        return setSaveImg(data);
      }
    });
  }

  const handleClickParrent = (e) => {
    setToggle(false);
    e.stopPropagation();
  };
  const handleProp = (e) => {
    e.stopPropagation();
  };

  const data_unsplashImg = unsplash_data?.photos.slice(0, 6);

  return (
    <div onClick={handleClickParrent} className={style.modals}>
      <div
        className={style.modal}
        ref={designModalTask}
        onClick={handleProp}
        style={{
          height: searchPhotos && `90%`,
          top: searchPhotos && `60px`,
        }}
      >
        {!searchPhotos && (
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
                  onClick={() => setSearchPhotos("photos")}
                  className={style.template}
                >
                  Подробнее
                </button>
              </div>
              <div className={style.bg_wrapper}>
                <div className={style.grid_img}>
                  {data_unsplashImg.map((data) => (
                    <div key={data.id} onClick={() => handleSelectImg(data.id)}>
                      <img src={data.urls.small} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              <div className={style.bg_color}>
                <div className={style.title}>
                  <p>Цвета</p>
                  <button
                    onClick={() => setSearchPhotos("gradient")}
                    className={style.template}
                  >
                    Подробнее
                  </button>
                </div>
                <div className={style.color}>
                  {bgGradient.map((gradient) => (
                    <div
                      onClick={(e) => setSaveImg(e.target.style.background)}
                      style={{
                        background: "rgb(87,157,255)",
                        background: gradient.background,
                      }}
                     />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {searchPhotos === "photos" && (
          <SearchPhotosModal
            loading={loading}
            setQueryPage={setQueryPage}
            setSearchPhoto={setSearchPhoto}
            setSearchPhotos={setSearchPhotos}
            setSaveImg={setSaveImg}
            setToggle={setToggle}
            handleSelectImg={handleSelectImg}
            notSearchPhoto={notSearchPhoto}
          />
        )}

        {searchPhotos === "gradient" && (
          <GradientColor setSearchPhotos={setSearchPhotos} setSaveImg={setSaveImg} />
        )}
      </div>
    </div>
  );
}

export default DesignModal;
