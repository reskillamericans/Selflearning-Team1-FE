import logo from "../../images/Logo.png";
import message1 from "../../images/message1.png";
import message from "../../images/message.png";
import message3 from "../../images/message3.png";
import Mentor from "../../images/Mentor Picture.png";
import Student1 from "../../images/Student Picture.png";
import Student2 from "../../images/Student Picture2.png";
import Student3 from "../../images/Student Picture3.png";
import Student4 from "../../images/Student Picture4.png";
import Student5 from "../../images/Student Picture5.png";
import Student6 from "../../images/Student Picture6.png";
import Student7 from "../../images/Student Picture7.png";
import calendar from "../../images/calendar days.png";
import month from "../../images/month switcher.png";
import notes from "../../images/notes.png";
import { Link } from "react-router-dom";
import "../../component/MentorProfile/MentorProfile.css";

function MentorProfile() {
  return (
    <>
      <header>
        {/* Navbar */}
        <img class="logo" src={logo} alt="logo" />

        <nav>
          <ul class="menu">
            <li class="nav-item">
              <Link to="#" class="nav-link" id="a">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="#" class="nav-link" id="a">
                About Us
              </Link>
            </li>
            <li class="nav-item">
              <Link to="#" class="nav-link" id="a">
                Courses
              </Link>
            </li>
            <li class="nav-item">
              <Link to="#" class="nav-link" id="a">
                Help
              </Link>
            </li>
            <li class="nav-item">
              <Link to="#" class="nav-link" id="a">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Top Bar */}

        <h2 class="top-bar">Mentor Profile</h2>

        {/* Side Bar */}
        <section class="side-bar">
          <img class="mentor" src={Mentor} alt="fallback"/>
          <h3 class="mentor-name">Mentor Name</h3>

          <div class="edit">
            <i class="fas fa-pen"></i>
            <span class="text">Edit Profile</span>
          </div>

          <div class="bio">
            <h4>Bio</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              pretium at consectetur ut. Lorem sociis facilisis eu, tempor donec
              faucibus fringilla eget. Condimentum enim sit velit rhoncus nibh
              massa. Blandit lacus, mauris convallis diam ut.
            </p>
          </div>

          <div class="courses">
            <div class="courses-header">
              <h4>
                Courses <span class="courses-sub">(Profile Incomplete)</span>
              </h4>
            </div>

            <ul class="curriculum">
              <li>Intro to Photoshop</li>
              <li>Illustartor Techniques</li>
              <li>InDesign Fundamentals</li>
              <li>Premiere Basics</li>
              <li>Xd in Link nutshell</li>
            </ul>
          </div>

          <div class="availability">
            <h4>Availability</h4>
            <ul class="days1">
              <li>Mon: 7:00pm - 12:00 PST</li>
              <li>Tue:</li>
              <li>Wed:</li>
              <li>Thu: 7:0090 - 12:00 PST</li>
              <li>Fri:</li>
            </ul>
          </div>

          <div class="contact">
            <div class="mentor-icons">
              <Link to="#" target="_blank">
                <i class="far fa-clock"></i>
              </Link>
              <Link to="#" target="_blank">
                <i class="far fa-envelope"></i>
              </Link>
              <Link to="#" target="_blank">
                <img class="message1" src={message1} alt="fallback"/>
              </Link>
            </div>
          </div>
        </section>

        {/* Mentor Dashboard */}
        <div class="container">
          <div class="mentor-dashboard">
            <button class="primary-btn">Dashboard</button>

            <div class="mentor-section">
              <div class="schedule">
                <div class="schedule-icons">
                  <div class="calendar-icon">
                    <i class="fas fa-calendar-alt"></i>
                    <p>
                      <span class="schedule-text">Schedule</span>
                    </p>
                  </div>

                  <div class="edit-icon">
                    <i class="fas fa-pen"></i>
                    <p>
                      <span class="edit-text">Edit</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="calendar">
                <div class="month">
                  <img src={month} alt="fallback"/>
                </div>

                <div class="days">
                  <img src={calendar} alt="fallback"/>
                </div>
              </div>

              <div class="student-title">
                <img src={message} alt="fallback"/>
                <span class="student-messages">Messages</span>
              </div>

              {/* Student Dashboard */}
              <div class="dashboard-student">
                <img src={Student1} alt="fallback"/>

                <div class="student-info1">
                  <h4>Student Name </h4>
                  <p class="info1">
                    Date: 6/17/21 <span>(1 day ago)</span>
                  </p>

                  <div class="reply">
                    <i class="fas fa-reply"></i>
                    <i class="far fa-clock"></i>
                    <i class="fas fa-trash"></i>
                  </div>
                </div>
              </div>

              <p class="reply-message">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pharetra dictum odio sed proin sapien mi vol
              </p>
            </div>
          </div>

          {/* Student who need help */}

          {/* Card1 */}

          <div class="need">
            <button class="primary-btn2">Students who need help</button>

            <div class="middle">
              <div class="card1">
                <img src={Student2} alt="fallback"/>

                <div class="card1-info">
                  <h4>Student Name</h4>
                  <p>
                    Date of request: 6/16/21 <span>(2 day ago)</span>
                  </p>
                </div>

                <div class="card1-title">
                  <h5>
                    Needs Help With: <span>Photoshop</span>
                  </h5>
                </div>

                <div class="card1-message">
                  <div class="card1-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pharetra dictum odio sed proin sapien mi volutpat et
                      magna. Sed nibh non tempor augue gravida. Ut sit risus
                      arcu tellus. Aliquam sit nunc, sapien iaculis consectetur
                      quam augue amet.
                    </p>
                  </div>

                  <div class="card1-reply">
                    <i class="fas fa-reply"></i>
                    <i class="far fa-clock"></i>
                    <i class="fas fa-trash"></i>
                  </div>
                </div>
              </div>

              {/* Card2 */}

              <div class="card2">
                <img src={Student1} alt="fallback"/>

                <div class="card2-info">
                  <h4>Student Name</h4>
                  <p>
                    Date: 6/17/21 <span>(1 day ago)</span>
                  </p>
                </div>

                <div class="card2-title">
                  <h5>
                    Needs Help With: <span>Illustartor</span>
                  </h5>
                </div>

                <div class="card2-message">
                  <div class="card2-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pharetra dictum odio sed proin sapien mi volutpat et
                      magna. Sed nibh non tempor augue gravida. Ut sit risus
                      arcu tellus. Aliquam sit nunc, sapien iaculis consectetur
                      quam augue amet.
                    </p>
                  </div>
                </div>

                <div class="card2-reply">
                  <i class="fas fa-reply"></i>
                  <i class="far fa-clock"></i>
                  <i class="fas fa-trash"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Students you have helped */}

          {/* Card3 */}
          <div class="have">
            <button class="primary-btn3">
              <span></span>Students you have helped
            </button>

            <div class="last-section">
              <div class="card3">
                <img class="student3" src={Student3} alt="fallback"/>

                <div class="card3-info">
                  <h4>Student Name</h4>
                  <p class="course">
                    Course Taken: <span>Introduction to Photoshop layers</span>
                  </p>
                  <p class="date">
                    Course Date: <span>5/13/21</span>
                  </p>
                </div>

                <div class="card3-icons">
                  <img class="notes" src={notes} alt="fallback"/> Course Notes
                  <i class="far fa-envelope"></i>
                  <span> Email</span>
                  <img class="message" src={message3} alt="fallback"/>{" "}
                  <span class="card3-text">Message</span>
                </div>
              </div>

              {/* Card4 */}
              <div class="card4">
                <img class="student4" src={Student4} alt="fallback"/>

                <div class="card4-info">
                  <h4>Student Name</h4>
                  <p class="course">
                    Course Taken: <span>Illustrator Techniques</span>
                  </p>
                  <p class="date">
                    Course Date: <span>5/10/21</span>
                  </p>
                </div>

                <div class="card4-icons">
                  <img class="notes" src={notes} alt="fallback"/> Course Notes
                  <i class="far fa-envelope"></i>
                  <span> Email</span>
                  <img class="message" src={message3} alt="fallback"/>{" "}
                  <span class="card4-text">Message</span>
                </div>
              </div>

              {/* Card5 */}
              <div class="card5">
                <img class="student5" src={Student5} alt="fallback"/>

                <div class="card5-info">
                  <h4>Student Name</h4>
                  <p class="course">
                    Course Taken: <span>Indesign Fundamentals</span>
                  </p>
                  <p class="date">
                    Course Date: <span>5/9/21</span>
                  </p>
                </div>

                <div class="card5-icons">
                  <img class="notes" src={notes} alt="fallback"/> Course Notes
                  <i class="far fa-envelope"></i>
                  <span> Email</span>
                  <img class="message" src={message3} alt="fallback"/>{" "}
                  <span class="card5-text">Message</span>
                </div>
              </div>

              {/* Card6 */}
              <div class="card6">
                <img class="student6" src={Student6} alt="fallback"/>

                <div class="card6-info">
                  <h4>Student Name</h4>
                  <p class="course">
                    Course Taken: <span>Premiere Basics</span>
                  </p>
                  <p class="date">
                    Course Date: <span>5/7/21</span>
                  </p>
                </div>

                <div class="card6-icons">
                  <img class="notes" src={notes} alt="fallback"/> Course Notes
                  <i class="far fa-envelope"></i>
                  <span> Email</span>
                  <img class="message" src={message3} alt="fallback"/>{" "}
                  <span class="card6-text">Message</span>
                </div>
              </div>

              {/* Card7 */}
              <div class="card7">
                <img class="student7" src={Student7} alt="fallback" />

                <div class="card7-info">
                  <h4>Student Name</h4>
                  <p class="course">
                    Course Taken: <span>Xd in Link nutshell</span>
                  </p>
                  <p class="date">
                    Course Date: <span>5/3/21</span>
                  </p>
                </div>

                <div class="card7-icons">
                  <img class="notes" src={notes} alt="notes"/> Course Notes
                  <i class="far fa-envelope"></i>
                  <span> Email</span>
                  <img class="message" src={message3} alt="message"/>{" "}
                  <span class="card7-text">Message</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MentorProfile;
