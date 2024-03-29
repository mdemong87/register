import Container from "../../componnent/Container";
import { default as downloadPDF } from "../../utillity/download";

export default function Dashborad({ data }) {

    //just get the data array
    const mainData = data?.data;




    return (
        <main className="f-fit py-20 pb-32">
            <Container>
                <div className="w-full">
                    <h1 className="text-3xl font-bold pcolor text-center pb-8">Deshborad Page</h1>

                    <div className="bg-gray-100 rounded-xl h-fit w-full overflow-x-scroll">


                        <table className="w-full m-8">
                            <thead className="bg-green-200">
                                <tr>
                                    <th className="p-5 border border-green-200">SL</th>
                                    <th className="p-5 border border-green-200">Download</th>
                                    <th className="p-5 border border-green-200">Title</th>
                                    <th className="p-5 border border-green-200">Frist Name</th>
                                    <th className="p-5 border border-green-200">Sure Name</th>
                                    <th className="p-5 border border-green-200">Date Of Brith</th>
                                    <th className="p-5 border border-green-200">Tube Station</th>
                                    <th className="p-5 border border-green-200">Post Code</th>
                                    <th className="p-5 border border-green-200">Mobile Number</th>
                                    <th className="p-5 border border-green-200">Email</th>
                                    <th className="p-5 border border-green-200">Emergency Contact Name</th>
                                    <th className="p-5 border border-green-200">Emergency Contact Number</th>
                                    <th className="p-5 border border-green-200">Nationality</th>
                                    <th className="p-5 border border-green-200">Insurance</th>
                                    <th className="p-5 border border-green-200">Card</th>
                                    <th className="p-5 border border-green-200">Card Number</th>
                                    <th className="p-5 border border-green-200">Issue Date</th>
                                    <th className="p-5 border border-green-200">Expiry Date</th>
                                    <th className="p-5 border border-green-200">Criminal</th>
                                    <th className="p-5 border border-green-200">Department</th>
                                    <th className="p-5 border border-green-200">Month</th>
                                    <th className="p-5 border border-green-200">Permission</th>
                                    <th className="p-5 border border-green-200">Hear</th>
                                    <th className="p-5 border border-green-200">Agree</th>
                                    <th className="p-5 border border-green-200">Message</th>
                                </tr>

                            </thead>
                            <tbody>

                                {
                                    mainData?.map((item, index) => {

                                        return <tr key={index} className="border-b-2 border-green-200">
                                            <td className="p-5 border border-green-200">{index + 1}</td>
                                            <td className="p-5 border border-green-200">

                                                <button className="bg-green-500 p-3 rounded-md text-white cursor-pointer" onClick={() => { downloadPDF(mainData[index]) }}> Download </button>
                                            </td>
                                            <td className="p-5 border border-green-200 ">{item.title}</td>
                                            <td className="p-5 border border-green-200">{item.fristName}</td>
                                            <td className="p-5 border border-green-200">{item.sureName}</td>
                                            <td className="p-5 border border-green-200">{item.dateOfDate}</td>
                                            <td className="p-5 border border-green-200">{item.tubeStation}</td>
                                            <td className="p-5 border border-green-200">{item.postCode}</td>
                                            <td className="p-5 border border-green-200">{item.mobileNumber}</td>
                                            <td className="p-5 border border-green-200">{item.email}</td>
                                            <td className="p-5 border border-green-200">{item.emergancyContactName}</td>
                                            <td className="p-5 border border-green-200">{item.emergancyContactNumber}</td>
                                            <td className="p-5 border border-green-200">{item.nationality}</td>
                                            <td className="p-5 border border-green-200">{item.insurance}</td>
                                            <td className="p-5 border border-green-200">{item.card}</td>
                                            <td className="p-5 border border-green-200">{item.cardNumber}</td>
                                            <td className="p-5 border border-green-200">{item.issueDate}</td>
                                            <td className="p-5 border border-green-200">{item.expaireDate}</td>
                                            <td className="p-5 border border-green-200">{item.criminal}</td>
                                            <td className="p-5 border border-green-200">{item.department}</td>
                                            <td className="p-5 border border-green-200">{item.month}</td>
                                            <td className="p-5 border border-green-200">{item.permission}</td>
                                            <td className="p-5 border border-green-200">{item.hear}</td>
                                            <td className="p-5 border border-green-200">{item.agree ? "True" : "False"}</td>
                                            <td className="p-5 border border-green-200"><p className="overflow-y-scroll max-h-[120px]">{item.message}</p></td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>




                    </div>

                </div>
            </Container>


        </main>
    )
}




export async function getServerSideProps() {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BACKEND_URL}`);


        if (!res.ok) {
            throw new error();
        }

        const data = await res.json();


        return {
            props: { data: data }, // will be passed to the page component as props
        }

    } catch (error) {
        // Handle the error
        console.error("An error occurred:", error);

        // You can return an error page or an error message here if needed
        return {
            props: { error: "An error occurred while fetching data" },
        };
    }
}