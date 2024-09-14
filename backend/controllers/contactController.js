const nodemailer = require("nodemailer");
const ContactMessage = require("../models/ContactMessage"); // Import the ContactMessage model

exports.sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Save the message in the database
    const newMessage = new ContactMessage({
      name,
      email,
      message,
    });

    await newMessage.save();

    // Configure Nodemailer transporter (Mailtrap)
    let transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    // Define email options
    let mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Message from ${name}`,
      text: message,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send message" });
  }
};
