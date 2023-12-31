import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import style from "./newTask.module.scss";

function New_task() {
  const textareaRef = useRef(null);
  const textHight = useRef(null);
  const taskData = useSelector((state) => state.data.value);
  const [dynamicHover, setDynamicHover] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [inputActive, setInputActive] = useState(false);

  function handleInput() {
    const textArea = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = textArea + "px";
  }

  function handleChange(e) {
    dynamicHight();
    handleInput(e);
  }

  function hovers(id, item) {
    tasks.map((items) => {
      if (items.id === id) {
        setDynamicHover(item);
      }
    });
  }

  function hoverIcon(id) {
    tasks.map((item) => {
      if (item.id === id) {
        return dynamicHover;
      }
    });
  }

  function dynamicHight() {
    const textArea = textHight.current.scrollHeight;
    textHight.current.style.height = textArea + "px";

    if (textHight.current.style.height === 60 + "vh") {
      console.log("bor");
    } else {
      console.log("yoq");
    }
  }

  return (
    <div className={style.list}>
      <div className={style.container} ref={textHight}>
        <div className={style.list_title}>
          <textarea
            ref={textareaRef}
            onChange={handleChange}
            rows="1"
            value={'1'}
          />
          <div className={style.menu}>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>

        <div className={style.text}>
          {tasks.map((task) => (
            <div key={task.id} className={style.task_item}>
              <textarea
                // readOnly
                ref={textareaRef}
                // onChange={handleChange}
                cols="30"
                rows="1"
                onMouseEnter={() => hovers(task.id, true)}
                onMouseLeave={() => hovers(task.id, false)}
                value={task.title}
              ></textarea>
              {dynamicHover ? <i className="fa-solid fa-pen"></i> : ""}
            </div>
          ))}
        </div>
        <div className={style.add_card}>
          <button className={style.btn}>
            <i className="fa-solid fa-plus"></i>
            <span>Добавить карточку</span>
          </button>
          <button className={style.template}>
            <i className="fa-regular fa-note-sticky"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default New_task;
