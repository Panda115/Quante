import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import amazon from '../../../assets/images/brands/amazon.svg';
import google from '../../../assets/images/brands/google.svg';
import paypal from '../../../assets/images/brands/paypal.svg';
import spotify from '../../../assets/images/brands/spotify.svg';
import shopify from '../../../assets/images/brands/shopify.svg';

const brands = [amazon, google, paypal, spotify, shopify];

const ClientsReview = () => {
    return (
        <section className="pt-8 pt-sm-10 pb-lg-5 pb-4">
            <Container>
                <Row>
                    <Col lg={8}>
                        <h4 className="fw-medium pb-3 mt-0">Join 10,000+ other companies who are using Prompt</h4>
                        <ul className="list-inline mt-3 mb-4 mb-lg-0">
                            {(brands || []).map((image, index) => {
                                return (
                                    <li className="list-inline-item me-4 mb-2" key={index.toString()}>
                                        <img src={image} alt="brand" height="32" />
                                    </li>
                                );
                            })}
                        </ul>
                    </Col>
                    <Col lg={4} className="text-lg-end">
                        <h4 className="fw-normal pb-3 mt-0">
                            Score 9.5 out of 10 on
                            <img
                                src="data:image/svg+xml;charset=utf-8,%3Csvg width='48' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.35 0c-.21 0-.39.13-.47.32L9.75 6h5.94c.2 0 .39.08.53.22l3.56 3.56c.14.14.22.33.22.53v16.4c0 .22-.27.33-.43.18l-3.35-3.35A.79.79 0 0116 23V10H8.25l-8 21.32c-.12.33.12.68.47.68h34.93c.21 0 .39-.13.47-.32l.97-2.58L26 18l2.43-2.43c.05-.05.11-.07.18-.07H32V10h-6v13c0 .2-.08.39-.22.53l-3.35 3.35c-.16.16-.43.05-.43-.17v-16.4c0-.2.08-.39.22-.53l3.56-3.56a.75.75 0 01.53-.22h5.38c.2 0 .39.08.53.22l3.56 3.56c.14.14.22.33.22.53v4.88c0 .2-.08.39-.22.53l-3.53 3.53 6.2 6.2L47.74.67a.49.49 0 00-.46-.67H12.35z' fill='%23116BF2'/%3E%3C/svg%3E"
                                alt=""
                                className="img-fluid d-inline-block"
                            />
                        </h4>
                        <ul className="list-inline">
                            <li className="list-inline-item bg-success rounded p-2 me-1">
                                <FeatherIcon icon="star" className="text-white" />
                            </li>
                            <li className="list-inline-item bg-success rounded p-2 me-1">
                                <FeatherIcon icon="star" className="text-white" />
                            </li>
                            <li className="list-inline-item bg-success rounded p-2 me-1">
                                <FeatherIcon icon="star" className="text-white" />
                            </li>
                            <li className="list-inline-item bg-success rounded p-2 me-1">
                                <FeatherIcon icon="star" className="text-white" />
                            </li>
                            <li className="list-inline-item bg-success rounded p-2">
                                <FeatherIcon icon="star" className="text-white" />
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ClientsReview;
