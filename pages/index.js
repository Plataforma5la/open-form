import * as React from "react";
import Head from "next/head";

export function useInput(validate) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [dirty, setDirty] = React.useState(false);

  const onChange = (e) => setValue(e.target.value);

  const onBlur = () => (setDirty(true), setFocus(false));

  const onFocus = () => setFocus(true);

  React.useEffect(() => {
    const shouldValidate = dirty && !focus && validate;
    if (shouldValidate && !validate(value)) {
      setError(true);
    } else {
      setError(false);
    }
  }, [value, focus]);

  return { value, onChange, onBlur, onFocus, error };
}

export default function Home() {
  const name = useInput();
  const phone = useInput((target) => {
    let num = target.replace(/[^\d]/g, "");
    return !(num.length < 8 || Number.isNaN(Number(num)));
  });
  const email = useInput((target) => {
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(target);
  });

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

      <main>
        <h1 className="title">Aprovechá la cuarentena y aprende a programar</h1>

        <p className="description">
          Dejanos tus datos y te confirmamos tu lugar por mail. La clase será
          dada en la plataforma <strong>ZOOM</strong>.
        </p>

        <form>
          <div className="inputContainer">
            <div className="inputBlock">
              <input placeholder="NOMBRE" {...name} />
            </div>
          </div>
          <div className="inputContainer">
            <div className="inputBlock">
              {email.error && <p className="error">Ingresá un email válido</p>}
              <input placeholder="EMAIL" {...email} />
            </div>
            <div className="inputBlock">
              {phone.error && (
                <p className="error">Ingresá un teléfono válido</p>
              )}
              <input placeholder="TELÉFONO (cod. área) 1111-1111" {...phone} />
            </div>
          </div>
          <div>
            <textarea placeholder="¿En qué clase querés participar? HTML (no necesitás conocimientos previos) o CSS (necesitas saber HTML)." />
          </div>
          <button>ENVIAR</button>
        </form>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 1rem 3rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          width: 50%;
          line-height: 1.5;
          font-size: 1.2rem;
        }

        form {
          width: 100%;
          padding: 0 5rem;
        }

        .inputContainer {
          display: flex;
        }

        .inputBlock {
          position: relative;
          width: 100%;
          margin: 5px;
          border-bottom: solid 1px #62d0ff;
        }

        .inputBlock input {
          border: none;
          padding-left: 3px;
          height: 35px;
          font-size: 0.8rem;
          width: 100%;
        }

        input::-webkit-input-placeholder {
          text-transform: uppercase;
        }

        textarea {
          width: 100%;
          height: 109px;
          border: 1px solid #62d0ff;
          box-sizing: border-box;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 36px;
          margin: 5px;
          font-size: 0.8rem;
        }

        textarea::placeholder {
          font-size: 0.8rem;
          line-height: 16px;
          letter-spacing: 0.04em;
          color: #000829;
          opacity: 0.6;
        }

        .error {
          margin: 0;
          color: #ff062f;
          position: absolute;
          z-index: 10;
          font-size: 0.8rem;
          bottom: 9px;
          right: 3px;
        }

        button {
          float: right;
          margin: 0 auto;
          width: 240px;
          height: 48px;
          background: #ff062e;
          color: #fff;
          font-weight: 600;
          font-size: 13px;
          line-height: 16px;
          text-align: center;
          letter-spacing: 0.04em;
          outline: none;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          margin-top: 35px;
        }

        @media (max-width: 600px) {
          main {
            padding: 1rem;
          }
          .description {
            width: 100%;
          }
          form {
            width: 100%;
            padding: 0;
          }
          .inputContainer {
            flex-direction: column;
          }

          button {
            float: none;
            width: 100%;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Montserrat", sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
