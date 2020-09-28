import mailgunJS from "mailgun-js";
import Pipedrive from "pipedrive";

const apiKey = process.env.API_KEY;
const domain = "mg.plataforma5.la";
const pipeKey = process.env.PIPEDRIVE_API_KEY;

if (!apiKey) throw new Error("Missing Mailgun API KEY");
if (!pipeKey) throw new Error("Missing Pipedrive API KEY");

const mailgun = mailgunJS({ apiKey, domain });
const pipedrive = new Pipedrive.Client(pipeKey);

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
    else {
      addToPipedrive({ email, name, phone, country }).then(() => {
        res.send({ status: "success" });
      });
    }
  });
};

function addToPipedrive({ email, name, phone, country }) {
  return new Promise((resolve, reject) => {
    const search = {
      term: email,
      search_by_email: 1,
      limit: 1,
    }; // El objeto que le paso a la busqueda de la persona
    const newPerson = {
      name,
      email,
      phone,
      f4bb74d5aa8cea051d740c63b9eae2592f8447d6: "evento",
      "3b075c4bee6cc7b4fd0656169fbb5aa9f2096774": country,
      "35f807cd52c85d0803ff37a952268afce3de3303": "clase gratuita",
    }; // El objeto necesario para crear a la persona

    pipedrive.Persons.find(search, (err, res) => {
      if (err) {
        return reject(err.message);
      }

      if (res.length) {
        addDeal(name, resolve, reject, res[0].id);
      } else {
        pipedrive.Persons.add(newPerson, (error, person) => {
          if (error) {
            return reject(err.message);
          }
          addDeal(name, resolve, reject, person.id);
        });
      }
    });
  });
}

function addDeal(name, resolve, reject, person_id) {
  // Esta funcion solo crea un deal para una persona que ya fue encontrada
  pipedrive.Deals.add(
    {
      title: `${name} - Deal`,
      value: 0,
      person_id,
      stage_id: 192,
    },
    (error, deals) => {
      if (error) {
        return reject(error.message);
      }
      return resolve(deals);
    }
  );
}
