import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;


//create resgister schema
const registerSchema = new Schema({

    title: String,
    fristName: String,
    sureName: String,
    dateOfDate: String,
    tubeStation: String,
    postCode: String,
    mobileNumber: String,
    email: String,
    emergancyContactName: String,
    emergancyContactNumber: String,
    nationality: String,
    insurance: String,
    card: String,
    cardNumber: String,
    issueDate: String,
    expaireDate: String,
    criminal: String,
    department: String,
    month: String,
    permission: String,
    hear: String,
    agree: Boolean,
    message: String,
    createdAt: { type: Date, default: Date.now }

});



// createing register model
const RegisterModel = models.RegisterModel || model("RegisterModel", registerSchema);


//export the model form here
export default RegisterModel;
