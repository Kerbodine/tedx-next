const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: "contact.michaeltong@gmail.com",
    from: "contact@michaelytong.com",
    subject: body.subject,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  console.log("Sending mail...");

  await mail.send(data);

  console.log("Mail sent!");

  res.status(200).json({ status: "OK" });
};

export default sendMail;
