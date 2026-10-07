import "./Guru.css";
import guruImage from "../assets/images/guru.jpg";

function Guru() {
  return (
    <>
      <div className="guru-content">

        <span className="section-tag">THE GURUNATHAR</span>

        <h2>R. Siva Shankar</h2>

        <h3>Gurunathar • Thavil Maestro • Mentor</h3>

        <p>
          R. Siva Shankar is a dedicated Thavil artist and teacher committed
          to preserving the traditional art of Thavil and passing its knowledge
          to the next generation.
        </p>

        <p>
          Through years of practice, performance, and teaching, he continues
          to inspire students to understand not only the rhythm of the
          instrument, but also the discipline and heritage behind it.
        </p>

        <div className="guru-highlights">

          <div>
            <strong>01</strong>
            <span>
              Traditional
              <br />
              Training
            </span>
          </div>

          <div>
            <strong>02</strong>
            <span>
              Performance
              <br />
              Experience
            </span>
          </div>

          <div>
            <strong>03</strong>
            <span>
              Student
              <br />
              Mentorship
            </span>
          </div>

        </div>

      </div>

      <div className="guru-image">
        <img
          src={guruImage}
          alt="R. Siva Shankar - Thavil Maestro"
        />
      </div>
    </>
  );
}

export default Guru;