const nodemailer = require("nodemailer");
require("dotenv").config();
const Email = {
  // The Simple Mail Transfer Protocol is an Internet standard communication protocol for electronic mail transmission. Mail servers and other message transfer agents use SMTP to send and receive mail messages
  Message: function (req, res) {
    try {
      let body = JSON.parse(req.body.values);
      console.log("response:", JSON.parse(req.body.values));
      var Transport = new nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: false,
        auth: {
          user: "syeddkrock@gmail.com",
          pass: "rnumwheludraocgs",
        },
      });

      var mail_options = {
        from: "syeddkrock@gmail.com",
        to: "syedusamatanveer@gmail.com",
        subject: "Details of Client",
        text: `text`,
        html: `<p>name</p>`,    
      };

      new Promise((resolve, reject) => {
        Transport.sendMail(mail_options, function (error, response) {
          if (error) {
            reject(error);
          } else {
            resolve("email sent");
          }
        });
      });
      res.json({
        message: body,
      });
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  },
};
module.exports = Email;
