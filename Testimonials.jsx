import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./testimonials.css"

import {data} from './data'


import { EffectCoverflow, Pagination } from "swiper";








const Testimonials = () => {
  return (
    <section id="testimonials" className="main-testimonials-wrapper">
        <div className="main-testimonials-wrapper-sub">
        <Swiper 
        effect={"coverflow"} grabCursor={true} centeredSlides={true} slidesPerView={"auto"}
        coverflowEffect={{rotate:50,stretch:0,depth:100,modifier:6,slideShadows:false,}}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="main-testimonials-swiper">
            {data.map((item,key)=>(
                <SwiperSlide className="main-testimonials-swiper-slide">
                <img src={item.image} alt={item.name}/>
                <h3>{item.name}</h3>
                <p id="name">{item.positon}</p>
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
    </section>
  )
}

export default Testimonials;
