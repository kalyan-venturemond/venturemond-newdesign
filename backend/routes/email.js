const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { Resend } = require('resend');
const Contact = require('../models/Contact');

// Initialize Resend if API key is present
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Email transporter (Fallback for SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
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

    // Email Check: Resend vs Nodemailer
    const teamEmailAddr = process.env.SMTP_USER || 'kalyanguraka7@gmail.com';

    // Construct Email Content (HTML)
    const emailHtml = `
      <h3>New Inquiry from ${name}</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Division:</strong> ${division || 'N/A'}</p>
      <p><strong>Service:</strong> ${service || 'N/A'}</p>
      <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
      <p><strong>Timeline:</strong> ${timeline || 'N/A'}</p>
      <br/>
      <p><strong>Message:</strong></p>
      <p>${description}</p>
      <br/>
      <p><strong>Other Details:</strong></p>
      <p>${otherDescription || 'N/A'}</p>
      <br/>
      <p><small>Submitted via Venturemond Website</small></p>
      <p><small>Note: This email was sent via Resend API (Railway Compatible)</small></p>
    `;

    // SEND EMAILS (Background)

    if (resend) {
      // --- USE RESEND (Reliable for Railway) ---
      console.log('🚀 Sending via Resend API...');

      // Send to Admin/Team
      resend.emails.send({
        from: 'Venturemond <onboarding@resend.dev>', // Free tier must use this default sender
        to: teamEmailAddr, // Must be your verified email on Resend (kalyanguraka7@gmail.com)
        subject: `New Inquiry from ${name}`,
        html: emailHtml
      }).then(data => console.log('✅ Team email sent via Resend:', data))
        .catch(err => console.error('⚠️ Resend Team email failed:', err));

    } else {
      // --- USE NODEMAILER (Fallback) ---
      const mailOptions = {
        from: `"Venturemond Website" <${teamEmailAddr}>`,
        to: teamEmailAddr,
        subject: `New Inquiry from ${name}`,
        html: emailHtml
      };

      transporter.sendMail(mailOptions)
        .then(() => console.log('✅ Team email sent via SMTP'))
        .catch(err => console.error('⚠️ SMTP failed:', err));
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
