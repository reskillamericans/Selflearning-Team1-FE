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

function App() {
  return (
    <>
      <div className="set">
        <div className="container1">
          <header>
            <div id="logo">
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

          <div className="container2">
            <h1>Courses We Offer</h1>
          </div>

          <section>
            <div className="container3">
              <div className="box-1">
                <h3>
                  UX/UI
                  <br></br>
                  DESIGN
                </h3>

                <div className="image-content1">
                  <div className="Collab">
                    <img src={collaboration} alt="collaboration" />
                    <h6>Collaboration</h6>
                  </div>

                  <div className="UX">
                    <img src={UX} alt="UX" />
                    <h6>UX</h6>
                  </div>

                  <div>
                    <img src={Testing} alt="Testing" />
                    <h6>Testing</h6>
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

              <div className="box-2">
                <h3>
                  COMPUTER
                  <br></br>
                  SCIENCE
                </h3>

                <div className="image-content2">
                  <div className="Data">
                    <img src={Data} alt="Data" />
                    <h6>Data Strutures</h6>
                  </div>
                  <div className="Databases">
                    <img src={Databases} alt="Databases" />
                    <h6>Databases</h6>
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

              <div className="box-3">
                <h3>
                  DATABASE
                  <br></br>
                  MANAGEMENT
                </h3>

                <div className="image-content3">
                  <div className="arc">
                    <img src={arc} alt="arc" />
                    <h6>Architecture</h6>
                  </div>
                  <div className="Access">
                    <img src={Accessibility} alt="Accessibility" />
                    <h6>Accessibility</h6>
                  </div>
                  <div>
                    <img src={Design} alt="Design" />
                    <h6>Design</h6>
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

              <div className="box-4">
                <h3>FRONTEND DEVELOPMENT</h3>

                <div className="image-content4">
                  <div className="html">
                    <img src={HTML} alt="HTML" />
                    <h6>HTML</h6>
                  </div>
                  <div className="java">
                    <img src={Java} alt="Java" />
                    <h6>Javascript</h6>
                  </div>
                  <div className="css">
                    <img src={CSS} alt="CSS" />
                    <h6>CSS</h6>
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

              <div className="box-5">
                <h3>
                  INFORMATION
                  <br></br>
                  SYSTEMS
                </h3>
                <div className="image-content5">
                  <div className="api">
                    <img src={API} alt="API" />
                    <h6>API</h6>
                  </div>
                  <div className="security">
                    <img src={Security} alt="Security" />
                    <h6>Security</h6>
                  </div>
                  <div className="audits">
                    <img src={Audits} alt="Audits" />
                    <h6>Audits</h6>
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

export default App;
