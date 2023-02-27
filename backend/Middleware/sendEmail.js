const nodemailer=require('nodemailer');
exports.sendEmail=async(options)=>{
const transporter=nodemailer.createTransport({
    
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "f7fad6174a6786",
          pass: "f7f968eb7be5cf" 
        }
      });


const mailOPtions={
    from:process.env.SMPT_MAIL,
    to:options.email,
    subject:options.subject,
    text:options.message,
}
await transporter.sendMail(mailOPtions)
}