import React, { useState } from "react";
import { Accordion, Card, Container, Row, Col } from "react-bootstrap";

const FAQs = [
  {
    id: "0",
    topic: "General Inquries",
    faqs: [
      {
        id: "0",
        question: "What is Quantex?",
        answer: "Quantex (formerly Cryptiswap) is a global crypto exchange featuring an instant swap platform & an advanced trading platform.",
      },
      {
        id: "1",
        question: "Is Quantex or Quantex Coin (QTX) listed on CoinMarketCap?",
        answer: "The listing application for Quantex Coin (QTX) has been submitted to CoinMarketCap on the 02/16/2022. After this is accepted, Quantex Exchange will apply for a listing as a Spot Exchange on CoinMarketCap.",
      },
    ],
  },
  {
    id: "1",
    topic: "Feature Inquries",
    faqs: [
      {
        id: "0",
        question: "What are the features quantex provide?",
        answer: "Quantex provide many features",
      },
      {
        id: "1",
        question: "What best feature quantex have?",
        answer: "All of our features are best",
      },
    ],
  },
  {
    id: "2",
    topic: "Privacy Inquries",
    faqs: [
      {
        id: "0",
        question: "What privacy policy you have?",
        answer: "You can check that in our privacy policy page",
      },
      {
        id: "1",
        question: "Is quantex keep our data safe",
        answer: "Yes, we kept your data completely safe",
      },
      {
        id: "2",
        question: "What kind of safety measures you are following",
        answer: "We are following all kind of safety measures",
      },
    ],
  },
];

const FAQ = () => {
  const [topics, setTopics] = useState([
    { id: "0", label: "General Inquries", icon: "ion-md-contacts" },
    { id: "1", label: "Feature Inquries", icon: "ion-md-flag" },
    { id: "2", label: "Privacy Inquries", icon: "ion-md-lock" },
  ]);
  const [selectedTopic, setSelectedTopic] = useState("0");
  const [isOpen, setIsOpen] = useState("0");
  return (
    <Container>
      <h1 className="mt-4 text-center d-flex align-items-center justify-content-center">
        {" "}
        <i
          className="icon ion-md-chatbubbles text-primary mr-2"
          style={{ fontSize: 60 }}
        ></i>
        <span>Frequently Asked Question</span>
      </h1>
      <Row className="mt-4">
        <Col
          xs={12}
          md={12}
          className="d-flex align-items-center justify-content-center mb-4"
        >
          {topics.map((topic) => (
            <div
              key={topic.id}
              className={`text-center faq-topics border ${
                topic.id === selectedTopic ? "faq-topics-selected" : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedTopic(topic.id)}
            >
              <i class={`icon ${topic.icon}`}></i>
              <h4>{topic.label}</h4>
            </div>
          ))}
        </Col>
        <Col xs={12} md={12}>
          <Accordion defaultActiveKey="0">
            {FAQs[selectedTopic].faqs.map((faq) => (
              <Card key={faq.id}>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey={faq.id}
                  style={{ cursor: "pointer" }}
                  className="w-100 d-flex justify-content-between text-primary"
                  onClick={() => {
                    if (isOpen === faq.id) {
                      setIsOpen(null);
                    } else {
                      setIsOpen(faq.id);
                    }
                  }}
                >
                  <h4>{faq.question}</h4>
                  {isOpen === faq.id ? (
                    <i
                      className="icon ion-md-remove-circle-outline"
                      style={{ fontSize: 24 }}
                    ></i>
                  ) : (
                    <i
                      className="icon ion-md-add-circle-outline"
                      style={{ fontSize: 24 }}
                    ></i>
                  )}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={faq.id}>
                  <Card.Body>
                    <h5>{faq.answer}</h5>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
