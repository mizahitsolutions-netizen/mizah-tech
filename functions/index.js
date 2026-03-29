const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
require("dotenv").config();

// 🔐 Zoho SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendEmail = functions.https.onCall(async (data) => {
  const {name, email, service, message} = data;

  try {
    // 📩 Email to YOU
    await transporter.sendMail({
      from: `Mizah Technologies <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "🔥 New Lead from Website",
      html: `
        <h2>New Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // 🤖 Auto reply
    await transporter.sendMail({
    from: "Mizah Technologies <contact@mizahtechnologies.in>",
      to: email,
      subject: "We received your request 🚀",
      html: `
        <h3>Hi ${name},</h3>
        <p>Thanks for contacting Mizah Technologies.</p>
        <p>We’ll get back within 24 hours.</p>
        <br/>
        <p>– Mizah Technologies</p>
      `,
    });

    return {success: true};

  } catch (error) {
    console.error(error);
    throw new functions.https.HttpsError(
      "internal",
      "Email failed to send"
    );
  }
});