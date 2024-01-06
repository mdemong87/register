import Image from "next/image";
import Button from "../componnent/Button";


export default function SingleBanner({ bg }) {
    return (
        <div className={`h-screen relative`}>

            <div className="w-screen absolute h-full -z-20">
                <Image className="w-screen h-full" src={bg} alt="image-bg" objectFit="cover" layout="fill" />
            </div>
            <div className="hero_gredent absolute w-screen h-full -z-10" />

            <div className="absolute flex h-screen w-screen items-center justify-center">
                <div className="w-2/4">
                    <h1 className="text-white text-5xl text-center font-light">
                        Looking for a career change?<br /> Browse our job listings now!
                    </h1>
                    <p className="py-8 text-gray-300 text-center">Mus vehicula dignissim quis si lorem libero cras pulvinar orci dapibus. Sagittis quisque orci pretium donec elit platea porta integer maecenas risus lobortis.</p>

                    <div className="flex justify-center">
                        <Button link={"/catering"} text="Discover Jobs" />
                    </div>
                </div>
            </div>
        </div>
    )
}