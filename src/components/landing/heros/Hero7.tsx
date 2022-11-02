import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typist from 'react-text-typist';

// components
import { FormInput } from '../form';

// images
import crypto from '../../../assets/images/hero/crypto.jpg';

const Hero7 = () => {
    return (
        <section className="position-relative overflow-hidden hero-7 py-5">
            <Container>
                <Row className="align-items-center text-center text-sm-start">
                    <Col lg={6}>
                        <div>
                            <h1 className="mt-3 mb-4 pb-2 hero-title">
                                The <span className="highlight highlight-success d-inline-block">Fastest</span> & Secure
                                way to Buy, Sell and Trade{' '}
                                <Typist
                                    sentences={['Cryptocurrency']}
                                    typingSpeed={100}
                                    deletingSpeed={60}
                                    cursorSmooth
                                />
                            </h1>
                            <p className="fs-16 text-muted">
                                A seamless, flexible and diverse platform to buy, sell and manage your cryptocurrency
                                portfolio
                            </p>

                            <div className="py-5">
                                <Row className="g-2 text-start">
                                    <Col sm="auto">
                                        <FormInput
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter Your Email"
                                            name={'email'}
                                        />
                                    </Col>
                                    <Col sm="auto">
                                        <Button className="mt-1 mt-sm-0">Get Started</Button>
                                    </Col>
                                </Row>
                                <p className="text-muted mb-0 pt-2 fs-14">
                                    Already using Prompt? <Link to="/">Log In</Link>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ offset: 1, span: 5 }} className="hero-right">
                        <div className="img-container">
                            <img src={crypto} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero7;
