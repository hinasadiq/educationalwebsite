import React from "react";
import "./Courses.css";
import ai from '../../../assets/img/pexels-photo-8849295.webp';
import sd from '../../../assets/img/sd.jpg';
import dg from '../../../assets/img/pexels-photo-6476591.webp';
import hacking from '../../../assets/img/hacking1.jpg';
import  Mern from '../../../assets/img/mern.jpeg';
import  phython from '../../../assets/img/phython.avif';
import { Button } from "bootstrap";

function Courses() {
  const courseData = [
    {
      title: "AI Development",
      desc: "Master AI Development",
      img: ai,
    },
    {
      title: "Digital Marketing",
      desc: "Master Digital Marketing!!!",
      img: dg,
    },
    {
      title: "Cyber Security",
      desc: "Master Cyber Security",
      img: hacking,
    },
    {
      title: "Software Development",
      desc: "Master Software Development",
      img: sd,
    },
    {
      title: "Mern Stack",
      desc: "Master FullSTACK Development",
      img: Mern,
    },
    {
      title: "Phython ",
      desc: "Phython Development",
      img: phython,
    },
  ];

  return (
    <div className="container course-container">
      <div className="course-top">
        <h2 className="section_title">Our Free Courses</h2>
        <p>The Top Trending Free Courses With Free Certificates</p>
        <div className="row">
          {courseData.map((course, index) => (
            <div className="col-md-4" key={course.title}>
              <div className="card mb-4">
                <img className="card-img-top" src={course.img} alt={course.title} />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  
  );
}

export default Courses;
