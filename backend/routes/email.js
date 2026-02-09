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
          <div style="font-family: Arial, sans-serif; text-align: center; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <p style="font-size: 16px; margin-bottom: 20px;">Hello ${name},</p>
            <p style="font-size: 16px; margin-bottom: 20px;">We hope you're doing well.</p>
            <p style="font-size: 16px; margin-bottom: 20px;">Thanks for getting in touch, we've received your message. Someone from our team will get back to you within the next 24 hours.</p>
            <p style="font-size: 16px; margin-bottom: 40px;">If your request is urgent, feel free to reply directly to this email.</p>
            
            <p style="font-size: 16px; font-weight: bold;">Sincerely,<br/>Team Venturemond<br/><span style="font-weight: normal; font-size: 14px; color: #666;">Technology Venture Builder</span></p>
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
