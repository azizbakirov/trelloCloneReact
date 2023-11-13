import style from "./style.module.scss";
function Board({ openModal }) {
  return (
    <>
      <div className={style.news}>
        <h2>ВАШИ РАБОЧИЕ ПРОСТРАНСТВА</h2>
        <div className={style.container}>
          <div className={style.template}>
            <div className={style.letter_wrapp}>
              <div className={style.letter}>A</div>
              <p>Aziz</p>
            </div>
          </div>
          <button>
            <i className="fa-brands fa-trello"></i>
            <span>Доски</span>
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
          <button className={style.btns}>
            <i className="fa-solid fa-briefcase"></i>
            <span>Повысить</span>
          </button>
        </div>
        <div className={style.create_task}>
          <button onClick={openModal}>Создать доску</button>
        </div>
        <div className={style.view_closed_boards}>
          <button>Посмотреть закрытые доски</button>
        </div>
      </div>
    </>
  );
}

export default Board;
