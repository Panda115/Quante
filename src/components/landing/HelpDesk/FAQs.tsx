import { Col, Row } from 'react-bootstrap';

// components
import FAQContent from './FAQContent';

const FAQs = () => {
    return (
        <>
            <h4 className="mt-7 fw-semibold mb-0">Frequently Asked Questions</h4>
            <p className="text-muted mx-auto">Here are some of the basic types of questions for our customers</p>
            <Row className="mt-3">
                <Col lg={10}>
                    <div className="mt-3 mb-lg-0 mb-4">
                        <FAQContent />
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default FAQs;
