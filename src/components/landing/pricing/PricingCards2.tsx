import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

type PlansItems = {
    id: number;
    name: string;
    price: string;
    duration: string;
    features: Array<string>;
    isRecommended: boolean;
};

type PricingCardProps = {
    plans: Array<PlansItems>;
};

const PricingCards2 = ({ plans }: PricingCardProps) => {
    return (
        <Row className="mt-5">
            {plans.map((plan, index) => {
                return (
                    <Col lg={4} key={index.toString()}>
                        <Card className="border hoverable">
                            {plan.isRecommended && (
                                <div className="card-img-top-overlay d-none d-lg-block">
                                    <span className="card-badge top-right bg-warning text-white shadow-sm">
                                        Recommended
                                    </span>
                                </div>
                            )}
                            <Card.Body>
                                <h4 className="my-0 text-primary">{plan.name}</h4>
                                <h1>
                                    <span className="fw-normal text-muted fs-13 align-top">$</span>
                                    <span className="fw-bolder display-5">{plan.price}</span>
                                    <span className="fw-normal text-muted fs-13 align-middle">{plan.duration}</span>
                                </h1>
                                <Link
                                    to="#"
                                    className={classNames(
                                        'btn',
                                        plan.isRecommended ? 'btn-primary' : 'btn-soft-success',
                                        'd-block'
                                    )}
                                >
                                    Purchase Now
                                </Link>
                                <ul className="list-unstyled border-top pt-4 mt-4 text-start">
                                    {plan.features.map((feature, index) => {
                                        return (
                                            <li className="py-2 d-flex align-items-center" key={index.toString()}>
                                                <FeatherIcon
                                                    icon="check"
                                                    className="icon-xs text-success align-middle me-2"
                                                />
                                                {feature}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
};

export default PricingCards2;
