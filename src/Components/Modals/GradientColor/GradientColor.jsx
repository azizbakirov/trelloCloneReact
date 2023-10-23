import React from 'react'
import style from "./GradientColor.module.scss"

function GradientColor({setSearchPhotos}) {
  return (
    <div className={style.searchModal}>
      <div className={style.title_close}>
        <div>
          <i
            onClick={() => setSearchPhotos('')}
            className="fa-solid fa-arrow-left"
          ></i>
        </div>
        <p>Цвета</p>
        <i onClick={() => setToggle(false)} className="fa-solid fa-xmark"></i>
      </div>

      <div className={style.bg_color}>
       
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
  );
}

export default GradientColor