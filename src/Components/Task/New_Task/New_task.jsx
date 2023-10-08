import React, { useRef, useState } from "react";
import style from "./newTask.module.scss";

function New_task() {
  const [textareaValue, setTextareaValue] = useState("");
  const textareaRef = useRef(null);
  const [dynamicHover, setDynamicHover] = useState(false);

  const [tasks, setTasks] = useState([
    {
      title: "Titlar",
      id: 1,
    },
    { id: 2, title: "Tasklar uchun" },
    { id: 3, title: "Mening taskim" },
  ]);

  function handleInput() {
    const textArea = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = textArea + "px";
  }

  function handleChange(e) {
    setTextareaValue(e.target.value);
    handleInput(e);
  }

  function hovers(id, item){
    tasks.map(items => {
      if (items.id === id) {
        setDynamicHover(item)
      } 
    })
  }
  

  console.log(dynamicHover);

  return (
    <div className={style.list}>
      <div className={style.container}>
        <div className={style.list_title}>
          <textarea
            value={"SAlom"}
            ref={textareaRef}
            onChange={handleChange}
            rows="1"
          />
          <div className={style.menu}>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>

        <div className={style.text}>
          {tasks.map((task) => (
            <div key={task.id} className={style.task_item}>
              <textarea
                ref={textareaRef}
                onChange={handleChange}
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
