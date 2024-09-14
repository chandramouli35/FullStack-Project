// import React from "react";
// import "./About.css"; // Ensure this CSS file includes all the styles given earlier

// const About = () => {
//   return (
//     <div className="about-container">
//       <h1>About Me</h1>
//       <div className="personal-info">
//         <h2>Chandra Mouli Tarigopula</h2>
//         <p>Anantapur, Andhra Pradesh, 515672</p>
//         <p>
//           Email:{" "}
//           <a href="mailto:tarigopula.chandra.mouli@gmail.com">
//             tarigopula.chandra.mouli@gmail.com
//           </a>
//         </p>
//         <p>Phone: 7997214502</p>
//         <p>
//           LinkedIn:{" "}
//           <a
//             href="https://www.linkedin.com/in/mouli-chandra"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             mouli-chandra
//           </a>
//         </p>
//         <p>
//           GitHub:{" "}
//           <a
//             href="https://github.com/chandramouli35"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             chandramouli35
//           </a>
//         </p>
//       </div>

//       <div className="education">
//         <h2>Education</h2>
//         <ul>
//           <li>
//             <h3>Dravidian University, Kuppam</h3>
//             <p>
//               MCA (Master of Computer Application) - Computer Applications (8.07
//               CGPA)
//             </p>
//             <p>2021 - 2023</p>
//           </li>
//           <li>
//             <h3>Sri Sai Baba National Degree College, Anantapur</h3>
//             <p>BSc (Bachelor of Science) - Computer Science (71.0%)</p>
//             <p>2018 - 2021</p>
//           </li>
//           <li>
//             <h3>Swamy Vivekananda Junior College, Anantapur</h3>
//             <p>Intermediate - MPC (82.3%)</p>
//             <p>2016 - 2018</p>
//           </li>
//           <li>
//             <h3>Sree Jyothi High School, Bathalapalli</h3>
//             <p>Secondary School Certificate (77.0%)</p>
//             <p>2015 - 2016</p>
//           </li>
//         </ul>
//       </div>

//       <div className="skills">
//         <h2>Skills</h2>
//         <ul>
//           <li>Frontend: HTML, CSS, Bootstrap, JavaScript, React.js</li>
//           <li>Backend: Python, Express, Node.js</li>
//           <li>Databases: SQLite</li>
//           <li>
//             Other skills: Data Structures & Algorithms, Flexbox, Git, MongoDB,
//             NumPy, OOPs, User Interface (UI) Design
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import "./About.css"; // Ensure this CSS file includes all the styles given earlier

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="personal-info">
        <h2>Chandra Mouli Tarigopula</h2>
        <p>Anantapur, Andhra Pradesh, 515672</p>
        <p>
          Email:{" "}
          <a href="mailto:tarigopula.chandra.mouli@gmail.com">
            tarigopula.chandra.mouli@gmail.com
          </a>
        </p>
        <p>Phone: 7997214502</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/mouli-chandra"
            target="_blank"
            rel="noopener noreferrer"
          >
            mouli-chandra
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/chandramouli35"
            target="_blank"
            rel="noopener noreferrer"
          >
            chandramouli35
          </a>
        </p>
      </div>

      <div className="education">
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Dravidian University, Kuppam</h3>
            <p>
              MCA (Master of Computer Application) - Computer Applications (8.07
              CGPA)
            </p>
            <p>2021 - 2023</p>
          </li>
          <li>
            <h3>Sri Sai Baba National Degree College, Anantapur</h3>
            <p>BSc (Bachelor of Science) - Computer Science (71.0%)</p>
            <p>2018 - 2021</p>
          </li>
          <li>
            <h3>Swamy Vivekananda Junior College, Anantapur</h3>
            <p>Intermediate - MPC (82.3%)</p>
            <p>2016 - 2018</p>
          </li>
          <li>
            <h3>Sree Jyothi High School, Bathalapalli</h3>
            <p>Secondary School Certificate (77.0%)</p>
            <p>2015 - 2016</p>
          </li>
        </ul>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Frontend:</strong> HTML, CSS, Bootstrap, JavaScript,
            React.js, Flexbox
          </li>
          <li>
            <strong>Backend:</strong> Python, Express, Node.js, Nest.js,
            Next.js, Prisma, TypeORM
          </li>
          <li>
            <strong>Databases:</strong> SQLite, MongoDB
          </li>
          <li>
            <strong>Other skills:</strong> Data Structures & Algorithms, Git,
            NumPy, Object-Oriented Programming (OOP), User Interface (UI) Design
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
