import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContext, Card, useAccordionButton } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

type CustomToggleProps = {
    children: React.ReactNode;
    eventKey: string;
    containerClass: string;
    linkClass: string;
    callback?: (eventKey: string) => void;
};

const CustomToggle = ({ children, eventKey, containerClass, linkClass, callback }: CustomToggleProps) => {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <Link
            to="#"
            className={classNames(linkClass, {
                collapsed: !isCurrentEventKey,
            })}
            onClick={decoratedOnClick}
        >
            <Card.Header>
                <h5 className={containerClass}>
                    {children} <FeatherIcon icon="chevron-down" className="icon-xs accordion-arrow" />
                </h5>
            </Card.Header>
        </Link>
    );
};

const FAQContent = () => {
    const faqs = [
        {
            question: 'Can I use this template for my client?',
            ans: ' Yup, the marketplace license allows you to use this theme in any end products.For more information on licenses, please refere license terms on marketplace.',
        },
        {
            question: 'Can this theme work with WordPress?',
            ans: "No. This is a HTML template. It won't directly with WordPress, though you can convert this into WordPress compatible theme.",
        },
        {
            question: 'How do I get help with the theme?',
            ans: 'Use our dedicated support email (support@coderthemes.com) to send your issues or feedback.We are here to help anytime.',
        },
        {
            question: 'Will you regularly give updates of Prompt ?',
            ans: 'Yes, We will update the Prompt regularly. All the future updates would be available without any cost.',
        },
    ];

    return (
        <div id="faqContent">
            <Accordion defaultActiveKey="0" className="custom-accordionwitharrow" id="accordionExample">
                {(faqs || []).map((item, index) => {
                    return (
                        <Card className="mb-2 border rounded-sm" key={index.toString()}>
                            <CustomToggle
                                eventKey={String(index)}
                                containerClass="my-1 fw-medium"
                                linkClass="text-dark"
                            >
                                {item.question}
                            </CustomToggle>
                            <Accordion.Collapse eventKey={String(index)}>
                                <Card.Body className="text-muted pt-1">{item.ans}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    );
                })}
            </Accordion>
        </div>
    );
};

export default FAQContent;
