const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const API_KEY = process.env.SENDGRID_API_KEY;
const DOMAIN = "ngudbhav.com";

export async function POST(req, res) {
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

export default {
  async fetch(request, env) {
    const body = await request.clone().json();
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
      return new Response(new Blob(), { status: 200 });
    } catch (error) {
      console.error(error);
      return new Response(new Blob(), { status: 500 });
    }
  }
};
