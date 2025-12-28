const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(FormData);
const mg = mailgun.client({username: 'api', key: process.env.SENDGRID_API_KEY});

export default async function handler(req, res) {
  const { body } = req;
  console.log(body);
  const msg = {
    from: process.env.FROM_EMAIL,
    to: [process.env.TO_EMAIL],
    subject: 'New Form Submission',
    html: `
      <strong>Name: ${body.name} Email: ${body.email} Message: ${body.message}</strong>
      Sent from ${body.website}
    `,
  };
  const response = await mg.messages.create("ngudbhav.com", msg);
  console.log(response);
  return res.status(200).json({});
}
