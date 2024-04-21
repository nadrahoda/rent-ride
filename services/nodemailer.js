const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({

  
  service:'gmail',
  
  host:'smtp.gmail.com',
  
  port:587,
  
  secure:false,
  auth: {
    user: "nppdcare@gmail.com",
    pass: "ayiu ysuo ltdh tooa",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(mail,subject,text,html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"NPPD!" <nppdcare@gmail.com>', // sender address
    to: mail, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: html, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

export {main}