import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import { ThemeConsumer } from '../context/ThemeContext';

export default function wallet() {
  return (
    <>
      <div className="settings mtb15">
        <div className="container-fluid">
          <div className="wallet">
            <Row>
              <Col lg={4}>
                <Nav variant="pills" className="settings-nav">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="wallet_BTC"
                      className="d-flex justify-content-between align-items-center active"
                    >
                      <div className="d-flex">
                        <img src={'img/icon/btc.png'} alt="btc" />
                        <div>
                          <h2>BTC</h2>
                          <p>Bitcoin</p>
                        </div>
                      </div>
                      <div>
                        <h3>4.5484254</h3>
                        <p className="text-right">
                          <i className="icon ion-md-lock"></i>{' '}
                          0.0000000
                        </p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="wallet_ETH"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex">
                        <img src={'img/icon/eth.png'} alt="btc" />
                        <div>
                          <h2>ETH</h2>
                          <p>Ethereum</p>
                        </div>
                      </div>
                      <div>
                        <h3>13.454845</h3>
                        <p className="text-right">
                          <i className="icon ion-md-lock"></i>{' '}
                          0.0000000
                        </p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="wallet_BNB"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex">
                        <img src={'img/icon/bnb.png'} alt="btc" />
                        <div>
                          <h2>BNB</h2>
                          <p>Binance</p>
                        </div>
                      </div>
                      <div>
                        <h3>35.4842458</h3>
                        <p className="text-right">
                          <i className="icon ion-md-lock"></i>{' '}
                          0.0000000
                        </p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="wallet_TRX"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex">
                        <img src={'img/icon/trx.png'} alt="btc" />
                        <div>
                          <h2>TRX</h2>
                          <p>Tron</p>
                        </div>
                      </div>
                      <div>
                        <h3>4.458941</h3>
                        <p className="text-right">
                          <i className="icon ion-md-lock"></i>{' '}
                          0.0000000
                        </p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="wallet_EOS"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex">
                        <img src={'img/icon/eos.png'} alt="btc" />
                        <div>
                          <h2>EOS</h2>
                          <p>Eosio</p>
                        </div>
                      </div>
                      <div>
                        <h3>33.478951</h3>
                        <p className="text-right">
                          <i className="icon ion-md-lock"></i>{' '}
                          0.0000000
                        </p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="wallet_XMR"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex">
                        <img src={'img/icon/xmr.png'} alt="btc" />
                        <div>
                          <h2>XMR</h2>
                          <p>Monero</p>
                        </div>
                      </div>
                      <div>
                        <h3>99.465975</h3>
                        <p className="text-right">
                          <i className="icon ion-md-lock"></i>{' '}
                          0.0000000
                        </p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="wallet_KCS"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex">
                        <img src={'img/icon/kcs.png'} alt="btc" />
                        <div>
                          <h2>KCS</h2>
                          <p>Kstarcoin</p>
                        </div>
                      </div>
                      <div>
                        <h3>114.57564</h3>
                        <p className="text-right">
                          <i className="icon ion-md-lock"></i>{' '}
                          0.0000000
                        </p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col lg={8}>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="coinBTC"
                    role="tabpanel"
                  >
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Balances</h5>
                        <ul>
                          <li className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <i className="icon ion-md-cash"></i>
                              <h2>Total Equity</h2>
                            </div>
                            <div>
                              <h3>5.5894 BTC</h3>
                            </div>
                          </li>
                          <li className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <i className="icon ion-md-checkmark"></i>
                              <h2>Available Margin</h2>
                            </div>
                            <div>
                              <h3>2.480 BTC</h3>
                            </div>
                          </li>
                        </ul>
                        <button className="btn green">Deposit</button>
                        <button className="btn red">Withdraw</button>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">
                          Wallet Deposit Address
                        </h5>
                        <div className="row wallet-address">
                          <div className="col-md-8">
                            <p>
                              Deposits to this address are unlimited.
                              Note that you may not be able to
                              withdraw all of your funds at once if
                              you deposit more than your daily
                              withdrawal limit.
                            </p>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                value="Ad87deD4gEe8dG57Ede4eEg5dREs4d5e8f4e"
                              />
                              <div className="input-group-prepend">
                                <button className="btn btn-primary">
                                  COPY
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <ThemeConsumer>
                              {({ data }) => {
                                return data.theme === 'light' ? (
                                  <img
                                    src={'img/qr-code-dark.svg'}
                                    alt="qr-code"
                                  />
                                ) : (
                                  <img
                                    src={'img/qr-code-light.svg'}
                                    alt="qr-code"
                                  />
                                );
                              }}
                            </ThemeConsumer>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">
                          Latest Transactions
                        </h5>
                        <div className="wallet-history">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>No.</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>25-04-2019</td>
                                <td>
                                  <i className="icon ion-md-checkmark-circle-outline green"></i>
                                </td>
                                <td>4.5454334</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>25-05-2019</td>
                                <td>
                                  <i className="icon ion-md-checkmark-circle-outline green"></i>
                                </td>
                                <td>0.5484468</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>25-06-2019</td>
                                <td>
                                  <i className="icon ion-md-close-circle-outline red"></i>
                                </td>
                                <td>2.5454545</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>25-07-2019</td>
                                <td>
                                  <i className="icon ion-md-checkmark-circle-outline green"></i>
                                </td>
                                <td>1.45894147</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>25-08-2019</td>
                                <td>
                                  <i className="icon ion-md-close-circle-outline red"></i>
                                </td>
                                <td>2.5454545</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
