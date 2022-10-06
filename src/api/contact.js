const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function contactFormHandler(request, response) {
  console.log(request.body);
  console.log(request.query);
  const { name, email, message, website } = request.body;
  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: 'New Form Submission',
    html: `
      <strong>Name: ${name} Email: ${email} Message: ${message}</strong>
      Sent from ${website}
    `,
  }
  response.status(200).json({});
  sgMail.send(msg).catch((error) => console.log(error.response?.body));
};
