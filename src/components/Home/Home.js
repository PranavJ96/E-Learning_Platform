import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import React from "react";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Home.css";


SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Home = () => {
    return (


        <
        container className = "Swiper" >
        <
        div >
        <
        div className = "title" >
        E - Shikshan <
        /div> <
        div className = "tagline" > Begin your learning from here < /div>

        <
        /div> <
        Swiper

        effect = { "coverflow" }
        grabCursor = { true }
        centeredSlides = { true }
        slidesPerView = { "auto" }
        spaceBetween = { 0 }
        coverflowEffect = {
            {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,

            }
        }
        pagination = { true }

        navigation >

        <
        div className = "Images" >
        <
        SwiperSlide >
        <
        img src = "./Scroll1.png"
        alt = "Scroll1" / >
        <
        /SwiperSlide> <
        SwiperSlide >
        <
        img src = "./Scroll3.png"
        alt = "Scroll3" / >
        <
        /SwiperSlide> <
        SwiperSlide >
        <
        img src = "./Scroll1.png"
        alt = "Scroll1" / >
        <
        /SwiperSlide> <
        SwiperSlide >
        <
        img src = "./Scroll3.png"
        alt = "Scroll3" / >
        <
        /SwiperSlide> <
        SwiperSlide >
        <
        img src = "./Scroll1.png"
        alt = "Scroll1" / >
        <
        /SwiperSlide> <
        SwiperSlide >
        <
        img src = "./Scroll3.png"
        alt = "Scroll3" / >
        <
        /SwiperSlide>

        <
        /div>

        <
        /Swiper> < /
        container >
    );
};

export default Home;