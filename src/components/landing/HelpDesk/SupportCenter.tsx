import { Card } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

const SupportCenter = () => {
    return (
        <Card className="rounded border sticky-el">
            <Card.Body className="px-5 py-4">
                <h4 className="fw-medium">
                    <FeatherIcon className="icon icon-sm text-muted me-3" icon="life-buoy" />
                    Support center
                </h4>
                <h5 className="text-muted fw-normal mb-4 pb-3">
                    <span className="fw-medium">Can't find the answer?</span> We are here to help you all the time.
                </h5>
                <h5 className="fw-normal">
                    <Link to="/pages/contact" className="text-muted">
                        <FeatherIcon className="icon-xs me-2" icon="message-square" />
                        Talk to Support Team
                    </Link>
                </h5>
                <h5 className="fw-normal mt-3">
                    <Link to="#" className="text-muted">
                        <FeatherIcon className="icon-xs me-2" icon="mail" />
                        help@coderthemes.com
                    </Link>
                </h5>
                <h5 className="fw-normal mt-3">
                    <Link to="#" className="text-muted">
                        <FeatherIcon className="icon-xs me-2" icon="twitter" />
                        @coderthemes
                    </Link>
                </h5>
            </Card.Body>
        </Card>
    );
};

export default SupportCenter;
