import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import React from "react";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Home.css";
import Header from "../Header/Header";




SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Home = () => {
    return (



        <container className="Swiper">
            <div className="homeheader">
                <Header />
            </div>


            <Swiper

                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={0}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,

                }}
                pagination={true}

                navigation
            >

                <div className="Images">
                    <SwiperSlide>
                        <img src="./Scroll1.png" alt="Scroll1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./Scroll3.png" alt="Scroll3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./Scroll1.png" alt="Scroll1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./Scroll3.png" alt="Scroll3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./Scroll1.png" alt="Scroll1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./Scroll3.png" alt="Scroll3" />
                    </SwiperSlide>

                </div>

            </Swiper>
            <div>
                <div className="successstories">
                    We have some Success Stories for you...
                </div>
                <div className="ss">
                    <div className="successstories1" >
                        <img src="./ss1.jpg"></img>
                        Prachi is a student who is about to graduate this year in December with majors in Psychology and Sociology
                    </div>
                    <div className="successstories2" >
                        <img src="./ss2.jpg"></img>
                        Stewart: “As a teacher, I always evaluated my success by the growth I saw in my students. This application not.
                    </div>
                </div>
            </div>
        </container>

    );
};

export default Home;