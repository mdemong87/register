import Image from "next/image";
import Button from "../componnent/Button";
import jobsLogo from "../public/jobsLogo.webp";

export default function SingleJobsCard() {
    return (
        <div className="w-full h-fit p-7 rounded-lg shadow-lg bg-gray-100">
            <div className="h-full w-full">
                <div className="border-b-2 border-gray-200 pb-2 w-full flex gap-4 items-center">
                    <div className="w-20">
                        <Image src={jobsLogo} alt="jobs-logo" width={500} height={500} />
                    </div>
                    <div className="w-full">
                        <h3 className="text-xl font-semibold text-gray-600">Treva Agency</h3>
                        <p className="text-gray-400">Bandung, Indonesia</p>
                    </div>
                </div>
                <div className="pt-2">
                    <h2 className="text-gray-800 text-2xl py-4">IT Support Associate</h2>
                    <p className="text-md text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="flex justify-between items-center mt-10">
                    <div>
                        <p>Full Time</p>
                        <p>$20 - $25</p>
                    </div>
                    <div>
                        <Button link={'/apply'} text="Apply Now" />
                    </div>
                </div>
            </div>
        </div>
    )
}