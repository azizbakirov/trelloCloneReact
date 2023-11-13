import React from 'react'
import style from "./table.module.scss"

function Table({setOpenTaskModal, setCreateTaskModal, openModal }) {
  const handleModalTask = () =>{
    setCreateTaskModal(false)
    openModal()
  }
  const handleTable = () =>{
    setCreateTaskModal(false);

     setOpenTaskModal("newTask");
  }
  return (
    <div>
      <div className={style.table} onClick={() => setCreateTaskModal(false)}>
        <div
          className={style.option_wrapper}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style.options} onClick={handleModalTask}>
            <i className="fa-brands fa-trello"></i>
            <span>Создайте доску</span>
            <p>
              Доска представляет собой совокупность карточек, упорядоченных в
              списках. Используйте её для управления проектом, отслеживания или
              организации чего угодно.
            </p>
          </div>
          <div className={style.options}>
            <i className="fa-solid fa-table"></i>
            <span>Начните с шаблона</span>
            <p>Начните работу быстрее, используя шаблон доски.</p>
          </div>
          <div
            className={style.options}
            onClick={handleTable}
          >
            <i className="fa-solid fa-user-group"></i>
            <span>Создать рабочее пространство</span>
            <p>
              Рабочее пространство представляет собой группу досок и людей. Оно
              поможет организовать работу в компании, внештатную работу,
              семейные дела или отдых с друзьями.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table