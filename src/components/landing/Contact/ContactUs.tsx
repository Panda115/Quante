import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FeatherIcon from 'feather-icons-react';

// components
import { FormInput } from '../form';

const ContactUs = () => {
    // form validation schema
    const schemaResolver = yupResolver(
        yup.object().shape({
            fname: yup.string().required('Please enter first name'),
            lname: yup.string().required('Please enter last name'),
            email: yup.string().required('Please enter Email').email('Please enter valid Email'),
            message: yup.string().required('Please enter Message'),
        })
    );

    // form method
    const methods = useForm({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    // handle form submission
    const onSubmit = () => {};

    return (
        <section className="section pb-lg-7 py-4 position-relative">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={9}>
                        <Card className="shadow-none">
                            <Card.Body className="p-0">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col md={6}>
                                            <FormInput
                                                type="text"
                                                name="fname"
                                                label="First Name"
                                                placeholder="Your First Name"
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col md={6}>
                                            <FormInput
                                                type="text"
                                                name="lname"
                                                label="Last Name"
                                                placeholder="Your Last Name"
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col lg={12}>
                                            <FormInput
                                                type="email"
                                                name="email"
                                                label="Email Name"
                                                placeholder="Your Email"
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col lg={12}>
                                            <FormInput
                                                type="textarea"
                                                name="message"
                                                label="Message"
                                                placeholder="Type Your message..."
                                                rows={5}
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col lg="auto" className="mb-0">
                                            <Button type="submit">
                                                Send
                                                <span className="icon icon-xs text-white ms-1">
                                                    <FeatherIcon icon="send" />
                                                </span>
                                            </Button>
                                        </Col>
                                    </Row>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactUs;
