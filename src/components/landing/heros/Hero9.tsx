import { Button, Col, Container, Row } from 'react-bootstrap';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

// images
import coworking from '../../../assets/images/coworking2.jpg';

const Hero9 = () => {
    return (
        <section className="position-relative hero-9">
            <div className="hero-top">
                <Container>
                    <Row className="py-7">
                        <Col>
                            <h1 className="hero-title fw-bold">
                                We are on a mission to{' '}
                                <span className="highlight highlight-info d-inline-block">revolutionize</span> the web
                            </h1>
                            <p className="mt-3 fs-17">
                                We are a full-stack web development studio, run by people who are very passionate about
                                making the web more beautiful
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="position-relative">
                <div className="hero-cta">
                    <Button variant="info" className="btn-cta">
                        Let's Have Talk
                    </Button>
                </div>
            </div>
            <div className="hero-bottom">
                <ParallaxProvider>
                    <ParallaxBanner
                        layers={[{ image: coworking, speed: -55, style: { backgroundSize: 'contain' } }]}
                        className="hero-image"
                    ></ParallaxBanner>
                </ParallaxProvider>
            </div>
        </section>
    );
};

export default Hero9;
