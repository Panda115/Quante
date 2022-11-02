import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChatUs from './ChatUs';
import ContactUs from './ContactUs';
import SmsUs from './SmsUs';
const Body = () => {
    const [opt,setOpt]=useState<number>(1);
    return (
        <section className="contact-body hero-4 pb-7 pt-4 py-sm-5">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={9}>
                        <h2>Contact us</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center pb-5">
                    <Col lg={9}>
                        <Row className="card-flex d-flex justify-content-between">
                            <Col lg={4}>
                                <div className={'card bg-gradient2'+(opt===1?' active':'')} onClick={()=>setOpt(1)}>
                                    <div className='header'>
                                        <span>Email</span>
                                        <input type="radio" name="radio" checked={opt===1}/>
                                    </div>
                                    <span className='body'>Via email and Support Center<br/>We will get back to you within 24 hours</span>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={'card bg-gradient2'+(opt===2?' active':'')} onClick={()=>setOpt(2)}>
                                    <div className='header'>
                                        <span>Chat</span>
                                        <input type="radio" name="radio" checked={opt===2}/>
                                    </div>
                                    <span className='body'>Chat online with a representative</span>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={'card bg-gradient2'+(opt===3?' active':'')} onClick={()=>setOpt(3)}>
                                    <div className='header'>
                                        <span>Phone</span>
                                        <input type="radio" name="radio" checked={opt===3}/>
                                    </div>
                                    <span className='body'>We call you back at your number</span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={9}>
                        <div className='request'>
                            <div className='header'>
                                <span>Submit a request</span>
                            </div>
                            <div className='desc'>
                                <span>Please select your issue below</span>
                            </div>
                            <div className='body'>
                                <select>
                                    <option>-</option>
                                </select>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {opt===1?(
                <ContactUs />
            ):(opt===2?(
                <ChatUs />
            ):(
                <SmsUs />
            ))}
        </section>        
    );
};

export default Body;
