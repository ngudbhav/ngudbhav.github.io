const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const { body } = req;
  console.log(body);
  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: 'New Form Submission',
    html: `
      <strong>Name: ${body.name} Email: ${body.email} Message: ${body.message}</strong>
      Sent from ${body.website}
    `,
  }
  const response = await sgMail.send(msg);
  console.log(response);
  return res.status(200).json({});
}
