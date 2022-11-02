import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

// types
import { HelpLink } from './_helpLinks';

type HelpLinksProps = {
    helpLinks: HelpLink[];
};

const HelpLinks = ({ helpLinks }: HelpLinksProps) => {
    return (
        <Row>
            {(helpLinks || []).map((item, index) => {
                return (
                    <Col key={index.toString()} md={4}>
                        <div className="mb-5 mb-lg-0">
                            <span className="icon icon-sm text-primary">
                                <FeatherIcon icon={item.icon} className="icon-dual-primary" />
                            </span>
                            <h4 className="mt-4 fw-semibold mb-0">{item.title}</h4>
                            <ul className="list-unstyled text-muted mb-4">
                                {(item.links || []).map((item, index) => {
                                    return (
                                        <li key={index.toString()} className="my-3">
                                            <Link to="#" className="text-muted">
                                                {item}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                            <Link to="#" className="text-primary fw-medium">
                                View More <FeatherIcon className="icon-xs ms-1" icon="chevron-right" />
                            </Link>
                        </div>
                    </Col>
                );
            })}
        </Row>
    );
};

export default HelpLinks;
