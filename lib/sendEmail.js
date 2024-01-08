import nodemailer from "nodemailer";



//create transporter for the nodemailder
const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_SMPT_HOST,
    port: process.env.NEXT_PUBLIC_SMPT_PORT,
    secure: process.env.NEXT_PUBLIC_SMPT_SECURE,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.NEXT_PUBLIC_SMPT_USER_MY,
        pass: process.env.NEXT_PUBLIC_SMPT_USER_PASSWORD,
    },
    // other options
    tls: {
        rejectUnauthorized: false
    },



});




// async..await is not allowed in global scope, must use a wrapper
async function EmailSend() {

    try {

        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_SMPT_USER_MY, // sender address
            to: process.env.NEXT_PUBLIC_SMPT_USER, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });



        console.log(info);


    } catch (error) {

        console.log("error : There was a email sending problem" + error)
    }

}


export default EmailSend;
