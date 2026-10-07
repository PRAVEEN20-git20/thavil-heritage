import "./Students.css";
import { useState } from "react";

import yaswanth from "../assets/images/students/yaswanth.jpg";
import lokesh from "../assets/images/students/Lokesh.jpg";
import venugopal from "../assets/images/students/Venugopal.jpg";
import student4 from "../assets/images/students/Sakthivelu.jpg";
import student5 from "../assets/images/students/Murali.jpg";
import student6 from "../assets/images/students/Nithin.jpg";
import student7 from "../assets/images/students/Mahesh.jpg";
import student8 from "../assets/images/students/Abhishek.jpg";
import student9 from "../assets/images/students/Siva Shankar.jpg";
import student10 from "../assets/images/students/Santhosh.jpg";
import student11 from "../assets/images/students/Yeshwanth.jpg";
import student12 from "../assets/images/students/Purushotham.jpg";
import student13 from "../assets/images/students/Balaji.jpg";

const students = [
  {
    name: "Yaswanth K",
    level: "Senior",
    image: yaswanth,
  },
  {
    name: "Lokesh M",
    level: "Senior",
    image: lokesh,
  },
  {
    name: "Venugopal R",
    level: "Sub-Senior",
    image: venugopal,
  },
  {
    name: "Sakthivelu",
    level: "Thavil Student",
    image: student4,
  },
  {
    name: "Murali",
    level: "Thavil Student",
    image: student5,
  },
  {
    name: "Nithin R",
    level: "Thavil Student",
    image: student6,
  },
  {
    name: "Mahesh",
    level: "Thavil Student",
    image: student7,
  },
  {
    name: "Abhishek",
    level: "Thavil Student",
    image: student8,
  },
  {
    name: "Siva Shankar",
    level: "Thavil Student",
    image: student9,
  },
  {
    name: "Santhosh",
    level: "Thavil Student",
    image: student10,
  },
  {
    name: "Yeshwanth",
    level: "Thavil Student",
    image: student11,
  },
  {
    name: "Purushotham",
    level: "Thavil Student",
    image: student12,
  },
  {
    name: "Balaji",
    level: "Thavil Student",
    image: student13,
  },
];

function Students() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="students-section">

      <div className="students-heading">
        <span className="section-tag">OUR STUDENTS</span>

        <h2>Thavil Students</h2>

        <p>
          Meet the talented students learning traditional Thavil under our
          guidance.
        </p>
      </div>

      <div className={`students-grid ${showMore ? "show-more" : ""}`}>

        {students.map((student, index) => (
          <div
            className={`student-card student-card-${index + 1}`}
            key={index}
          >

            <div className="student-image">

              {student.image ? (
                <img
                  src={student.image}
                  alt={student.name}
                  className={`student-photo ${
                    student.name === "Yaswanth K"
                      ? "yaswanth-photo"
                      : ""
                  }`}
                />
              ) : (
                "THAVIL"
              )}

            </div>

            <h3>{student.name}</h3>

            <p>{student.level}</p>

          </div>
        ))}

      </div>

      <button
        type="button"
        className="students-explore-btn"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Explore More"}
      </button>

    </section>
  );
}

export default Students;