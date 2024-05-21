import nodemailer from "nodemailer";
var email = "prateekshukla978@gmail.com";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "prateekshukla978@gmail.com",
    pass: "dlwe uwtq rcsa bnob",
  },
});
console.log("====================================");
console.log(process.env.EMAIL_APP_KEY);
console.log("====================================");
// async..await is not allowed in global scope, must use a wrapper
async function main(toEmail, name, subject, body) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `${name} ${toEmail}`, // sender address
    to: email,
    subject: subject,
    text: body,
    html: body,
  });

  return info.messageId;
}

// main().catch(console.error);
export default main;
