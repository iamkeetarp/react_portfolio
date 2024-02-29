// import { nodemailer } from "nodemailer";
const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3003;

app.use(bodyParser.json());
app.use(cors());

//email section

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

async function main(fromEmail, name, subject, body) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `${name} ${fromEmail}`, // sender address
    to: email,
    subject: subject,
    text: body,
    html: body,
  });
  console.log("====================================");
  console.log(`${name} ${fromEmail}`);
  console.log("====================================");
  return info.messageId;
}

app.post("/api/saveFormData", async (req, res) => {
  try {
    const formData = req.body;
    // const savedFormData = await FormModel.create(formData);
    console.log(formData);
    const result = main(
      formData.email,
      formData.name,
      formData.subject,
      formData.emailbody
    ).catch(console.error);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
