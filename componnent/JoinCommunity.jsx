import Image from "next/image";
import Button from "../componnent/Button";
import Container from "../componnent/Container";
import joinCommunity from "../public/joinCommunity.webp";

export default function () {
    return (
        <div className={`joinCommunity relative overflow-x-hidden overflow-y-hidden`}>
            <div className="w-screen absolute h-full -z-20">
                <Image className="w-full h-full" src={joinCommunity} alt="image-bg" objectFit="cover" layout="fill" />
            </div>
            <div className="join_gredent absolute w-screen h-full -z-10" />


            <div className="z-10">
                <Container>
                    <div className="w-full md:w-2/4 flex flex-col justify-center text-center md:text-left pt-32 md:pt-20">
                        <h1 className="text-gray-100 text-4xl font-bold">Join our community of talented professionals by applying for a job today!</h1>
                        <p className="text-xl text-gray-300 py-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <div className="mt-8">
                            <Button link={"/"} text="Join Community" />
                        </div>
                    </div>
                    <div className="bg-white shadow-xl px-12 py-6 mt-20 h-fit md:h-48 rounded-xl flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:border-r-2 md:border-gray-300 h-full w-full flex items-center justify-center">
                            <div>
                                <span className="text-5xl font-normal text-gray-700">5003k+</span>
                                <p className="text-xl text-gray-500 pt-4">Member Active</p>
                            </div>
                        </div>
                        <div className="text-center md:border-r-2 md:border-gray-300 h-full w-full flex items-center justify-center">
                            <div>
                                <span className="text-5xl font-normal text-gray-700">14k+</span>
                                <p className="text-xl text-gray-500 pt-4">Companies</p>
                            </div>
                        </div>
                        <div className="text-center md:border-r-2 md:border-gray-300 h-full w-full flex items-center justify-center">
                            <div>
                                <span className="text-5xl font-normal text-gray-700">270+</span>
                                <p className="text-xl text-gray-500 pt-4">Expert Trainers</p>
                            </div>
                        </div>
                        <div className="text-center h-full w-full flex items-center justify-center">
                            <div>
                                <span className="text-5xl font-normal text-gray-700">15+</span>
                                <p className="text-xl text-gray-500 pt-4">Years of Experience</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}