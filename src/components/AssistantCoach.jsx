import "./AssistantCoach.css";
import praveenPhoto from "../assets/images/praveen.jpg";

function AssistantCoach() {
  return (
    <>
      <div className="assistant-heading">
        <span className="section-tag">TEACHING TEAM</span>

        <h2>Assistant Coach</h2>

        <p>
          Supporting the next generation of Thavil learners while continuing
          my own journey in education and traditional music.
        </p>
      </div>

      <div className="assistant-card">

        <div className="assistant-photo">
          <img src={praveenPhoto} alt="Praveen S - Assistant Coach" />
        </div>

        <div className="assistant-info">

          <span className="assistant-role">
            ASSISTANT COACH • BEGINNER THAVIL TRAINING
          </span>

          <h3>Praveen S</h3>

          <p>
            Final-year BE (CSE) student and Thavil practitioner, supporting
            beginner students in their early training and practice under the
            guidance of Gurunathar.
          </p>

          <div className="assistant-skills">
            <span>Beginner Thavil Practice</span>
            <span>Basic Rhythm Training</span>
            <span>Student Practice Support</span>
            <span>BE (CSE) Student</span>
          </div>

        </div>

      </div>
    </>
  );
}

export default AssistantCoach;