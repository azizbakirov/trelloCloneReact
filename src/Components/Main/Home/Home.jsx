import style from "./style.module.scss"

function Home({ dataTasks, openModal }) {
  return (
    <>
      <div className={style.news}>Not Found</div>
      <div className={style.recently}>
        <div className={style.recent}>
          <i className="fa-regular fa-clock"></i>
          <span>Недавно просмотренное</span>
        </div>
        {dataTasks.map((data, index) => (
          <div
            key={index}
            className={style.viewed}
            onClick={() => handleOpenTask(data.id)}
          >
            <div className={style.recent_img}>
              {data?.img.urls ? (
                <img
                  className={style.image}
                  src={data?.img.urls?.small}
                  alt="walpaper"
                />
              ) : (
                <div
                  className={style.image}
                  style={{
                    background: "rgb(87,157,255)",
                    background: data?.img,
                  }}
                ></div>
              )}
            </div>
            <div className={style.recently_viewd}>
              <p className={style.title}>{data.nameTask}</p>
              <p className={style.desc}>Aziz: рабочее пространство</p>
            </div>
          </div>
        ))}
        <div className={style.create_task}>
          <p className={style.task_url}>Ссылки</p>
          <div className={style.create} onClick={openModal}>
            <p className={style.task_icon}>
              <i className="fa-regular fa-plus"></i>
            </p>
            <p>Создать доску</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home