import nodemailer from "nodemailer";


//create transporter for the nodemailder
const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_SMPT_HOST,
    port: process.env.NEXT_PUBLIC_SMPT_PORT,
    secure: process.env.NEXT_PUBLIC_SMPT_SECURE,
    auth: {
        user: process.env.NEXT_PUBLIC_SMPT_USER_MY,
        pass: process.env.NEXT_PUBLIC_SMPT_USER_PASSWORD,
    },
    // other options
    tls: {
        rejectUnauthorized: false
    },

});


// async..await is not allowed in global scope, must use a wrapper
async function EmailSend(title, fullName, email, mobile, Nationality) {

    try {

        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_SMPT_USER_MY, // sender address
            to: process.env.NEXT_PUBLIC_SMPT_USER, // list of receivers
            subject: "New Email come from your Website", // Subject line
            text: "One New Registation", // plain text body
            html: `<section>
            <p>Hi there,</p>
            <p>You have got one new email from your website.</p>
            <h2>Registation Info</h2>
            <section>
                <p><b>Title :</b> ${title} </p>
                <p><b>Full Name :</b> ${fullName} </p>
                <p><b>Email :</b> ${email} </p>
                <p><b>Mobile Number :</b> ${mobile} </p>
                <p><b>Nationality :</b> ${Nationality} </p>
    
                <a href="https://kstuff.vercel.app/deshboard">View more information</a>
    
            </section>
        </section>`,
        });

    } catch (error) {

        //console log when occured any kind of error
        console.log("error : There was a email sending problem" + error)
    }
}

export default EmailSend;
