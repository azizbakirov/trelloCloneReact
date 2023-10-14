import React from "react";
import { useSelector } from "react-redux";
import style from "./SearchPhotosModal.module.scss";

function SearchPhotosModal({
  setSaveImg,
  setToggle,
  handleClickImg,
  setSearchPhotos,
}) {
  const data_unsplashImg = useSelector((state) => state.api.value);

  //   const handleClickImg = () => {
  //     setSaveImg(e.target.src);
  //   };

  return (
    <div className={style.searchModal}>
      <div className={style.title_close}>
        <div>
          <i onClick={() => setSearchPhotos(true)} className="fa-solid fa-arrow-left"></i>
        </div>
        <p>
          Фотографии:{" "}
          <a
            href="https://unsplash.com/?utm_source=trello&amp;utm_medium=referral&amp;utm_campaign=api-credit"
            rel="noreferrer noopener"
            target="_blank"
          >
            Unsplash
          </a>
        </p>
        <i onClick={() => setToggle(false)} className="fa-solid fa-xmark"></i>
      </div>

      <div className={style.bgWalpaper}>
        <div className={style.title}>
          <div className={style.search}>
            <form action="">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Фотографии" />
            </form>
          </div>
        </div>
        <div className={style.bg_wrapper}>
          <div className={style.grid_img}>
            {data_unsplashImg.photos.map((data) => (
              <div key={data.id} onClick={handleClickImg}>
                <img src={data.urls.small} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPhotosModal;
