import React from "react";
import { bgGradient } from "../../../../Constants/GradientColor/GradientColor";
import style from "./GradientColor.module.scss";

function GradientColor({ setSearchPhotos, setSaveImg }) {
  return (
    <div className={style.searchModal}>
      <div className={style.title_close}>
        <div>
          <i
            onClick={() => setSearchPhotos("")}
            className="fa-solid fa-arrow-left"
          ></i>
        </div>
        <p>Цвета</p>
        <i onClick={() => setToggle(false)} className="fa-solid fa-xmark"></i>
      </div>

      <div className={style.bg_color}>
        <div className={style.color}>
          {bgGradient.map((gradient) => (
            <div
              onClick={(e) => setSaveImg(e.target.style.background)}
              style={{
                background: "rgb(87,157,255)",
                background: gradient.background,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GradientColor;
