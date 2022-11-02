import { Row, Col, Container, Badge } from 'react-bootstrap';

// components
import PricingCards1 from '../pricing/PricingCards1';

// types
import { PlanItem } from '../pricing/pricing';

type PricingProps = {
    plans: PlanItem[];
};

const Pricing = ({ plans }: PricingProps) => {
    return (
        <section className="section py-6 py-sm-8 bg-gradient3 position-relative">
            <div className="divider top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill className="badge-soft-primary px-2 py-1">
                            Plans
                        </Badge>
                        <h1 className="display-5 fw-medium">Pricing Plans</h1>
                        <p className="text-muted mx-auto">
                            Pricing that <span className="text-primary fw-bold">works</span> for everyone
                        </p>
                    </Col>
                </Row>
                <PricingCards1 plans={plans} hasAnimation containerClass="align-items-center mt-0 mt-sm-5" />
            </Container>
        </section>
    );
};

export default Pricing;
