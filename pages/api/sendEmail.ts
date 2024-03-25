// pages/api/contact.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
 if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
 }

 const { message, name, phone, email } = req.body;

 
 const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_EMAIL, 
      pass: process.env.SMTP_PASSWORD, 
    },
 });

 try {
    
    await transporter.sendMail({
    
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL, 
      subject: 'Hello ✔ from nerdforsch', 
      text: `Name ${name}, email${email}, phone :<b>${phone}</b>
        message :<b>${message}</b>`, 
      html: `<b>Name ${name}</b>,<br />
         email :<b>${email}</b>
         phone :<b>${phone}</b>
         message :<b>${message}</b>`,
    });

    
    return res.status(200).json({ message: 'Message sent successfully' });
 } catch (error) {
    console.error('Error sending email:', error);
    
    return res.status(500).json({ message: 'An error occurred while sending the message.' });
 }
}
