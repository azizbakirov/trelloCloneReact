import style from "./styel.module.scss";
import { Bg, Table } from "../../../Assets";

function CreateTasks({ setOpenTaskModal }) {

  const handleNoClickParrent = (e) => {
    e.stopPropagation();

  }

  return (
    <div className={style.bacdrop} onClick={() => setOpenTaskModal(false)}>
      <div className={style.wrapper} onClick={handleNoClickParrent}>
        <div className={style.form}>
          <form>
            <div className={style.information}>
              <h1>Создайте рабочее пространство</h1>
              <p>
                Повысьте производительность: участники команды смогут получать
                удобный доступ ко всем доскам.
              </p>
            </div>
            <div className={style.title}>
              <p>Название рабочего пространства</p>
              <input type="text" placeholder="Компания «Тако»" />
              <span>
                Укажите название вашей команды, компании или организации.
              </span>
            </div>
            <div className={style.categorys}>
              <p>Тип рабочего пространства</p>
              <select defaultValue={"crm"} id="type">
                <option value="marketing">Маркетинг</option>
                <option value="busines">Малый бизнес</option>
                <option value="crm">Продажи CRM</option>
                <option value="education">Образование</option>
                <option value="operations">Операции</option>
                <option value="engineering">Инженерия/ИТ</option>
                <option value="personal">Управление персоналом</option>
                <option value="Other">Другое</option>
              </select>
            </div>
            <div className={style.description}>
              <p>
                Описание рабочего пространства <span>Необязательно</span>
              </p>
              <textarea
                cols="30"
                rows="10"
                placeholder="Здесь наша команда хранит всю нужную информацию."
              />
            </div>
            <div className={style.submit}>
              <p>Расскажите участникам немного о рабочем пространстве.</p>
              <button>Продолжить</button>
            </div>
          </form>
        </div>
        <div className={style.bgImage}>
          <img className={style.bg} src={Bg} alt="" />
          <img className={style.table} src={Table} alt="" />
          <div className={style.close} onClick={() => setOpenTaskModal(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTasks;
