import heroBanner from "../public/banner.jpg";

// import Swiper core and required modules
import { A11y, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import SingleBanner from './SingleBanner';

export default function Banner() {
    return (
        <div className="h-screen">

            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    stopOnLastSlide: false,
                }}
                navigation
            >
                <SwiperSlide>
                    <SingleBanner bg={heroBanner} />
                </SwiperSlide>
                <SwiperSlide>
                    <SingleBanner bg={heroBanner} />
                </SwiperSlide>
                <SwiperSlide>
                    <SingleBanner bg={heroBanner} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}