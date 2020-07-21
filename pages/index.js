import Head from "next/head";
import * as React from "react";

import { useInput } from "../utils/useInput";
import fetcher from "../utils/send-mail";
import validators from "../utils/validators";

export default function Home() {
  const [success, setSuccess] = React.useState(false);
  const [nameError, name, resetName] = useInput();
  const [countryError, country, resetCountry] = useInput(validators.country);
  const [phoneError, phone, resetPhone] = useInput(validators.phone);
  const [emailError, email, resetEmail] = useInput(validators.email);

  const send = (e) => {
    e.preventDefault();
    fetcher("/api/mail", {
      name: name.value,
      phone: phone.value,
      email: email.value,
      country: country.value,
    }).then(() => {
      resetEmail();
      resetName();
      resetPhone();
      resetCountry();
      setSuccess(true);
    });
  };

  const disabled =
    emailError ||
    phoneError ||
    countryError ||
    !email.value ||
    !phone.value ||
    !country.value;

  return (
    <div className="container">
      <Head>
        <title>Plataforma 5 - Coding Bootcamp</title>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <header>
        <a href="https://plataforma5.la">
          <img src="/logo.png" alt="Plataforma 5 - logo" />
        </a>
      </header>
      <main>
        <h1 className="title">
          ¡Aprovechá la cuarentena y aprendé a diseñar un sitio web!
        </h1>

        <p className="description">
          Dejanos tus datos y te confirmamos tu lugar por mail. La clase será
          dada en la plataforma <strong>MEET</strong>.
        </p>

        <form onSubmit={send}>
          <div className="input-container">
            <div className="input-block">
              <input placeholder="NOMBRE Y APELLIDO" {...name} />
            </div>
          </div>

          <div className="input-container">
            <div className="input-block">
              {emailError && <p className="error">Ingresá un email válido</p>}
              <input placeholder="EMAIL" {...email} />
            </div>
          </div>

          <div className="input-container">
            <div className="input-block">
              {phoneError && (
                <p className="error">Ingresá un teléfono válido</p>
              )}
              <input placeholder="TELÉFONO (cod. área) 1111-1111" {...phone} />
            </div>
          </div>

          <div className="input-container">
            <div className="input-block">
              {countryError && (
                <p className="error">Este campo no puede estar vacío</p>
              )}
              <input placeholder="¿De que país nos escribes?" {...country} />
            </div>
          </div>

          {success ? (
            <p className="success">
              ¡Muchas gracias por anotarte! Cualquier duda, escribinos a
              admisiones@plataforma5.la
            </p>
          ) : (
            <button
              disabled={disabled}
              className={disabled ? "disabled" : "active"}
            >
              ENVIAR
            </button>
          )}
        </form>
      </main>
    </div>
  );
}
