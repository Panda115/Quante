import { Card } from 'react-bootstrap';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// dummy data
import { Slide } from './slider';

type SwiperSliderProps = {
    slides: Slide[];
    hasLogo?: boolean;
};

const SwiperSlider2 = ({ slides, hasLogo }: SwiperSliderProps) => {
    const swiperConfig = {
        loop: true,
        spaceBetween: 24,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
        },
        roundLengths: true,
        slidesPerView: 1,
        navigation: { nextEl: '.swiper-custom-next', prevEl: '.swiper-custom-prev' },
    };

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Autoplay]}
            {...swiperConfig}
        >
            {(slides || []).map((slide, index) => {
                return (
                    <SwiperSlide key={index.toString()}>
                        <Card className="mb-0 border rounded">
                            <Card.Body className="testimonial-body shadow">
                                <p className="quotation-mark text-muted mb-0">“</p>
                                <h4 className="fw-normal mb-3 mt-0">{slide.statement}</h4>
                                <hr />
                                <div className="d-flex pt-2 align-items-center">
                                    <img
                                        src={slide.customer.avatar}
                                        alt="avtar"
                                        className="me-2 rounded-circle"
                                        height="36"
                                    />
                                    <div className="flex-grow-1">
                                        <h6 className="m-0">{slide.customer.name}</h6>
                                        <p className="my-0 text-muted fs-13">{slide.customer.designation}</p>
                                    </div>
                                    {hasLogo && <img src={slide.logo} alt="logo" height="32" />}
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default SwiperSlider2;
