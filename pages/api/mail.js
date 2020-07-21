import mailgunJS from "mailgun-js";
const apiKey = process.env.API_KEY;
const domain = "mg.plataforma5.la";

if (!apiKey) throw new Error("Missing Mailgun API KEY");

const mailgun = mailgunJS({ apiKey, domain });

import template from "./template.js";

export default (req, res) => {
  if (req.method !== "POST") {
    res.status(404).send();
  }

  const { email, name, phone, country } = req.body;
  const html = template
    .replace("{{name}}", name)
    .replace("{{email}}", email)
    .replace("{{phone}}", phone)
    .replace("{{country}}", country);

  const data = {
    from: "Plataforma 5 <admisiones@plataforma5.la>",
    to: "Plataforma 5 <admisiones@plataforma5.la>",
    subject: "Inscripcion clase abierto",
    html,
  };

  mailgun.messages().send(data, (error, body) => {
    if (error) res.send({ status: "error", msg: error });
    else res.send({ status: "success" });
  });
};
