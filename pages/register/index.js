import Link from "next/link";
import { useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { BsFillHousesFill } from "react-icons/bs";
import { FaHandsHelping, FaIdCard, FaMobileAlt, FaUser, FaUserNurse } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiForkKnifeSpoon, GiWomanElfFace } from "react-icons/gi";
import { GrUserFemale } from "react-icons/gr";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail, MdOutlineCalendarMonth, MdOutlineTextSnippet } from "react-icons/md";
import { SlUserFemale } from "react-icons/sl";
import { TbWorld } from "react-icons/tb";
import Container from "../../componnent/Container";
import Loading from "../../componnent/Loading";

//for react toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function Register() {


    const [title, settitle] = useState('');
    const [fristName, setfristName] = useState('');
    const [sureName, setsureName] = useState('');
    const [dateOfDate, setdateOfDate] = useState('');
    const [tubeStation, settubeStation] = useState('');
    const [postCode, setpostCode] = useState('');
    const [mobileNumber, setmobileNumber] = useState('');
    const [email, setemail] = useState('');
    const [emergancyContactName, setemergancyContactName] = useState("");
    const [emergancyContactNumber, setemergancyContactNumber] = useState("");
    const [nationality, setnationality] = useState("");
    const [insurance, setinsurance] = useState('');
    const [card, setcard] = useState('');
    const [cardNumber, setcardNumber] = useState('');
    const [issueDate, setissueDate] = useState('');
    const [expaireDate, setexpaireDate] = useState('');
    const [criminal, setcriminal] = useState("");
    const [department, setdepartment] = useState('');
    const [month, setmonth] = useState('');
    const [permission, setpermission] = useState('');
    const [hear, sethear] = useState('');
    const [agree, setagree] = useState(false);
    const [message, setmessage] = useState('');
    const [isLoading, setisLoading] = useState(false);

















    //handlesubmite function here
    async function handleSubmit() {



        if (title != "" && fristName != "" && sureName != "" && dateOfDate != "" && tubeStation != "" && postCode != "" && mobileNumber != "" && email != "" && emergancyContactName != "" && emergancyContactNumber != "" && nationality != "" && insurance != "" && card != "" && cardNumber != "" && issueDate != "" && expaireDate != "" && criminal != "" && department != "" && month != "" && permission != "" && hear != "" && agree === true && message !== "") {


            //start loading start
            setisLoading(true);


            //cteate a object from all single variable
            const dataObject = {
                title, fristName, sureName, dateOfDate, tubeStation, postCode, mobileNumber, email, emergancyContactName, emergancyContactNumber, nationality, insurance, card, cardNumber, issueDate, expaireDate, criminal, department, month, permission, hear, agree, message
            }


            //make a fetch post request in the server
            const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(dataObject)
            });
            const res = await response.json();

            //end the loading state becosue the server get back response
            setisLoading(false);


            //show toast sms on depande the server response
            if (res.success) {
                toast.success(res.message);
            } else {
                toast.error(res.error);
            }



        } else {
            toast.error("Enter Some all the Required filed");
        }


    }



    return (
        <main className="f-fit py-20 pb-4">
            <ToastContainer />
            <Container>
                <div className="w-full">
                    <h1 className="text-3xl font-bold pcolor text-center pb-8">Register Form</h1>

                    <div className="bg-gray-100 rounded-xl h-fit w-full p-8">


                        {/* title input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 pb-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Title *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <div onClick={() => settitle('MR')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${title == "MR" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <FaUserNurse />
                                    <h2>MR</h2>
                                </div>

                                <div onClick={() => settitle('MRS')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${title == "MRS" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <SlUserFemale />
                                    <h2>MRS</h2>
                                </div>

                                <div onClick={() => settitle('MSS')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${title == "MSS" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <GiWomanElfFace />
                                    <h2>MSS</h2>
                                </div>

                                <div onClick={() => settitle('MS')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${title == "MS" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <GrUserFemale />
                                    <h2>MS</h2>
                                </div>
                            </div>
                        </div>
                        {/* title input end here */}


                        {/* frist name input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Frist Name *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <input onChange={(e) => setfristName(e.target.value)} type="text" className="w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer bg-gray-100 outline-1 outline-gray-300 pl-10 relative text-md" />
                                <FaUser className="absolute text-gray-500 ml-4" />
                            </div>
                        </div>
                        {/* frist name input end here */}




                        {/* family name or sure name input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Family Name / Sure Name *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <input onChange={(e) => setsureName(e.target.value)} type="text" className="w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer bg-gray-100 outline-1 outline-gray-300 pl-10 relative text-md" />
                                <FaUser className="absolute text-gray-500 ml-4" />
                            </div>
                        </div>
                        {/* family name or sure name input end here */}




                        {/* date of brith input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Date of Brith *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <input onChange={(e) => setdateOfDate(e.target.value)} type="date" className="w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer bg-gray-100 outline-1 outline-gray-300 px-3 text-md" />
                            </div>
                        </div>
                        {/* date of brith input end here */}





                        {/* tuebe station input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Your Tube Station *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <select onChange={(e) => settubeStation(e.target.value)} className="w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer bg-gray-100 outline-1 outline-gray-300 px-3 text-md">
                                    <option>Select Station</option>
                                    <option>Abbey Wood</option>
                                    <option>Acton Main Line Rail Station</option>
                                    <option>Acton Town</option>
                                    <option>Aldgate</option>
                                    <option>Aldgate East</option>
                                    <option>Barbican</option>
                                    <option>Battersea Park</option>
                                    <option>Beckton</option>
                                    <option>Borough</option>
                                    <option>Charing Cross</option>
                                    <option>Aceh</option>
                                    <option>North Sumatra</option>
                                    <option>West Sumatra</option>
                                    <option>Riau</option>
                                    <option>Jambi</option>
                                    <option>South Sumatra</option>
                                    <option>Bengkulu</option>
                                    <option>Lampung</option>
                                    <option>Bangka Belitung</option>
                                    <option>Riau Islands</option>
                                    <option>DKI Jakarta</option>
                                    <option>West Java</option>
                                    <option>Central Java</option>
                                    <option>Yogyakarta</option>
                                    <option>East Java</option>
                                    <option>Banten</option>
                                    <option>Bali</option>
                                    <option>West Nusa Tenggara</option>
                                    <option>East Nusa Tenggara</option>
                                    <option>West Kalimantan</option>
                                    <option>Central Kalimantan</option>
                                    <option>South Kalimantan</option>
                                    <option>East Kalimantan</option>
                                    <option>North Kalimantan</option>
                                    <option>North Sulawesi</option>
                                    <option>Gorontalo</option>
                                    <option>Central Sulawesi</option>
                                    <option>West Sulawesi</option>
                                    <option>South Sulawesi</option>
                                    <option>Southeast Sulawesi</option>
                                    <option>Maluku</option>
                                    <option>North Maluku</option>
                                    <option>West Papua</option>
                                    <option>Papua</option>
                                </select>
                            </div>
                        </div>
                        {/* tube station input end here */}



                        {/* post code input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Post Code *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <input onChange={(e) => setpostCode(e.target.value)} type="number" className="w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer bg-gray-100 outline-1 outline-gray-300 px-3 text-md pl-10 relative" />
                                <FaLocationDot className="absolute text-lg text-gray-500 ml-4" />
                            </div>
                        </div>
                        {/* post code input end here */}




                        {/* mobile number input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Mobile Number *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <input onChange={(e) => setmobileNumber(e.target.value)} type="number" className="w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer bg-gray-100 outline-1 outline-gray-300 px-3 text-md pl-10 relative" />
                                <FaMobileAlt className="absolute text-lg text-gray-500 ml-4" />
                            </div>
                        </div>
                        {/* mobile number input end here */}



                        {/* email address input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Email Address *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <input onChange={(e) => setemail(e.target.value)} type="email" className="w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer bg-gray-100 outline-1 outline-gray-300 px-3 text-md pl-10 relative" />
                                <MdEmail className="absolute text-lg text-gray-500 ml-4" />
                            </div>
                        </div>
                        {/* email address input end here */}



                        {/* emergency contact name input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Emergency Contact Name *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <input onChange={(e) => setemergancyContactName(e.target.value)} type="text" className="w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer bg-gray-100 outline-1 outline-gray-300 px-3 text-md pl-10 relative" />
                                <FaHandsHelping className="absolute text-xl text-gray-500 ml-4" />
                            </div>
                        </div>
                        {/* emergency contact name input end here */}




                        {/* emergency contact number input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Emergency Phone Number *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <input onChange={(e) => setemergancyContactNumber(e.target.value)} type="number" className="w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer bg-gray-100 outline-1 outline-gray-300 px-3 text-md pl-10 relative" />
                                <IoCallSharp className="absolute text-xl text-gray-500 ml-4" />
                            </div>
                        </div>
                        {/* emergency contact number input end here */}




                        {/* nationality input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Nationality *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <input onChange={(e) => setnationality(e.target.value)} type="text" className="w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer bg-gray-100 outline-1 outline-gray-300 px-3 text-md pl-10 relative" />
                                <TbWorld className="absolute text-xl text-gray-500 ml-4" />
                            </div>
                        </div>
                        {/* nationality input end here */}


                        {/* nationality insurance input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Do you have national Insurance Number *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <div onClick={() => setinsurance('yes')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${insurance == "yes" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <AiFillLike />
                                    <h2>Yes</h2>
                                </div>

                                <div onClick={() => setinsurance('no')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${insurance == "no" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <AiFillDislike />
                                    <h2>No</h2>
                                </div>
                            </div>
                        </div>
                        {/* nationality insurance input end here */}





                        {/* Password || Id Card input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Password || Id Card *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <select onChange={(e) => setcard(e.target.value)} className="w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer bg-gray-100 outline-1 outline-gray-300 px-3 text-md">
                                    <option>Select Country</option>
                                    <option>Abbey Wood</option>
                                    <option>Acton Main Line Rail Station</option>
                                    <option>Acton Town</option>
                                    <option>Aldgate</option>
                                    <option>Aldgate East</option>
                                    <option>Barbican</option>
                                    <option>Battersea Park</option>
                                    <option>Beckton</option>
                                    <option>Borough</option>
                                    <option>Charing Cross</option>
                                    <option>Aceh</option>
                                    <option>North Sumatra</option>
                                    <option>West Sumatra</option>
                                    <option>Riau</option>
                                    <option>Jambi</option>
                                    <option>South Sumatra</option>
                                    <option>Bengkulu</option>
                                    <option>Lampung</option>
                                    <option>Bangka Belitung</option>
                                    <option>Riau Islands</option>
                                    <option>DKI Jakarta</option>
                                    <option>West Java</option>
                                    <option>Central Java</option>
                                    <option>Yogyakarta</option>
                                    <option>East Java</option>
                                    <option>Banten</option>
                                    <option>Bali</option>
                                    <option>West Nusa Tenggara</option>
                                    <option>East Nusa Tenggara</option>
                                    <option>West Kalimantan</option>
                                    <option>Central Kalimantan</option>
                                    <option>South Kalimantan</option>
                                    <option>East Kalimantan</option>
                                    <option>North Kalimantan</option>
                                    <option>North Sulawesi</option>
                                    <option>Gorontalo</option>
                                    <option>Central Sulawesi</option>
                                    <option>West Sulawesi</option>
                                    <option>South Sulawesi</option>
                                    <option>Southeast Sulawesi</option>
                                    <option>Maluku</option>
                                    <option>North Maluku</option>
                                    <option>West Papua</option>
                                    <option>Papua</option>
                                </select>
                            </div>
                        </div>
                        {/* Password || Id Card input end here */}




                        {/* Password || Id Card number input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Password || Id Card Number *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <input onChange={(e) => setcardNumber(e.target.value)} type="number" className="w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer bg-gray-100 outline-1 outline-gray-300 px-3 text-md pl-10 relative" />
                                <FaIdCard className="absolute text-xl text-gray-500 ml-4" />
                            </div>
                        </div>
                        {/* Password || Id Card number input end here */}




                        {/* issue date expaire date input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Issue Date / Expaire Date *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
                                <div className={`w-full rounded-md flex justify-center items-center shadow cursor-pointer gap-2`}>
                                    <input onChange={(e) => setissueDate(e.target.value)} type="date" className="w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer bg-gray-100 outline-1 outline-gray-300 px-3 text-md" />
                                </div>

                                <div className={`w-full rounded-md flex justify-center items-center shadow cursor-pointer gap-2`}>
                                    <input onChange={(e) => setexpaireDate(e.target.value)} type="date" className="w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer bg-gray-100 outline-1 outline-gray-300 px-3 text-md" />
                                </div>
                            </div>
                        </div>
                        {/* issue data expaire date input end here */}







                        {/* criminal convictions input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Have you any Unsent Criminal Convictions *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <div onClick={() => setcriminal('yes')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${criminal == "yes" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <AiFillLike />
                                    <h2>Yes</h2>
                                </div>

                                <div onClick={() => setcriminal('no')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${criminal == "no" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <AiFillDislike />
                                    <h2>No</h2>
                                </div>
                            </div>
                        </div>
                        {/* criminal convictions input end here */}



                        {/* department are you applying for input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Department Are you applying for *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <div onClick={() => setdepartment('catering')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${department == "catering" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <GiForkKnifeSpoon />
                                    <h2>Catering</h2>
                                </div>

                                <div onClick={() => setdepartment('housekeeping')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${department == "housekeeping" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <BsFillHousesFill />
                                    <h2>Housekeeping</h2>
                                </div>
                            </div>
                        </div>
                        {/* department are you applying for input end here */}





                        {/* how may time you stay input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>How Long are you planning to stay *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
                                <div onClick={() => setmonth('3')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${month == "3" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <MdOutlineCalendarMonth />
                                    <h2>3 Months</h2>
                                </div>

                                <div onClick={() => setmonth('6')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${month == "6" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <MdOutlineCalendarMonth />
                                    <h2>6 Months</h2>
                                </div>

                                <div onClick={() => setmonth('12')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${month == "12" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <MdOutlineCalendarMonth />
                                    <h2>12 Months</h2>
                                </div>

                                <div onClick={() => setmonth('longer')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${month == "longer" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <MdOutlineCalendarMonth />
                                    <h2>Longer</h2>
                                </div>
                            </div>
                        </div>
                        {/* how many time you stay input end here */}


                        <div className="py-5 border-b-2 border-gray-200">
                            <p className="text-gray-500">
                                Spent convictions are those which, following a period of rehabilitation, need not be declared under the Rehabilitation of Offenders Act 1974. The information you give will be treated in confidence and only taken into account where the offence is relevant to the post for which you are applying.
                            </p>
                            <p className="pt-6 text-gray-500">
                                Calibre Recruitment complies fully with the Rehabilitation of Offenders Act 1974 and the CRB Code of Practice and undertakes to treat all applicants for positions fairly. It undertakes not to discriminate unfairly against any subject of a Disclosure on the basis of conviction or other information revealed.
                            </p>
                        </div>


                        {/* do you have permission to work in the uk  input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Do you have permission to work in UK *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <div onClick={() => setpermission('yes')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${permission == "yes" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <AiFillLike />
                                    <h2>Yes</h2>
                                </div>

                                <div onClick={() => setpermission('no')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${permission == "no" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <AiFillDislike />
                                    <h2>No</h2>
                                </div>
                            </div>
                        </div>
                        {/* do you have permission to work in the uk input end here */}



                        <div className="py-5 border-b-2 border-gray-200">
                            <p className="text-gray-500">
                                In line with UKBA guidance on the prevention of illegal working we will need to verify and take a copy of your original ID documentation as evidence of your right to work in the UK if you are to be engaged by Calibre Recruitment for temporary work.

                            </p>
                        </div>





                        {/* where you here about us input start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>How did you hear about us *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex-col sm:flex-row flex items-center justify-between gap-2">
                                <div onClick={() => sethear('Facebook')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${hear == "Facebook" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <span>Facebook</span>
                                </div>

                                <div onClick={() => sethear('Newspare')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${hear == "Newspare" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <span>Newspare</span>
                                </div>
                                <div onClick={() => sethear('JobToday')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${hear == "JobToday" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <span>Job Today</span>
                                </div>

                                <div onClick={() => sethear('Indeed')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${hear == "Indeed" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <span>Indeed</span>
                                </div>

                                <div onClick={() => sethear('Frinds')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${hear == "Frinds" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <span>Friends</span>
                                </div>
                                <div onClick={() => sethear('Others')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${hear == "Others" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <span>Others</span>
                                </div>

                            </div>
                        </div>
                        {/* where you here about us input end here */}





                        {/* message textarea start here */}
                        <div className="flex gap-5 flex-col lg:flex-row items-start justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-start gap-2 lg:justify-between">
                                    <span>Write Somethings about yourself *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full h-full flex items-start justify-between gap-2">
                                <textarea onChange={(e) => setmessage(e.target.value)} className="w-full h-48 rounded-md flex justify-center items-center py-1 shadow cursor-pointer bg-gray-100 outline-1 outline-gray-300 pl-12 pt-2 pr-3 relative text-md"></textarea>
                                <MdOutlineTextSnippet className="absolute text-gray-500 text-2xl mt-2 ml-4" />
                            </div>
                        </div>
                        {/* message textarea end here */}











                        <div>
                            <h1 className="text-2xl text-gray-700 font-bold pt-8 pb-4">Declaration</h1>
                            <p className="text-gray-700">The imformation from this form will be processed for the purpose of registering for employment.</p>
                            <div className="my-8 text-gray-700">
                                <p>I declared the imformation provided are true and complete to the best of my knowledge and believe i have not withheld any information refferred to in this application form.</p>
                                <p>understand that any misrepresenttation will invalidate my application, and if employed could lead to my dismissal.</p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <input onChange={() => setagree(!agree)} className="w-7 h-7" type="checkbox" />
                                <span>Tick to agree <Link className="underline pcolor" href={'/'}>all the terms and conditions</Link></span>
                            </div>
                        </div>


                        {/* submite button start hrere */}
                        <div className="mt-10 w-full">
                            <button onClick={() => handleSubmit()} className="pbg text-gray-50 py-2 w-full rounded-md text-xl cursor-pointer">
                                {
                                    isLoading ? <Loading /> : "Submit"
                                }
                            </button>
                        </div>
                        {/* submite button end hrere */}






                    </div>

                </div>
            </Container>
            <p className="text-center pt-28">Developed by - <Link target="blank" className="text-green-400" href={"https://www.nanosoft.uk/"}>Nanosoft</Link></p>
        </main>
    )
}




