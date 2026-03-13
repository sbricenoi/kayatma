import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, interes, mensaje } = body;

    if (!nombre || !email) {
      return NextResponse.json(
        { error: "Nombre y correo son requeridos" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El correo electrónico no es válido" },
        { status: 400 }
      );
    }

    const destinatario = process.env.CONTACT_EMAIL || "kayatma@gmail.com";

    await resend.emails.send({
      from: "Kay Atma Web <noreply@kayatma.cl>",
      to: [destinatario],
      replyTo: email,
      subject: `Nueva consulta de ${nombre} — Kay Atma`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body style="margin:0;padding:0;background-color:#F2F0EB;font-family:'Helvetica Neue',Arial,sans-serif;">
          <div style="max-width:560px;margin:40px auto;background:#1A1A1A;">
            
            <!-- Header -->
            <div style="padding:40px 40px 30px;border-bottom:1px solid rgba(242,240,235,0.1);">
              <p style="color:#B2B89A;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 8px;">
                Escuela de Yoga y Terapias Ancestrales
              </p>
              <h1 style="color:#F2F0EB;font-size:28px;font-weight:300;margin:0;letter-spacing:0.1em;text-transform:uppercase;">
                Kay Atma
              </h1>
            </div>

            <!-- Content -->
            <div style="padding:40px;">
              <p style="color:#B2B89A;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 20px;">
                Nueva consulta recibida
              </p>
              
              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid rgba(242,240,235,0.08);">
                    <span style="color:#B2B89A;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;display:block;margin-bottom:4px;">Nombre</span>
                    <span style="color:#F2F0EB;font-size:16px;font-weight:300;">${nombre}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid rgba(242,240,235,0.08);">
                    <span style="color:#B2B89A;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;display:block;margin-bottom:4px;">Correo</span>
                    <span style="color:#F2F0EB;font-size:16px;font-weight:300;">${email}</span>
                  </td>
                </tr>
                ${
                  telefono
                    ? `
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid rgba(242,240,235,0.08);">
                    <span style="color:#B2B89A;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;display:block;margin-bottom:4px;">Teléfono</span>
                    <span style="color:#F2F0EB;font-size:16px;font-weight:300;">${telefono}</span>
                  </td>
                </tr>`
                    : ""
                }
                ${
                  interes
                    ? `
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid rgba(242,240,235,0.08);">
                    <span style="color:#B2B89A;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;display:block;margin-bottom:4px;">Le interesa</span>
                    <span style="color:#F2F0EB;font-size:16px;font-weight:300;">${interes}</span>
                  </td>
                </tr>`
                    : ""
                }
                ${
                  mensaje
                    ? `
                <tr>
                  <td style="padding:12px 0;">
                    <span style="color:#B2B89A;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;display:block;margin-bottom:8px;">Mensaje</span>
                    <p style="color:#F2F0EB;font-size:15px;font-weight:300;line-height:1.7;margin:0;">${mensaje.replace(/\n/g, "<br/>")}</p>
                  </td>
                </tr>`
                    : ""
                }
              </table>
            </div>

            <!-- Footer -->
            <div style="padding:20px 40px 30px;border-top:1px solid rgba(242,240,235,0.08);">
              <p style="color:#F2F0EB;font-size:11px;opacity:0.3;margin:0;font-weight:300;">
                Este mensaje fue enviado desde el formulario de contacto de kayatma.cl
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    await resend.emails.send({
      from: "Kay Atma <noreply@kayatma.cl>",
      to: [email],
      subject: "Gracias por contactarnos — Kay Atma",
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8" />
        </head>
        <body style="margin:0;padding:0;background-color:#F2F0EB;font-family:'Helvetica Neue',Arial,sans-serif;">
          <div style="max-width:560px;margin:40px auto;background:#1A1A1A;">
            
            <div style="padding:40px 40px 30px;border-bottom:1px solid rgba(242,240,235,0.1);text-align:center;">
              <p style="color:#B2B89A;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 8px;">
                Escuela de Yoga y Terapias Ancestrales
              </p>
              <h1 style="color:#F2F0EB;font-size:32px;font-weight:300;margin:0;letter-spacing:0.15em;text-transform:uppercase;">
                Kay Atma
              </h1>
            </div>

            <div style="padding:40px;text-align:center;">
              <p style="color:#F2F0EB;font-size:22px;font-weight:300;font-style:italic;line-height:1.5;margin:0 0 20px;">
                "El yoga no es exigencia, es presencia."
              </p>
              <div style="width:40px;height:1px;background:#B2B89A;margin:0 auto 30px;opacity:0.6;"></div>
              <p style="color:#F2F0EB;font-size:15px;font-weight:300;opacity:0.7;line-height:1.7;margin:0 0 10px;">
                Hola ${nombre},
              </p>
              <p style="color:#F2F0EB;font-size:15px;font-weight:300;opacity:0.7;line-height:1.7;margin:0 0 20px;">
                Gracias por escribirnos. Hemos recibido tu mensaje y te responderemos a la brevedad.
              </p>
              <p style="color:#F2F0EB;font-size:15px;font-weight:300;opacity:0.7;line-height:1.7;margin:0;">
                Mientras tanto, te invitamos a seguirnos en Instagram: <a href="https://instagram.com/kay_atma" style="color:#B2B89A;text-decoration:none;">@kay_atma</a>
              </p>
            </div>

            <div style="padding:20px 40px 30px;border-top:1px solid rgba(242,240,235,0.08);text-align:center;">
              <p style="color:#F2F0EB;font-size:11px;opacity:0.3;margin:0;">
                Kay Atma · La Ligua, V Región, Chile
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intenta nuevamente." },
      { status: 500 }
    );
  }
}
