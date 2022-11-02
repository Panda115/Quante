import React from 'react'
import { Row, Col, Nav } from 'react-bootstrap';
// import { useLocation } from "react-router-dom";
// import Swaps from '../components/swap/Swaps';
import Choose from '../components/swap/choose';
// import Send from '../components/swap/send';
// import Receive from '../components/swap/receive';


export default function Swap(props) {
  function SwapTab() {
    if (props.tab === 'choose') {
      // const queryParams = new URLSearchParams(useLocation().search);
      // console.log('res = ', queryParams.get("coin_send"));
      // console.log('res = ', queryParams.get("coin_receive"));
      // console.log('res = ', queryParams.get("amount_send"));
      // return <Swaps prm={props} />;
      return <Choose />;
    }
    // if (props.tab === 'choose') {
    //   return <Choose />;
    // } else if (props.tab === 'send') {
    //   return <Send />;
    // } else if (props.tab === 'receive') {
    //   return <Receive />;
    // }
  }

  return (
    <>
      <div className="swap mtb15">
        <div className="container-fluid">
          <Row>
            <Col lg={2} className="mb-3">
              <Nav variant="pills" className="swap-nav">
                <Nav.Item>
                  <Nav.Link active={props.tab === 'choose'}>Choose</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link active={props.tab === 'send'}>Send</Nav.Link>
                </Nav.Item> */}
                {/* <Nav.Item>
                  <Nav.Link active={props.tab === 'receive'}>Receive</Nav.Link>
                </Nav.Item> */}
              </Nav>
            </Col>
            <Col lg={10}>
              <SwapTab />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
