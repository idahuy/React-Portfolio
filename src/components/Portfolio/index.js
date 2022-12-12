import React from "react";
import bcbImage from "../../assets/portfolio/backcountry.png";
import fedditImage from "../../assets/portfolio/feddit.png";
import jate from "../../assets/portfolio/JATE.png";
import snapi from "../../assets/portfolio/SNAPI.png";
import teamProfileGenerator from "../../assets/portfolio/teamprofilegenerator.png";
import employeeTracker from "../../assets/portfolio/employeetracker.png";
import noteTaker from "../../assets/portfolio/notetaker.png";
import onlyCooks from "../../assets/portfolio/onlycooks.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="portfolios">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="portfolio">
          <div className="portfolio-info">
            <div className="portfolio-img">
              <a href="https://stormy-reef-30980.herokuapp.com/">
                {" "}
                <img
                  src={onlyCooks}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="feddit"
                />
              </a>
            </div>
            <div className="portfolio-text">
              <h4>OnlyCooks</h4>
              <p>
              OnlyCooks is a blogging site that helps to connect people who are interested in cooking, creating, and sharing recipes! Come dicuss anything with your fellow chefs about any types of cuisine, anytime, any place, for any reason!
              </p>
            </div>
          </div>
        </div>

        <div className="portfolio">
          <div className="portfolio-info">
            <div className="portfolio-img">
              <a href="https://github.com/idahuy/feddit">
                {" "}
                <img
                  src={fedditImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="feddit"
                />
              </a>
            </div>
            <div className="portfolio-text">
              <h4>Feddit</h4>
              <p>
              feddit is a blogging site that helps to connect people who are interested in anything and everything about food! Come dicuss anything with your fellow foodies about any types of cuisine, anytime, any place, for any reason!
              </p>
            </div>
          </div>
        </div>

        <div className="portfolio">
          <div className="portfolio-info">
            <div className="portfolio-img">
              <a href="https://github.com/idahuy/backcountry-buddy">
                {" "}
                <img
                  src={bcbImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="backcountry-buddy"
                />
              </a>
            </div>
            <div className="portfolio-text">
              <h4>Backcountry Buddy</h4>
              <p>
              The purpose of this project was to work collaborately with others applying our knowledge in using Git and our web development skills by using HTML, CSS, and JS to create a website. This web application allows user to search via origin point (City) and the application will return 10 results of campsites in a 200 mile vicinity of the origin point. And it will also display temperature of the input origin point and display campsites on the map when clicking on campsite results.
              </p>
            </div>
          </div>
        </div>

        <div className="portfolio">
          <div className="portfolio-info">
            <div className="portfolio-img">
              <a href="https://github.com/idahuy/Progress-Web-App">
                {" "}
                <img
                  src={jate}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="jate"
                />
              </a>
            </div>
            <div className="portfolio-text">
              <h4>PWA</h4>
              <p>
                The application is a web text editor where the user can create notes or code snippets with or without an internet connection and where the user can reliably retrieve them for later use. The integrated service worker and Cache API's ensure that the application will remain fully functional even without and active internet connection. This application allows the user to access visited pages even if the application is offline.
              </p>
            </div>
          </div>
        </div>

        <div className="portfolio">
          <div className="portfolio-info">
            <div className="portfolio-img">
              <a href="https://github.com/idahuy/social-network-api">
                {" "}
                <img
                  src={snapi}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Social Network API"
                />
              </a>
            </div>
            <div className="portfolio-text">
              <h4>Social Network API</h4>
              <p>
                This is a set of API for a social network that uses a MongoDB database so that the website can handle large amounts of unstructured data, Express.js for routing, Mongoose ODM, and the moment package to format time stamps.
              </p>
            </div>
          </div>
        </div>

        <div className="portfolio">
          <div className="portfolio-info">
            <div className="portfolio-img">
              <a href="https://github.com/idahuy/TeamProfileGenerator">
                {" "}
                <img
                  src={teamProfileGenerator}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Team Profile Generator"
                />
              </a>
            </div>
            <div className="portfolio-text">
              <h4>Team Profile Generator</h4>
              <p>
                The focus of this unit was Object Oriented Programming and unit testing. The objective for this project was to build a Node.js command-line application that takes in information about employees on a software engineering team, and with that information generates an HTML webpage that displays the user input data. One requirement of the application was to make use of Constructors and Classes to create the employee objects. Among these were the Employee, Manager, Engineer, and Intern classes. In addition to building the application, this project also required the use of Jest and Inquirer to conduct unit tests of every part of the code to ensure that it would pass each test. A demonstration of the node application and the testing is shown below.
              </p>
            </div>
          </div>
        </div>

        <div className="portfolio">
          <div className="portfolio-info">
            <div className="portfolio-img">
              <a href="https://github.com/idahuy/EmployeeTracker">
                {" "}
                <img
                  src={employeeTracker}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Employee tracker"
                />
              </a>
            </div>
            <div className="portfolio-text">
              <h4>Employee Tracker</h4>
              <p>
                A command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.
              </p>
            </div>
          </div>
        </div>

        <div className="portfolio">
          <div className="portfolio-info">
            <div className="portfolio-img">
              <a href="https://github.com/idahuy/Note-taker">
                {" "}
                <img
                  src={noteTaker}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note Taker"
                />
              </a>
            </div>
            <div className="portfolio-text">
              <h4>Note Taker</h4>
              <p>
                Note taking app that allows you to save and delete notes as needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;