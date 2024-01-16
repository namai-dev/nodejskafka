const my_mailer = require("nodemailer");
const fs = require("fs");

const reg_template = fs.readFileSync("reg_temp.html", "utf-8");

const transpoter = my_mailer.createTransport({
  service: "gmail",
  auth: {
    user: "namaiharmony4@gmail.com",
    pass: "cvec ebsh vfst lrcx",
  },
  secure: true,
});

const send_email = (rec_email) => {
  console.log(rec_email);
  const details = {
    from: "namaiharmony4@gmail.com",
    to: [rec_email],
    subject: "Comrade Coin",
    html: reg_template,
  };

  transpoter
    .sendMail(details)
    .then((res) => console.log(res.response))
    .catch((err) => console.log(err));

  // transpoter.sendMail(details, (error, info) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("Message sent", info);
  //   }
  // });
};

module.exports = { send_email };
