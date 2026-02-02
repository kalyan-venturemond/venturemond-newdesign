"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, 
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function POST(request) {
    const body = await request.json();
    console.log("Received:", body);

    const userMail = {
        from: `Venturemond <${process.env.SMTP_USER}>`,
        to: body.email,
        subject: "Thanks for Reaching Out to Venturemond",
         html:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Payment Due Notification</title>
</head>

<body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#ffffff;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="padding: 20px;">

          <!-- Logo -->
          <tr>
            <td align="left" style="padding: 10px 0;">
              <img src="https://media.licdn.com/dms/image/v2/D560BAQH1Ji-htuNRfQ/company-logo_200_200/B56ZnPuLUwHcAI-/0/1760126613501/venturemond_logo?e=1764806400&v=beta&t=Z3nCyLq4E6uJlOv6619g5GpdvTOUiIOAtrUxKWu4Qvc" alt="Webhizzy" style="height: 40px;">
            </td>
          </tr>

          <!-- Content Box -->
          <tr>
            <td style="font-size: 16px; line-height: 24px; color:#333;">
              <p>Hello ${body.name},</p>

              <p>We hope you're doing well.</p>

              <p>
               Thanks for getting in touch — we’ve received your message.
Someone from our team will get back to you within the next 24 hours.

              </p>

              <p>
               If your request is urgent, feel free to reply directly to this email.

            </td>
          </tr>


          <!-- Signature -->
          <tr>
            <td style="font-size: 16px; line-height: 24px; color:#333; padding-top:10px;">
              <p>Sincerely,<br/>
                Team Venturemond <br />
Next-Gen Venture Studio & SaaS Company

              </p>
            </td>
          </tr>

          <!-- Footer -->
         

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
    };

    const teamMail = {
        from: `Venturemond Website <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,  
        subject: `New Inquiry from ${body.name}`,
        text: `
A new inquiry was submitted from the website:

Name: ${body.name}
Email: ${body.email}
Company: ${body.company}
teamSize: ${body.teamSize}
interest: ${body.interest}

Submitted at: ${new Date().toLocaleString()}
        `,
    };

    try {
        await Promise.all([
            transporter.sendMail(userMail),
            transporter.sendMail(teamMail)
        ]);

        return Response.json({ message: "Emails sent successfully!" });
    } catch (error) {
        console.error("MAIL ERROR:", error);
        return Response.json(
            { message: "Email failed", error: error.message },
            { status: 500 }
        );
    }
}
