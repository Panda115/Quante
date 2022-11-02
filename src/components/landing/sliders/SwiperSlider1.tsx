// slider
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// types
import { Slide1 } from './slider';

interface SwiperSliderProps {
    slides: Slide1[];
}

const SwiperSlider1 = ({ slides }: SwiperSliderProps) => {
    const swiperConfig = {
        breakpoints: {
            576: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 1,
            },
        },
        pagination: { dynamicBullets: true },
        roundLengths: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
        },
    };

    return (
        <Swiper
            // install Swiper modules
            modules={[Pagination, Autoplay]}
            {...swiperConfig}
        >
            {(slides || []).map((slide, index) => {
                return (
                    <SwiperSlide key={index.toString()}>
                        <div className="row text-center">
                            <div className="col">
                                <img src={slide.image} alt="" className="w-75" />
                            </div>
                        </div>
                        <div className="row text-center my-4 pb-5">
                            <div className="col">
                                <h5 className="fw-medium fs-16">{slide.slideTitle}</h5>
                                <p className="text-muted">{slide.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default SwiperSlider1;
