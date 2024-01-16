var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "namaiharmony4@gmail.com",
    pass: "cvec ebsh vfst lrcx",
  },
});

var mailOptions = {
  from: "namaiharmony4@gmail.com",
  to: "namaiharmony@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter
  .sendMail(mailOptions)
  .then((res) => console.log(res.response))
  .catch((err) => console.log(err));
