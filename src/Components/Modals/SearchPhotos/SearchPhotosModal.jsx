import React, { useRef } from "react";
import { useSelector } from "react-redux";
import style from "./SearchPhotosModal.module.scss";
import { MiniLoading } from "../../Loading";

function SearchPhotosModal({
  loading,
  setQueryPage,
  setSearchPhoto,
  setToggle,
  setSaveImg,
  handleSelectImg,
  setSearchPhotos,
}) {
  const scrollWalpaper = useRef(null);
  const data_unsplashImg = useSelector((state) => state.api.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchPhoto(e.target[0].value);
    e.target[0].value = "";
  };

  const handleScroll = (e) => {
    if (e.target.clientHeight) {
      // console.log(e.target.width);
    }
    // console.log(e.target.clientHeight);
  };

  return (
    <div className={style.searchModal}>
      <div className={style.title_close}>
        <div>
          <i
            onClick={() => setSearchPhotos("")}
            className="fa-solid fa-arrow-left"
          ></i>
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
            <form action="" onSubmit={handleSearchSubmit}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Фотографии" />
            </form>
          </div>
        </div>
        <div
          className={style.bg_wrapper}
          ref={scrollWalpaper}
          onScroll={handleScroll}
        >
          {loading ? (
            <div className={style.loading}>
              <MiniLoading />
            </div>
          ) : (
            <div className={style.grid_img}>
              {data_unsplashImg.photos.map((data) => (
                <div key={data.id} onClick={() => handleSelectImg(data.id)}>
                  <img src={data.urls.small} alt="" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPhotosModal;
