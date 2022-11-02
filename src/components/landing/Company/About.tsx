import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <section className="position-relative pt-8 pb-4">
            <Container>
                <Row data-aos="fade-up">
                    <Col lg={4}>
                        <span className="border border-top w-25 border-soft-primary d-block"></span>
                        <h1 className="display-5 fw-semibold mt-4">About Us</h1>
                    </Col>
                    <Col lg={4}>
                        <p className="text-muted mb-4">
                            Temporibus autem quibusdam et aut as officiis debitis aut rerum necessitatibus saepe eveniet
                            voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a
                            sapiente delectus reiciendis.
                        </p>
                    </Col>
                    <Col lg={4}>
                        <p className="text-muted mb-4">
                            Temporibus autem quibusdam et aut as officiis debitis aut rerum necessitatibus saepe eveniet
                            ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur
                            a sapiente delectus reiciendis.
                        </p>
                    </Col>
                    <Col lg={{ span: 8, offset: 4 }}>
                        <p className="text-muted">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
