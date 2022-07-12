import { EmailSender } from "./models/email.model";

EmailSender.sendEmail(
    'karina_0794@hotmail.com',
    'Olá Karina Rolim',
    '<h1>Jesus te ama e eu tb!</h1>'
)
    .then(res => {
        console.log('email sent!')
        console.log(res)
    })
    .catch(error => console.error(error))