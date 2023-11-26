import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import aver from "../../assets/images/aver.webp"

function Slider() {
    return (
        <div>
            <Swiper
            style={{marginLeft:"20px"}}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide><img src={aver} alt="" width={"100%"} height={610}/></SwiperSlide>
                <SwiperSlide><img src={aver} alt="" width={"100%"} height={610}/></SwiperSlide>
                <SwiperSlide><img src={aver} alt="" width={"100%"} height={610}/></SwiperSlide>
                <SwiperSlide><img src={aver} alt="" width={"100%"} height={610}/></SwiperSlide>
            </Swiper></div>
    )
}

export default Slider