import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp-relay.brevo.com",
    port: Number(process.env.EMAIL_PORT || 2525),
    secure: false,
    connectionTimeout: Number(process.env.EMAIL_CONNECTION_TIMEOUT || 10000),
    greetingTimeout: Number(process.env.EMAIL_GREETING_TIMEOUT || 10000),
    socketTimeout: Number(process.env.EMAIL_SOCKET_TIMEOUT || 15000),
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function sendBrevoMail({ to, subject, html }) {
    const fromEmail =
        process.env.EMAIL_FROM || process.env.EMAIL_USER || process.env.SMTP_EMAIL;

    await transporter.sendMail({
        from: `Accredian <${fromEmail}>`,
        to,
        subject,
        html,
    });
}

export { transporter };
