import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

// types
import { PlanItem } from './pricing';

type PricingCardProps = {
    plans: Array<PlanItem>;
    containerClass?: string;
    hasAnimation?: boolean;
};

const PricingCards1 = ({ plans, containerClass, hasAnimation }: PricingCardProps) => {
    return (
        <Row className={containerClass}>
            {(plans || []).map((plan, index) => {
                return (
                    <Col lg={4} key={index.toString()}>
                        <Card
                            className="border position-relative hoverable overflow-hidden"
                            {...(hasAnimation && {
                                'data-aos': 'fade-up',
                                'data-aos-duration': (index + (7 + index)) * 100,
                            })}
                        >
                            <Card.Body className="text-center">
                                {plan.isPopular && (
                                    <span className="ribbon2 bg-primary text-white shadow">Popular</span>
                                )}

                                <h4 className="my-0 text-primary">{plan.name}</h4>
                                <h1 className="mb-0">
                                    <span className="fw-normal text-muted fs-13 align-top">$</span>
                                    <span className="fw-bolder display-5">{plan.price}</span>
                                    <span className="fw-normal text-muted fs-13 align-middle">{plan.duration}</span>
                                </h1>
                                <ul className="list-unstyled border-top py-4 mt-4 text-start">
                                    {plan.features.map((feature, index) => {
                                        return (
                                            <li className="py-2 d-flex align-items-center" key={index.toString()}>
                                                {feature && (
                                                    <>
                                                        <FeatherIcon
                                                            icon="check"
                                                            className="icon-xs text-success align-middle me-2"
                                                        />
                                                        {feature}
                                                    </>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                                <Link
                                    to="#"
                                    className={classNames(
                                        'btn',
                                        plan.isRecommended ? 'btn-primary' : 'btn-soft-primary',
                                        'd-block'
                                    )}
                                >
                                    Purchase Now
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
};

export default PricingCards1;
