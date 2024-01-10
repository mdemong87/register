import EmailSend from "../lib/sendEmail";
import ConnectDB from "../mongoose/ConnectDB";
import RegisterModel from "../mongoose/models";



export default async function PostController(req, res) {


    const {
        title, fristName, sureName, dateOfDate, tubeStation, postCode, mobileNumber, email, emergancyContactName, emergancyContactNumber, nationality, insurance, card, cardNumber, issueDate, expaireDate, criminal, department, month, permission, hear, agree, message
    } = req.body;

    //create object for the all object property
    const objectData = {
        title, fristName, sureName, dateOfDate, tubeStation, postCode, mobileNumber, email, emergancyContactName, emergancyContactNumber, nationality, insurance, card, cardNumber, issueDate, expaireDate, criminal, department, month, permission, hear, agree, message
    }


    try {


        //send email from here
        await EmailSend(title, fristName, email, mobileNumber, nationality);



        //connect database
        ConnectDB();

        //create record in database
        const insertdata = await RegisterModel.create(objectData);



        //send response to the frontend
        res.status(200).json({
            success: true,
            message: "Registration Successfully"
        });

    } catch (err) {

        //send response to the frontend for the error
        res.status(500).json({
            success: false,
            error: 'There was a Server side Problem'
        });
    }
}