import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Inicializar Resend con API Key
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validación básica
    if (!data.name || !data.email || !data.message) {
      return new Response(
        JSON.stringify({ error: 'Campos requeridos faltantes' }),
        { status: 400 }
      );
    }

    // Enviar email con Resend
    const emailResponse = await resend.emails.send({
      from: 'PROINGES <noreply@proinges.com.co>', // Debe ser el dominio verificado, en la página de Resend
      to: ['laurapra17@gmail.com'], // email de soporte
      subject: `Nuevo contacto: ${data.subject}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.phone || 'No proporcionado'}</p>
        <p><strong>Asunto:</strong> ${data.subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${data.message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        messageId: emailResponse.data?.id 
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Error al enviar email:', error);
    return new Response(
      JSON.stringify({ error: 'Error al enviar el mensaje' }),
      { status: 500 }
    );
  }
};