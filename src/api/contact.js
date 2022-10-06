const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function contactFormHandler(request, response) {
  console.log(request.body);
  console.log(request.query);
  const { body } = request;
  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: 'New Form Submission',
    html: `
      <strong>Name: ${body.name} Email: ${body.email} Message: ${body.message}</strong>
      Sent from ${body.website}
    `,
  }
  sgMail.send(msg);
  return response.status(200).json({});
};
