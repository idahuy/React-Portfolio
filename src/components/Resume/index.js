import React from "react";
import resume from "../../assets/resume/HuyNguyenResume.pdf";
import { BsCloudDownload } from "react-icons/bs";
import { MdFoundation } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GrDocumentPerformance } from "react-icons/gr";

function Resume() {
  return (
    <div>
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">My Resume</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <a href={resume} className="download-logo" download>
                <BsCloudDownload />
              </a>
              <p>
                Below are a list of my skills as a developer
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="home-page-body" className="resume-body">
        <div className="article column1">
          <p className="column-title">Font-End</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <MdFoundation />
              </li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </p>
        </div>

        <div className="article column2">
          <p className="column-title">Back-End</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <GrTechnology />
              </li>
              <li>MERN</li>
              <li>Sequel</li>
              <li>Object-Relational Mapping(ORM)</li>
              <li>Model-View-Controller (MVC)</li>
              <li>Object-Oriented Programming (OOP)</li>
            </ul>
          </p>
        </div>
        <div className="article column3">
          {/* <p><img src="./assets/images/streamline-icon-soft-drinks-glass-ice@48x48.PNG"></p> */}
          <p className="column-title">Back-End Tools</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <GrDocumentPerformance />
              </li>
              <li>NoSQL</li>
              <li>Progressive Web Applications (PWA)</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
              <li>State</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Resume;