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

router.post('/email', async (req, res) => {
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
    // Construct Email Content (HTML) - TEAM NOTIFICATION
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width:600px; margin:0 auto; border:2px solid #0BA57F; border-radius:8px; overflow:hidden; background:#ffffff;">
        
        <!-- Header -->
        <div style="background:#0B0B0B; padding:20px; text-align:center;">
          <img src="https://www.venturemond.com/logo1.png" alt="Venturemond" style="max-height:45px; display:block; margin:0 auto;" />
        </div>

        <!-- Body -->
        <div style="padding:24px; color:#333;">
          <h2 style="margin-top:0; color:#0B0B0B; font-size: 20px;">New Website Inquiry</h2>
          
          <table style="width:100%; border-collapse:collapse; margin-top:16px;">
            <tr><td style="padding:8px; font-weight:bold; width: 30%;">Name</td><td style="padding:8px;">${name}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Email</td><td style="padding:8px;">${email}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Company</td><td style="padding:8px;">${company || '—'}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Service</td><td style="padding:8px;">${service || '—'}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Division</td><td style="padding:8px;">${division || '—'}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Budget</td><td style="padding:8px;">${budget || '—'}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Timeline</td><td style="padding:8px;">${timeline || '—'}</td></tr>
          </table>

          <div style="margin-top:20px; padding:15px; background:#f9f9f9; border-left:4px solid #0BA57F;">
            <strong>Message</strong>
            <p style="margin-top:8px;">${description}</p>
          </div>
          
          <p><strong>Other Details:</strong> ${otherDescription || 'N/A'}</p>
        </div>

        <!-- Footer -->
        <div style="background:#f4f4f4; padding:14px; text-align:center; font-size:12px;">
          <p style="margin:4px;">Venturemond Internal Notification</p>
          <a href="https://www.venturemond.com" style="color:#0BA57F; text-decoration: none;">www.venturemond.com</a>
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
          <div style="font-family: Arial, sans-serif; max-width:600px; margin:0 auto; border:2px solid #0BA57F; border-radius:8px; overflow:hidden; background:#ffffff;">
            
            <!-- Header -->
            <div style="background:#0B0B0B; padding:20px; text-align:center;">
              <img src="https://www.venturemond.com/logo1.png" alt="Venturemond" style="max-height:45px; display:block; margin:0 auto;" />
            </div>

            <!-- Body -->
            <div style="padding:30px; color:#333;">
              <p style="font-size:18px; font-weight:bold; margin-top: 0;">Hello ${name},</p>
              
              <p style="font-size:15px; line-height:1.6;">
                Thank you for reaching out to us.<br>
                We have received your message regarding <strong>${service || 'your project'}</strong>.
              </p>

              <p style="font-size:15px; line-height:1.6;">
                Our team is currently reviewing your requirements and will get back to you as soon as possible.
              </p>
              
              <p style="font-size:15px;">
                We appreciate your interest and look forward to connecting with you.
              </p>
            </div>

            <!-- Footer (Left Aligned) -->
            <div style="background:#f4f4f4; padding:20px; text-align:left;">
              <p style="margin:6px 0; font-weight:bold;">Venturemond Team</p>
              <p style="margin:6px 0;">
                <a href="mailto:hello@venturemond.com" style="color:#0BA57F; text-decoration:none;">
                  hello@venturemond.com
                </a>
              </p>
              <p style="margin:6px 0;">
                <a href="https://www.venturemond.com" style="color:#0BA57F; text-decoration:none;">
                  www.venturemond.com
                </a>
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
