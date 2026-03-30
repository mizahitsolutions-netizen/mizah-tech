const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const nodemailer = require("nodemailer");

// ✅ transporter
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendContactNotification = onDocumentCreated(
  {
    document: "contacts/{docId}",
    region: "asia-south1",
  },
  async (event) => {
    try {
      const data = event.data.data();

      const html = `
        <div style="font-family:Arial;padding:20px;">
          <h2>📩 New Inquiry - Mizah Technologies</h2>

          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Service:</strong> ${data.service}</p>

          <p><strong>Message:</strong></p>
          <p style="background:#f5f5f5;padding:10px;border-radius:6px;">
            ${data.message}
          </p>

          <br/>

          <p style="color:#888;font-size:12px;">
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `;

      // 📩 Email to YOU
      await transporter.sendMail({
        from: '"Mizah Technologies" <contact@mizahtechnologies.in>',
        to: process.env.EMAIL_USER,
        subject: "🔥 New Lead from Website",
        html,
      });

      // 🤖 Auto reply
      await transporter.sendMail({
        from: '"Mizah Technologies" <contact@mizahtechnologies.in>',
        to: data.email,
        subject: "We received your request 🚀",
        html: `
          <h3>Hi ${data.name},</h3>
          <p>Thanks for contacting Mizah Technologies.</p>
          <p>We’ll get back within 24 hours.</p>
        `,
      });

      console.log("✅ Email sent successfully");
    } catch (error) {
      console.error("❌ Email Error:", error);
    }
  },
);
