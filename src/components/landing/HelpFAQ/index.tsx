import { Col, Container, Row } from 'react-bootstrap';
import FAQs from './FAQs';
import Hero from './Hero';
const HelpFAQ = () => {
    return (
        <>
            <Hero/>
            <section className="section pb-7 mb-5 mb-sm-0 position-relative">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <FAQs />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HelpFAQ;
