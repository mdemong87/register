import Image from "next/image";
import Button from "../componnent/Button";
import Container from "../componnent/Container";


export default function AboutFutured({ lSide, into, image, heading, dis, links, text }) {
    return (
        <div>
            <Container>
                <div className="flex flex-col md:flex-row items-center mb-20 justify-between gap-8 my-24">

                    {
                        lSide ? <div className="w-full h-72 mb-32">
                            <Image width={500} height={500} alt="About-Image" src={image} />
                        </div> : null
                    }


                    <div className="w-full h-fit mb-32">
                        <p className="pcolor">{into}</p>
                        <h1 className="text-3xl font-semibold text-gray-700 py-5">{heading}</h1>
                        <p className="pb-9 text-lg text-gray-400">{dis}</p>
                        <div className="mt-2">
                            <Button text={text} link={links} />
                        </div>
                    </div>

                    {
                        lSide ? null : <div className="w-full h-72 mb-32">
                            <Image width={500} height={500} alt="About-Image" src={image} />
                        </div>
                    }
                </div>
            </Container>
        </div>
    )
}