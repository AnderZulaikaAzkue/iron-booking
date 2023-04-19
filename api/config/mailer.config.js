const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "Ironhackanderproject@gmail.com",
    pass: process.env.MAIL_PASS,
  },
});

module.exports.sendConfirmationEmail = (client) => {
  transporter
    .sendMail({
      from: "Iron Booking Ander project <Ironhackanderproject@gmail.com>",
      to: client.email,
      subject: "Please, confirm your account",
      html: `
        <h1>Welcome to Iron-booking</h1>
        <p>Click on the following link to confirm your account before you book your room:</p>
        <a href="${process.env.API_URL}/clients/${client.id}/confirm">Confirm</a>
      `,
    })
    .then((info) => console.log(info))
    .catch((error) => console.log(error));
};