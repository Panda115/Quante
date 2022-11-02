import { Col, Container, Row } from 'react-bootstrap';
import FAQs from './FAQs';
import HelpLinks from './HelpLinks';
import Hero from './Hero';
import SupportCenter from './SupportCenter';
// dummy data
import { helpLinks } from './data';
const HelpDesk = () => {
    return (
        <>
            <Hero/>
            <section className="section pb-7 mb-5 mb-sm-0 py-5 py-lg-8 position-relative">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <HelpLinks helpLinks={helpLinks} />
                            <FAQs />
                        </Col>
                        <Col lg={4}>
                            <SupportCenter />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HelpDesk;
