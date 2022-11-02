import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap'

// components
import { FormInput } from '../form';

// images
import coworking from '../../../assets/images/hero/coworking1.jpg';

const Hero6 = () => {
    return (
        <section className="position-relative hero-6 px-2 px-sm-0 pt-2 pb-2 pb-sm-5 pt-sm-7">
            <div className="shapes">
                <div className="shape1"></div>
                <div className="shape2"></div>
            </div>
            <Container>
                <Row className='align-items-center text-center text-sm-start'>
                    <Col lg={5}>
                        <h1 className="mt-3 mb-4 pb-2 hero-title">Discover the true power of <span className="highlight highlight-orange d-inline-block">Learning</span>.</h1>
                        <p className="fs-18 text-muted hero-sub-title">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores.</p>
                        <div className="pt-4">
                            <Row className="g-2 text-start">
                                <Col md={4} lg={6}>
                                    <FormInput
                                        type="email"
                                        className="mb-2 me-sm-2 shadow-sm"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                    />
                                </Col>
                                <Col sm={3}>
                                    <Button className="mb-2 text-nowrap">Get Started</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }} className="text-end">
                        <div className="video-container">
                            <div className="video-item">
                                <div className="video-overlay d-flex align-items-center justify-content-center">
                                    <Link to="#" className="btn-play orange"></Link>
                                </div>
                                <img src={coworking} alt="" className="img-fluid shadow" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero6