/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { useParams } from 'react-router-dom';
import { swapApi } from '../../services/SwapService';

function withParams(Comp) {
  return function (props) {
    return <Comp {...props} params={useParams()} />;
  };
}
class Receipt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: '',
      sendAmount: '',
      sendAsset: '',
      receiveAmount: '',
      receiveAsset: '',
      receiveAddress: '',
      status: '',
    };
  }

  componentDidMount() {
    this.getOrder(this.props.params.order_id);
  }

  getOrder = async (order_id) => {
    const data = {
      order_id,
    };
    const orderDetail = await swapApi.getOrderDetails(data);
    if (orderDetail.status === 200 && orderDetail.data.status === 200) {
      this.setState({ orderId: orderDetail.data.data.order_id });
      this.setState({ sendAmount: orderDetail.data.data.amount_send });
      this.setState({ sendAsset: orderDetail.data.data.coin_send });
      this.setState({ receiveAmount: orderDetail.data.data.amount_receive });
      this.setState({ receiveAsset: orderDetail.data.data.coin_receive });
      this.setState({ receiveAddress: orderDetail.data.data.recipient });
      this.setState({ status: orderDetail.data.data.status });
    }
  };

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {this.state.status === '9' ? (
                <div className="sendBoxArea">
                  <div className="tradeId">
                    TradeID:
                    {this.state.orderId}
                  </div>
                  <div className="sendBox">
                    <h5>This transaction has expired!</h5>
                  </div>
                </div>
              ) : (
                <div className="sendBoxArea">
                  <div className="tradeId">
                    TradeID:
                    {this.state.orderId}
                  </div>
                  <div className="sendBox">
                    <h5>You send</h5>
                    <p>
                      {`${this.state.sendAmount} ${this.state.sendAsset}`}
                    </p>
                  </div>
                  <div className="sendBox">
                    <h5>You received:</h5>
                    <p>
                      {`${this.state.receiveAmount} ${this.state.receiveAsset}`}
                    </p>
                  </div>
                  <div className="sendBox">
                    <h5>To the following address:</h5>
                    <p>
                      {this.state.receiveAddress}
                    </p>
                  </div>
                  <div className="sendBox">
                    <h5>Final Exchange rate :</h5>
                    <p>
                      {`${this.state.sendAmount} ${this.state.sendAsset}`}
                      =
                      {`${this.state.receiveAmount} ${this.state.receiveAsset}`}
                    </p>
                  </div>
                  <div className="sendBox">
                    <h5>This exchange took 0 minutes.</h5>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withParams(Receipt);
