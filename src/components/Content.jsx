const Context = (props) => {
    return (
      <main className="main-container">
        <section>
          <article>
            <div>
              <img
                className="location-image"
                src={props.datas.img.src}
                alt={props.datas.img.alt}
              />
            </div>

            <div className="article-details">
              <div className="map">
                <img
                  src="./fill.png"
                  alt="location icon"
                  className="location-icon"
                />
                <span className="location">{props.datas.country}</span>
                <span className="map-link">
                  <a href={props.datas.googleMapslink}>View on Goggle Maps</a>
                </span>
              </div>
              <h2 className="location-name">{props.datas.title}</h2>
              <p className="date">{props.datas.dates}</p>
              <p className="text">{props.datas.text}</p>
            </div>
          </article>
        </section>
      </main>
    );
}

export default Context