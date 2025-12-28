import fetch from "node-fetch";

const API_KEY = process.env.SENDGRID_API_KEY;
const DOMAIN = "ngudbhav.com";
console.log(API_KEY);

export default async function handler(req, res) {
  const { body } = req;
  console.log(body);
  const form = new FormData();
  form.append("from", process.env.FROM_EMAIL);
  form.append("to", process.env.TO_EMAIL);
  form.append("subject", "New Form Submission");
  form.append(
    "html",
    `
      <strong>Name: ${body.name} Email: ${body.email} Message: ${body.message}</strong>
      Sent from ${body.website}
    `
  );
  try {
    const response = await fetch(
      `https://api.mailgun.net/v3/${DOMAIN}/messages`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Basic " + Buffer.from(`api:${API_KEY}`).toString("base64"),
        },
        body: form,
      }
    );
    const data = await response.json();
    console.log(data);
    return res.status(200).json({});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
