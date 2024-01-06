import { FaMagento } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { TbUsersGroup } from "react-icons/tb";
import Container from "../componnent/Container";
import Futured from "./Futurede";


export default function FuturedWrper() {
    return (
        <div>
            <Container>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">

                    <Futured icons={<FaMagento className="text-5xl text-gray-700" />} heading={'Talents Agency'} dis={"Facilisi etiam consectetur mi nibh bibendum posuere ultricies cubilia donec potenti si"} bg={false} />

                    <Futured icons={<IoMdBook className="text-5xl text-gray-200" />} heading={'Portal Job'} dis={"Facilisi etiam consectetur mi nibh bibendum posuere ultricies cubilia donec potenti si"} bg={true} />

                    <Futured icons={<TbUsersGroup className="text-5xl text-gray-700" />} heading={'Careers Coaching'} dis={"Facilisi etiam consectetur mi nibh bibendum posuere ultricies cubilia donec potenti si"} bg={false} />
                </div>
            </Container>
        </div>
    )
}