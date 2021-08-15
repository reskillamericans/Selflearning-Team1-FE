import Group79 from "./images/Group79.png";
import collaboration from "./images/collaboration.svg";
import UX from "./images/UX.svg";
import Testing from "./images/Testing.png";
import Data from "./images/Data.png";
import Databases from "./images/Databases.svg";
import arc from "./images/arc.png";
import Accessibility from "./images/Accessibility.png";
import Design from "./images/Design.svg";
import HTML from "./images/HTML.svg";
import Java from "./images/Java.svg";
import CSS from "./images/CSS.svg";
import API from "./images/API.svg";
import Security from "./images/Security.svg";
import Audits from "./images/Audits.svg";
import "./CourseDetail.css";
// import CourseDetail from "../../component/CourseDetail/CourseDetail";

function CourseDetail() {
  return (
    <>
      <div className="course-set">
        <div className="course-container1">
          <header>
            <div id="course-logo">
              <img src={Group79} alt="Group79" />
            </div>
            <div>
              <nav>
                <ul>
                  <li>
                    <a href="a">Home</a>
                  </li>
                  <li>
                    <a href="a">About Us</a>
                  </li>
                  <li>
                    <a href="a">Courses</a>
                  </li>
                  <li>
                    <a href="a">Help</a>
                  </li>
                  <li>
                    <a href="a">Login</a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <div className="course-container2">
            <h1>Courses We Offer</h1>
          </div>

          <section>
            <div className="course-container3">
              <div className="course-1">
                <h3>
                  UX/UI
                  <br></br>
                  DESIGN
                </h3>

                <div className="image-content1">
                  <div className="Collab">
                    <img src={collaboration} alt="collaboration" />
                    <a href="a">Collaboration</a>
                  </div>

                  <div className="UX">
                    <img src={UX} alt="UX" />
                    <a href="a">UX</a>
                  </div>

                  <div className="Testing">
                    <img src={Testing} alt="Testing" />
                    <a href="a">Testing</a>
                  </div>
                </div>

                <div>
                  <p>
                    As a designer you will learn about the approach to product
                    desing (UX) and the experience of a product (uI). In
                    learning UI, you will be taught how to do a customer
                    analysis, UI prototyping, user guides and storylines. In UX
                    you will go overcompetitor analysis, product structure,
                    content developer and more.
                  </p>
                </div>
                
                  <button className="btn">Get started</button>
                
              </div>

              <div className="course-2">
                <h3>
                  COMPUTER
                  <br></br>
                  SCIENCE
                </h3>

                <div className="image-content2">
                  <div className="Data">
                    <img src={Data} alt="Data" />
                    <a href="a">Data Structures</a>
                  </div>
                  <div className="Databases">
                    <img src={Databases} alt="Databases" />
                    <a href="a">Databases</a>
                  </div>
                </div>
                <div>
                  <p>
                    Lortristique ut purus. Rhoncus curabitur et massa lacus
                    aliquam. Pellentesque nunc amet, dolor augue.
                  </p>
                </div>
                <div className="btn">
                  <button>Get started</button>
                </div>
              </div>

              <div className="course-3">
                <h3>
                  DATABASE
                  <br></br>
                  MANAGEMENT
                </h3>

                <div className="image-content3">
                  <div className="arc">
                    <img src={arc} alt="arc" />
                    <a href="a">Architecture</a>
                  </div>
                  <div className="Access">
                    <img src={Accessibility} alt="Accessibility" />
                    <a href="a">Accessibility</a>
                  </div>
                  <div className="Design">
                    <img src={Design} alt="Design" />
                    <a href="a">Design</a>
                  </div>
                </div>
                <div>
                  <p>
                    Lortristique ut purus. Rhoncus curabitur et massa lacus
                    aliquam. Pellentesque nunc amet, dolor augue.
                  </p>
                </div>
                <div className="btn">
                  <button>Get started</button>
                </div>
              </div>

              <div className="course-4">
                <h3>FRONTEND DEVELOPMENT</h3>

                <div className="image-content4">
                  <div className="html">
                    <img src={HTML} alt="HTML" />
                    <a href="a">HTML</a>
                  </div>
                  <div className="java">
                    <img src={Java} alt="Java" />
                    <a href="a">Javascript</a>
                  </div>
                  <div className="css">
                    <img src={CSS} alt="CSS" />
                    <a href="a">CSS</a>
                  </div>
                </div>
                <div>
                  <p>
                    HTML, Javascript & CSS sit at the foundation of the
                    internet. Learn how they work together to creat websites and
                    the overall web experience as we know it, and learn to code
                    both for free with hands-on labs and tutorials.
                  </p>
                </div>
                <div className="btn">
                  <button>Get started</button>
                </div>
              </div>

              <div className="course-5">
                <h3>
                  INFORMATION
                  <br></br>
                  SYSTEMS
                </h3>
                <div className="image-content5">
                  <div className="api">
                    <img src={API} alt="API" />
                    <a href="a">API</a>
                  </div>
                  <div className="security">
                    <img src={Security} alt="Security" />
                    <a href="a">Security</a>
                  </div>
                  <div className="audits">
                    <img src={Audits} alt="Audits" />
                    <a href="a">Audits</a>
                  </div>
                </div>
                <div>
                  <p>
                    This course will go into depth on learning operation support
                    system which include transaction processing systems.You will
                    also learn management information systems, decition support
                    systems and execitive information systems.
                  </p>
                </div>
                <div className="btn">
                  <button>Get started</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default CourseDetail;
