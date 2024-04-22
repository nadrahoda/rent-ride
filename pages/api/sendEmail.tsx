// pages/api/sendEmail.js

import nodemailer from "nodemailer";

export default async function handler(req: { method: string; body: { mail: any; subject: any; text: any; html: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message?: string; error?: string; }): void; new(): any; }; }; }) {
  if (req.method === 'POST') {
    const { mail, subject, text, html } = req.body;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "nppdcare@gmail.com",
        pass: "ayiu ysuo ltdh tooa",
      },
    });

    try {
      // Send mail using nodemailer
      const info = await transporter.sendMail({
        from: '"rent&ride!" <nppdcare@gmail.com>',
        to: mail,
        subject: subject,
        text: text,
        html: html,
      });

      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
