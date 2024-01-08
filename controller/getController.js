import ConnectDB from "../mongoose/ConnectDB";
import RegisterModel from "../mongoose/models";



export default async function GetController(req, res) {


    try {

        //connect database
        ConnectDB();

        //create record in database
        const findData = await RegisterModel.find();

        //send response to the frontend
        res.status(200).json({
            success: true,
            message: "Get data Successfully",
            data: findData
        });



    } catch (error) {
        //send response to the frontend for the error
        res.status(500).json({
            success: false,
            error: 'There was a Server side Problem'
        });
    }

    console.log(req);
}