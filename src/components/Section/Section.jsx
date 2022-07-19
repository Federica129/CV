import photo from "./IMG-20191205-WA0062.jpg";
import "./Section.css";

function Section() {
  return (
    <div className="box">
      <section className="main-text">
        <h2>I am Federica Schillaci</h2>
        <p>a future Front-end Web Developer</p>
      </section>
      <div className="photo">
        <img src={photo} alt="photo" />
      </div>
    </div>
  );
}

export default Section;
