import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Slider.css'
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper";

const urls = [
    'https://media.istockphoto.com/photos/air-heat-pumps-beside-house-picture-id1328873462?s=612x612',
    'https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    'https://media.istockphoto.com/photos/outer-space-fantasy-picture-id1357410492?s=612x612'
]

export const Slider = () => {
    return (
        <div className='slider-product'>
            <Swiper modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={50}
                navigation={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false
                }}
                centeredSlides={true}
                pagination={{ clickable: true, dynamicBullets: true }}
                scrollbar={{ draggable: true }}
                slidesPerView={1}
                onSlideChange={() => {}}
                onSwiper={(swiper) => {}}
            >
                {
                    urls.map((element) => {
                        return (
                            <SwiperSlide>
                                <div className='center-slide'>
                                    <img className='slider-img' src={element} alt="" />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div >
    )
}
