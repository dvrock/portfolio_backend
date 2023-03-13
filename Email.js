const nodemailer = require("nodemailer");
require("dotenv").config();
const Email = {
  // The Simple Mail Transfer Protocol is an Internet standard communication protocol for electronic mail transmission. Mail servers and other message transfer agents use SMTP to send and receive mail messages
  Message: function (req, res) {
    try {
      
      console.log(req.file)
      var Transport = new nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: false,
        auth: {
          user: "syedusamatanveer@gmail.com",
          pass: "rlflmngjkvqlclfo",
        },
        
      });

      var mail_options = {
        from: "syeddkrock@gmail.com",
        to: "syedusamatanveer@gmail.com",
        subject: "Details of Client",
        text: `name`,
        html: `<p>body</p>`,  
        attachments: [{   // utf-8 string as an attachment
          filename: req.file.filename,
          contents: 'hello world!'
      },
      {   // utf-8 string as an attachment
          filename:  req.file.filename,
          filePath:  req.file.path
      },]
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
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  },
};
module.exports = Email;
