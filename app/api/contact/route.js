import { Resend } from "resend";

const TO_EMAIL = "britt@taicdigital.ca";
const FROM_EMAIL = "Taic Digital <onboarding@resend.dev>";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const firstName = (body.firstName || "").trim();
  const lastName = (body.lastName || "").trim();
  const email = (body.email || "").trim();
  const organization = (body.organization || "").trim();
  const services = Array.isArray(body.services) ? body.services : [];
  const message = (body.message || "").trim();

  if (!firstName || !lastName || !email || email.indexOf("@") < 1 || email.indexOf(".") < 0) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set.");
    return Response.json({ error: "Email is not configured." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const lines = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    organization ? `Organization: ${organization}` : null,
    services.length ? `Services: ${services.join(", ")}` : null,
    "",
    message || "(no message)",
  ].filter((l) => l !== null);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${firstName} ${lastName}`,
      text: lines.join("\n"),
    });
    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return Response.json({ error: "Failed to send." }, { status: 500 });
  }
}
