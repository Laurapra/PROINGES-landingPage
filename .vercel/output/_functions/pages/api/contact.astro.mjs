import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resend = new Resend("re_6oddVjct_CXA6rwp1SKBeQydqpNzhYQeA");
const SUBJECT_MAP = {
  "desarrollo": "Desarrollo de Software",
  "automatizacion": "Automatización de Procesos",
  "integracion": "Integración de Sistemas",
  "consultoria": "Innovación y Consultoría",
  "interventoria": "Interventoría en Infraestructura Eléctrica",
  "otro": "Otro"
};
const POST = async ({ request }) => {
  try {
    console.log("📧 Recibiendo solicitud de contacto...");
    const data = await request.json();
    console.log("📝 Datos recibidos:", { name: data.name, email: data.email });
    if (!data.name || !data.email || !data.message || !data.subject) {
      return new Response(
        JSON.stringify({ error: "Campos requeridos faltantes" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const subjectText = SUBJECT_MAP[data.subject] || data.subject;
    console.log("📨 Enviando notificación...");
    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["soporte@proinges.com.co"],
      // ← Solo tu email de registro
      replyTo: data.email,
      // ← Para que puedas responder directamente
      subject: `[CONTACTO WEB] ${subjectText} - ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #0099cc 0%, #236192 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">📧 Nuevo Mensaje de Contacto</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Sitio Web PROINGES</p>
            </div>
            
            <div style="background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 10px 10px;">
              <div style="margin-bottom: 20px; background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #0099cc;">
                <div style="font-weight: bold; color: #0099cc; margin-bottom: 5px; font-size: 12px;">👤 NOMBRE</div>
                <div style="color: #333; font-size: 16px;">${data.name}</div>
              </div>
              
              <div style="margin-bottom: 20px; background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #0099cc;">
                <div style="font-weight: bold; color: #0099cc; margin-bottom: 5px; font-size: 12px;">📧 EMAIL</div>
                <div style="color: #333; font-size: 16px;"><a href="mailto:${data.email}" style="color: #0099cc; text-decoration: none;">${data.email}</a></div>
              </div>
              
              <div style="margin-bottom: 20px; background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #0099cc;">
                <div style="font-weight: bold; color: #0099cc; margin-bottom: 5px; font-size: 12px;">📱 TELÉFONO</div>
                <div style="color: #333; font-size: 16px;">${data.phone || "No proporcionado"}</div>
              </div>
              
              <div style="margin-bottom: 20px; background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #0099cc;">
                <div style="font-weight: bold; color: #0099cc; margin-bottom: 5px; font-size: 12px;">🏷️ ASUNTO</div>
                <div style="color: #333; font-size: 16px;">${subjectText}</div>
              </div>
              
              <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #0099cc;">
                <div style="font-weight: bold; color: #0099cc; margin-bottom: 10px; font-size: 12px;">💬 MENSAJE</div>
                <div style="color: #333; font-size: 15px; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;">${data.message}</div>
              </div>

              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(subjectText)}" style="display: inline-block; background: #0099cc; color: white; padding: 14px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
                  Responder a ${data.name}
                </a>
              </div>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
              <p style="margin: 5px 0;">📅 ${(/* @__PURE__ */ new Date()).toLocaleString("es-CO", {
        timeZone: "America/Bogota",
        dateStyle: "full",
        timeStyle: "short"
      })}</p>
              <p style="margin: 5px 0;">🌐 <strong>proinges.com.co</strong></p>
            </div>
          </div>
        </body>
        </html>
      `
    });
    console.log("✅ Email enviado:", emailResponse.data?.id);
    if (emailResponse.error) {
      console.error("❌ Error:", emailResponse.error);
      throw new Error(JSON.stringify(emailResponse.error));
    }
    return new Response(
      JSON.stringify({
        success: true,
        messageId: emailResponse.data?.id
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("❌ Error completo:", error);
    return new Response(
      JSON.stringify({
        error: "Error al enviar el mensaje",
        details: error instanceof Error ? error.message : "Error desconocido"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
