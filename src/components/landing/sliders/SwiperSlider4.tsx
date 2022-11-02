import FeatherIcon from 'feather-icons-react';
import { Card } from 'react-bootstrap';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// dummy data
import { Slide } from './slider';

type SwiperSliderProps = {
    slides: Slide[];
};

const SwiperSlider4 = ({ slides }: SwiperSliderProps) => {
    const swiperConfig = {
        loop: true,
        spaceBetween: 24,
        autoplay: { delay: 5000 },
        breakpoints: {
            '768': { slidesPerView: 1 },
            '1024': { slidesPerView: 2 },
        },
        roundLengths: true,
        navigation: { nextEl: '.swiper-custom-next', prevEl: '.swiper-custom-prev' },
    };

    return (
        <Swiper modules={[Pagination, Navigation, Autoplay]} {...swiperConfig}>
            {(slides || []).map((slide, index) => {
                return (
                    <SwiperSlide key={index.toString()}>
                        <Card className="mb-0">
                            <Card.Body className="p-md-5">
                                <p className="fw-normal mb-4 mt-0">{slide.statement}</p>
                                <div className="d-flex text-align-start">
                                    <img
                                        className="me-2 rounded-circle"
                                        src={slide.customer.avatar}
                                        alt=""
                                        height="36"
                                    />
                                    <div className="flex-grow-1">
                                        <h6 className="m-0">{slide.customer.name}</h6>
                                        <p className="my-0 text-muted fs-13">{slide.customer.designation}</p>
                                    </div>
                                    <div className="align-self-center">
                                        <FeatherIcon
                                            icon="star"
                                            className="icon icon-xxs icon-fill-warning text-warning"
                                        ></FeatherIcon>
                                        <FeatherIcon
                                            icon="star"
                                            className="icon icon-xxs icon-fill-warning text-warning"
                                        ></FeatherIcon>
                                        <FeatherIcon
                                            icon="star"
                                            className="icon icon-xxs icon-fill-warning text-warning"
                                        ></FeatherIcon>
                                        <FeatherIcon
                                            icon="star"
                                            className="icon icon-xxs icon-fill-warning text-warning"
                                        ></FeatherIcon>
                                        <FeatherIcon
                                            icon="star"
                                            className="icon icon-xxs icon-fill-warning text-warning"
                                        ></FeatherIcon>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default SwiperSlider4;
