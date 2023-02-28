const nodemailer = require("nodemailer");
require("dotenv").config();
const Email = {
  // The Simple Mail Transfer Protocol is an Internet standard communication protocol for electronic mail transmission. Mail servers and other message transfer agents use SMTP to send and receive mail messages
  Message: function (req, res) {    
    try {      
      let body = JSON.parse(req.body.values);
      console.log("response:", JSON.parse(req.body.values));
  //     var Transport = new nodemailer.createTransport({
  //       service: "gmail",
  //       host: "smtp.gmail.com",
  //       port: 465,
  //       secure: false,
  //       auth: {
  //         user: "syeddkrock@gmail.com",
  //         pass: "rnumwheludraocgs",
  //       },
  //     });

  //     var mail_options = {
  //       from: "syeddkrock@gmail.com",
  //       to: "syedusamatanveer@gmail.com",
  //       subject: "Details of Client",
  //       text: `${body.details}`,
  //       html: `<p>name:${body.name} details:${body.details} email:${body.email}</p>`,
  //       attachments: [
  //         {
  //           filename: req.file.filename,
  //           path: req.file.path,
  //         },
  //       ],
  //     };
  //     new Promise((resolve, reject) => {
  //       Transport.sendMail(mail_options, function (error, response) {
  //             if (error) {
  //                 reject(error)
  //             } else {
  //                 resolve("email sent")
  //             }
  //         });
  // })
  
}catch (err) {
      res.json({
        message: err.message,
      });
    }
  },
};
module.exports = Email;
