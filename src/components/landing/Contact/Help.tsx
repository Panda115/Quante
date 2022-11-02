import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const Help = () => {
    return (
        <section className="hero-4 pb-7 pt-4 py-sm-5 bg-gradient2">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={9}>
                        <h3>How can we help?</h3>
                    </Col>
                    <Col lg={9} className="text-center">
                        <div>
                            <div className="form-control-with-hint">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="query"
                                    name="query"
                                    placeholder="Ask a question..."
                                />
                                <span className="form-control-feedback">
                                    <FeatherIcon className="icon-xs" icon="search" />
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Help;
