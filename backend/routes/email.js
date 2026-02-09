const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// Email transporter (Standard SMTP - fully configurable via ENV)
console.log("📧 SMTP Config:", {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER,
  secure: process.env.SMTP_SECURE
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.zoho.in',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

router.post('/send-email', async (req, res) => {
  const { name, email, company, description, budget, timeline, division, service, otherDescription } = req.body;

  try {
    // 1. Save to MongoDB
    const contact = new Contact({
      name,
      email,
      company,
      description,
      budget,
      timeline,
      division,
      service,
      otherDescription
    });

    await contact.save();
    console.log(`✅ Contact saved to database: ${contact._id}`);

    // Email Configuration
    const teamEmailAddr = process.env.SMTP_USER || 'hello@venturemond.com';

    // Construct Email Content (HTML)
    // Construct Email Content (HTML) - TEAM NOTIFICATION
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 2px solid #0BA57F; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
        
        <!-- Header -->
        <div style="background-color: #0B0B0B; padding: 20px; text-align: center;">
          <h1 style="color: #0BA57F; margin: 0; font-size: 24px; letter-spacing: 1px;">Venturemond</h1>
        </div>

        <!-- Body -->
        <div style="padding: 20px; color: #333;">
          <h2 style="color: #0B0B0B; margin-top: 0; text-align: center; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">New Inquiry Received</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 8px; font-weight: bold; width: 30%;">Name:</td><td style="padding: 8px;">${name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}" style="color: #0BA57F;">${email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Company:</td><td style="padding: 8px;">${company || 'N/A'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Service:</td><td style="padding: 8px;">${service || 'N/A'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Division:</td><td style="padding: 8px;">${division || 'N/A'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Budget:</td><td style="padding: 8px;">${budget || 'N/A'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Timeline:</td><td style="padding: 8px;">${timeline || 'N/A'}</td></tr>
          </table>

          <div style="background-color: #f9f9f9; padding: 15px; margin-top: 20px; border-left: 4px solid #0BA57F;">
            <p style="margin: 0; font-weight: bold;">Message:</p>
            <p style="margin: 5px 0 0 0;">${description}</p>
          </div>

          <p><strong>Other Details:</strong> ${otherDescription || 'N/A'}</p>
        </div>

        <!-- Footer -->
        <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #ddd;">
          <p style="margin: 5px;"><strong>Venturemond Website Inquiry System</strong></p>
          <p style="margin: 5px;"><a href="https://www.venturemond.com" style="color: #0BA57F; text-decoration: none;">www.venturemond.com</a></p>
        </div>
      </div>
    `;

    // SEND EMAIL (Background - Fire and Forget)
    const mailOptions = {
      from: `"Venturemond" <${teamEmailAddr}>`,
      to: teamEmailAddr, // Send to Admin/Team
      subject: `New Inquiry from ${name}`,
      html: emailHtml
    };

    transporter.sendMail(mailOptions)
      .then(() => console.log('✅ Team email sent via SMTP'))
      .catch(err => console.error('⚠️ Team SMTP failed:', err));

    // 2. Send Confirmation Email to User
    if (email) {
      const userMailOptions = {
        from: `"Venturemond" <${teamEmailAddr}>`,
        to: email,
        subject: `Thanks for Reaching Out to Venturemond`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 2px solid #0BA57F; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
            
            <!-- Header -->
            <div style="background-color: #0B0B0B; padding: 20px; text-align: center;">
              <h1 style="color: #0BA57F; margin: 0; font-size: 24px; letter-spacing: 1px;">Venturemond</h1>
            </div>

            <!-- Body -->
            <div style="padding: 30px; text-align: center; color: #333;">
              <p style="font-size: 18px; margin-bottom: 20px; font-weight: bold;">Hello ${name},</p>
              
              <p style="font-size: 16px; margin-bottom: 20px; line-height: 1.5;">
                Thank you for reaching out to us.<br>
                We have received your message regarding <strong>${service || 'your project'}</strong>.
              </p>

              <p style="font-size: 16px; margin-bottom: 30px; line-height: 1.5;">
                Someone from our team will review your requirements and get back to you within the next 24 hours.
              </p>
              
              <div style="background-color: #f9f9f9; padding: 15px; margin: 20px 0; display: inline-block; width: 80%; border-radius: 6px;">
                 <p style="margin: 0; color: #555; font-size: 14px;">If your request is urgent, feel free to give us a call or reply directly to this email.</p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f4f4f4; padding: 20px; text-align: center; color: #666; border-top: 1px solid #ddd;">
              <p style="margin: 0 0 10px 0; font-weight: bold; color: #333; font-size: 16px;">Venturemond Team</p>
              <p style="margin: 5px 0;">
                <a href="mailto:hello@venturemond.com" style="color: #0BA57F; text-decoration: none; font-weight: bold;">hello@venturemond.com</a>
              </p>
              <p style="margin: 5px 0;">
                <a href="https://www.venturemond.com" style="color: #0BA57F; text-decoration: none;">www.venturemond.com</a>
              </p>
            </div>
          </div>
        `
      };

      transporter.sendMail(userMailOptions)
        .then(() => console.log('✅ User confirmation email sent'))
        .catch(err => console.error('⚠️ User SMTP failed:', err));
    }

    // Respond immediately
    res.json({
      success: true,
      message: 'Inquiry received successfully!',
      contactId: contact._id
    });

  } catch (error) {
    console.error('❌ Database Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to save contact',
      error: error.message
    });
  }
});

module.exports = router;
