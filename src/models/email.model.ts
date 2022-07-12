import 'dotenv/config';
import emailService, { MailDataRequired } from '@sendgrid/mail';

const SQLStoreSender: { name?: string, email: string } = {
    name: 'NoSQL Store',
    email: process.env.SENDGRID_SENDER!
}

export class EmailSender {
    static async sendEmail(to: string, subject: string, html: string, text?: string) {
        try {
            emailService.setApiKey(process.env.SENDGRID_API!);
            const email: MailDataRequired = {
                from: SQLStoreSender,
                to,
                subject,
                html,
                text
            }
            const email_message = await emailService.send(email)
            return email_message
        } catch (error) {
            return error
        }
    }
}