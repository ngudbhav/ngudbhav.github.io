const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


export async function onRequestPost({ request }) {
  const body = await request.formData();

  const { name, email, message, website } = Object.fromEntries(body);
  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: 'New Form Submission',
    html: `
      <strong>Name: ${name} Email: ${email} Message: ${message}</strong>
      Sent from ${website}
    `,
  }
  sgMail.send(msg);
  const response = JSON.stringify({});
  return new Response(response);
}
