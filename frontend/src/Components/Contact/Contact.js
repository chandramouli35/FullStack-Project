// import React from "react";
// import "./Contact.css"; // Ensure to add the appropriate CSS

// const Contact = () => {
//   return (
//     <div className="contact-container">
//       <h1>Contact Me</h1>
//       <div className="contact-info">
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

//       <div className="contact-form">
//         <h2>Send Me a Message</h2>
//         <form>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Your Name"
//             required
//           />

//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Your Email"
//             required
//           />

//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             placeholder="Your Message"
//             required
//           ></textarea>

//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import "./Contact.css"; // Ensure to add the appropriate CSS

const Contact = () => {
  // Define state for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-info">
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

      <div className="contact-form">
        <h2>Send Me a Message</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
