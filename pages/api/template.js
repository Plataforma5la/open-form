export default `<!DOCTYPE html>
<html lang="it">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <title>Contacto - Plataforma 5</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <style type="text/css">
      /* CLIENT-SPECIFIC STYLES */
      #outlook a {
        padding: 0;
      } /* Force Outlook to provide a "view in browser" message */
      .ReadMsgBody {
        width: 100%;
      }
      .ExternalClass {
        width: 100%;
      } /* Force Hotmail to display emails at full width */
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      } /* Force Hotmail to display normal line spacing */
      body,
      table,
      td,
      a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      } /* Prevent WebKit and Windows mobile changing default text sizes */
      table,
      td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      } /* Remove spacing between tables in Outlook 2007 and up */
      img {
        -ms-interpolation-mode: bicubic;
      } /* Allow smoother rendering of resized image in Internet Explorer */

      /* RESET STYLES */
      body {
        margin: 0;
        padding: 0;
      }
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
      }
      table {
        border-collapse: collapse !important;
      }
      body {
        height: 100% !important;
        margin: 0;
        padding: 0;
        width: 100% !important;
      }

      /* iOS BLUE LINKS */
      .appleBody a {
        color: #68440a;
        text-decoration: none;
      }
      .appleFooter a {
        color: #999999;
        text-decoration: none;
      }

      #links a {
        padding: 15px;
      }
      #links img {
        width: 30px;
      }

      #logo {
        width: 300px;
        margin: 0 auto;
        display: block;
      }
      /* MOBILE STYLES */
      @media screen and (max-width: 525px) {
        /* ALLOWS FOR FLUID TABLES */
        table[class="wrapper"] {
          width: 100% !important;
          min-width: 0px !important;
        }

        /* USE THESE CLASSES TO HIDE CONTENT ON MOBILE */
        td[class="mobile-hide"] {
          display: none;
        }

        img[class="mobile-hide"] {
          display: none !important;
        }

        img[class="img-max"] {
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
        }

        /* FULL-WIDTH TABLES */
        table[class="responsive-table"] {
          width: 100% !important;
        }

        /* UTILITY CLASSES FOR ADJUSTING PADDING ON MOBILE */
        td[class="padding"] {
          padding: 10px 5% 15px 5% !important;
        }

        td[class="padding-copy"] {
          padding: 10px 5% 10px 5% !important;
          text-align: center;
        }

        td[class="padding-meta"] {
          padding: 30px 5% 0px 5% !important;
          text-align: center;
        }

        td[class="no-pad"] {
          padding: 0 0 0px 0 !important;
        }

        td[class="no-padding"] {
          padding: 0 !important;
        }

        td[class="section-padding"] {
          padding: 10px 15px 10px 15px !important;
        }

        td[class="section-padding-bottom-image"] {
          padding: 10px 15px 0 15px !important;
        }

        /* ADJUST BUTTONS ON MOBILE */
        td[class="mobile-wrapper"] {
          padding: 10px 5% 15px 5% !important;
        }

        table[class="mobile-button-container"] {
          margin: 0 auto;
          width: 100% !important;
        }

        a[class="mobile-button"] {
          width: 80% !important;
          padding: 15px !important;
          border: 0 !important;
          font-size: 16px !important;
        }
      }
    </style>
  </head>
  <body style="margin: 0; padding: 0;" bgcolor="#ffffff" align="center">
    <!-- PREHEADER -->

    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      id="ko_imageBlock_3"
    >
      <tbody>
        <tr class="row-a">
          <td
            bgcolor="#383E49"
            align="center"
            class="no-pad"
            style="
              padding-top: 0px;
              padding-left: 15px;
              padding-bottom: 0px;
              padding-right: 15px;
            "
          >
            <h1>Alguien se anoto al curso abierto, woohoo!s</h1>
          </td>
        </tr>
      </tbody>
    </table>
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      id="ko_onecolumnBlock_5"
    >
      <tbody>
        <tr class="row-a">
          <td
            bgcolor="#ffffff"
            align="center"
            class="section-padding"
            style="
              padding-top: 30px;
              padding-left: 15px;
              padding-bottom: 30px;
              padding-right: 15px;
            "
          >
            Nombre:
          </td>
          <td
            bgcolor="#ffffff"
            align="center"
            class="section-padding"
            style="
              padding-top: 30px;
              padding-left: 15px;
              padding-bottom: 30px;
              padding-right: 15px;
            "
          >
            {{name}}
          </td>
        </tr>
        <tr class="row-a">
          <td
            bgcolor="#ffffff"
            align="center"
            class="section-padding"
            style="
              padding-top: 30px;
              padding-left: 15px;
              padding-bottom: 30px;
              padding-right: 15px;
            "
          >
            Email:
          </td>
          <td
            bgcolor="#ffffff"
            align="center"
            class="section-padding"
            style="
              padding-top: 30px;
              padding-left: 15px;
              padding-bottom: 30px;
              padding-right: 15px;
            "
          >
            {{email}}
          </td>
        </tr>
        <tr class="row-a">
          <td
            bgcolor="#ffffff"
            align="center"
            class="section-padding"
            style="
              padding-top: 30px;
              padding-left: 15px;
              padding-bottom: 30px;
              padding-right: 15px;
            "
          >
            Telefono:
          </td>
          <td
            bgcolor="#ffffff"
            align="center"
            class="section-padding"
            style="
              padding-top: 30px;
              padding-left: 15px;
              padding-bottom: 30px;
              padding-right: 15px;
            "
          >
            {{phone}}
          </td>
        </tr>
        <tr class="row-a">
          <td
            bgcolor="#ffffff"
            align="center"
            class="section-padding"
            style="
              padding-top: 30px;
              padding-left: 15px;
              padding-bottom: 30px;
              padding-right: 15px;
            "
          >
            Comentario:
          </td>
          <td
            bgcolor="#ffffff"
            align="center"
            class="section-padding"
            style="
              padding-top: 30px;
              padding-left: 15px;
              padding-bottom: 30px;
              padding-right: 15px;
            "
          >
            {{course}}
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`
