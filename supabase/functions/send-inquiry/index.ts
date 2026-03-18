import { Resend } from "npm:resend@4.1.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const RECIPIENT_EMAIL = "tajsconsult@gmail.com";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { name, email, type, budget, details } = await req.json();

    if (!name || !email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Name and valid email are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Tajs Consult <onboarding@resend.dev>",
      to: RECIPIENT_EMAIL,
      subject: `New Inquiry: ${type || "General"} from ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${type || "Not specified"}</p>
        <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
        <p><strong>Details:</strong></p>
        <p>${details || "No details provided"}</p>
      `,
      reply_to: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ message: "Inquiry sent successfully", id: data?.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process inquiry" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
