import style from "./Team.module.scss"
function Team() {
  return (
    <div className={style.container}>
      <button>
        <i className="fa-brands fa-trello"></i>
        <span>Доски</span>
      </button>
      <button>
        <i className="fa-regular fa-heart"></i>
        <span>Важные события</span>
      </button>
      <button>
        <i className="fa-solid fa-table"></i>
        <span>Представления</span>
      </button>
      <button>
        <i className="fa-solid fa-users"></i>
        <span>Участники</span>
      </button>
      <button>
        <i className="fa-solid fa-gear"></i>
        <span>Настройки</span>
      </button>
    </div>
  );
}

export default Team