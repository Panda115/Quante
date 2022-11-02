/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/no-unused-state */
/* eslint-disable radix */
/* eslint-disable react/no-access-state-in-setstate */

import React, { Component } from 'react';
import { Link, useParams, Navigate, Redirect } from 'react-router-dom';

import { swapApi } from '../../services/SwapService';

function withParams(Comp) {
  // eslint-disable-next-line func-names
  return function (props) {
    // eslint-disable-next-line react/jsx-filename-extension
    return <Comp {...props} params={useParams()} />;
  };
}
class Deposit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      order_id: '',
      sendCoin: '',
      sendAmount: '',
      sendAddress: '',
      receiveCoin: '',
      receiveAmount: '',
      receiveAddress: '',
      networkFee: '',
      // expireLeft: '',
      destId: '',
      status: '',
      count: 0,
      countDepositExchange: 0,
      countTradeDeposit: 0,
      countReceiveTransaction: 0,
      pairCount: 0,
      countUpdateFURA: 0,
      receiveTransactionId: '',
      depositExchangeTransId: '',
      depositExchangeTransFee: 0,
      withdrawalAmount: 0,
      countWithdeawalAmount: 0,
      timeLeftHours: 0,
      timeLeftMinutes: 0,
      createdAt: 0,
      distance: 0,
      countUpdateSendAmount: 0,
      showTimer: true,
    };
  }

  async componentDidMount() {
    await this.getOrder(this.props.params.order_id);
    try {
      await setInterval(async () => {
        if (this.state.status > 1) {
          await this.setState({ showTimer: false });
        }
        if (this.state.status === '1') {
          if (this.state.timeLeftHours > 0 || this.state.timeLeftMinutes > 0) {
            const now_date = new Date();
            await this.setState({ distance: this.state.createdAt - now_date });
            await this.setState({
              timeLeftHours: Math.floor(
                (this.state.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
              ) > 0
                ? Math.floor((this.state.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : 0,
            });
            if (Math.floor((this.state.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) < 0) {
              await this.setState({ timeLeftMinutes: 0 });
            } else {
              await this.setState({
                timeLeftMinutes: Math.floor(
                  (this.state.distance % (1000 * 60 * 60)) / (1000 * 60),
                ) > 0
                  ? Math.floor((this.state.distance % (1000 * 60 * 60)) / (1000 * 60)) : 0,
              });
            }
            const data = {
              destId: this.state.destId,
              assets: this.state.sendCoin,
              destAddress: this.state.sendAddress,
            };

            const transactionDetail = await swapApi.getTransactionDetails(data);

            if (
              transactionDetail.status === 200
              && transactionDetail.data.status === 200
              && transactionDetail.data.data.length > 0
            ) {
              const updateData = {
                orderId: this.state.order_id,
                status: 2,
              };

              const updateTransactionStatus = await swapApi.getUpdateTransactionStatus(
                updateData,
              );

              if (
                updateTransactionStatus.status === 200
                && updateTransactionStatus.data.status === 200
              ) {
                const datas = {
                  order_id: this.state.order_id,
                };

                const orderDetail = await swapApi.getOrderDetails(datas);

                if (orderDetail.status === 200 && orderDetail.data.status === 200) {
                  await this.setState({ status: orderDetail.data.data.status });
                }
              }
            }
          } else {
            const updateData = {
              orderId: this.state.order_id,
              status: 9,
            };

            const updateTransactionStatus = await swapApi.getUpdateTransactionStatus(
              updateData,
            );

            if (
              updateTransactionStatus.status === 200
              && updateTransactionStatus.data.status === 200
            ) {
              const datas = {
                order_id: this.state.order_id,
              };

              const orderDetail = await swapApi.getOrderDetails(datas);

              if (orderDetail.status === 200 && orderDetail.data.status === 200) {
                await this.setState({ status: orderDetail.data.data.status });
              }
            }
          }
        } else if (this.state.status === '2') {
          const data = {
            destId: this.state.destId,
            assets: this.state.sendCoin,
            destAddress: this.state.sendAddress,
          };

          const transactionDetail = await swapApi.getTransactionDetails(data);
          if (transactionDetail.status === 200 && transactionDetail.data.status && transactionDetail.data.data.length > 0 && transactionDetail.data.data[0].status === 'COMPLETED') {
            // await this.setState({ showTimer: false });
            this.getDepositExchange(this.state.sendAmount);
          }
          if (this.state.countUpdateSendAmount <= 0) {
            // await this.setState({ showTimer: false });
            await this.setState({ countUpdateSendAmount: 1 });
            const orderSendAmountData = {
              orderId: this.state.order_id,
              sendAmount: transactionDetail.data.data[0].amount,
            };
            const updateOrderSendAmount = await swapApi.updateOrderSendAmount(
              orderSendAmountData,
            );
            if (updateOrderSendAmount.status === 200 && updateOrderSendAmount.data.status === 200) {
              const datas = {
                order_id: this.state.order_id,
              };

              const orderDetail = await swapApi.getOrderDetails(datas);

              if (orderDetail.status === 200 && orderDetail.data.status === 200) {
                await this.setState({ sendAmount: orderDetail.data.data.amount_send });
              }
            }
          }
        } else if (this.state.status === '3') {
          // await this.setState({ showTimer: false });
          await this.depositTrade();
        } else if (this.state.status === '4') {
          // await this.setState({ showTimer: false });
          await this.updateOrderFURA();
        } else if (this.state.status === '5') {
          // await this.setState({ showTimer: false });
          await this.withdeawalTradeAmount();
        } else if (this.state.status === '6') {
          // await this.setState({ showTimer: false });
          const data = {
            orderId: this.state.order_id,
            receiveAddress: this.state.receiveAddress,
            receiveAmount: parseFloat(this.state.receiveAmount),
            receivedAsset: this.state.receiveCoin,
          };
          this.placeReceiveAsset(data);
        } else if (this.state.status === '7') {
          // await this.setState({ showTimer: false });
          await this.getReceiveTransactionDetail(this.state.receiveTransactionId);
        } else if (this.state.status === '8') {
          await this.setState({ redirect: true });
        } else if (this.state.status === '9') {
          await this.setState({ redirect: true });
        }
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }

  getOrder = async (order_id) => {
    const data = {
      order_id,
    };
    const orderDetail = await swapApi.getOrderDetails(data);
    if (orderDetail.status === 200) {
      this.setState({ order_id: orderDetail.data.data.order_id });
      this.setState({ sendAmount: orderDetail.data.data.amount_send });
      this.setState({ sendCoin: orderDetail.data.data.coin_send });
      this.setState({ sendAddress: orderDetail.data.data.server_address });

      this.setState({ receiveAmount: orderDetail.data.data.amount_receive });
      this.setState({ receiveCoin: orderDetail.data.data.coin_receive });
      this.setState({ receiveAddress: orderDetail.data.data.recipient });
      this.setState({ destId: orderDetail.data.data.destId });
      this.setState({ status: orderDetail.data.data.status });
      this.setState({ depositExchangeTransId: orderDetail.data.data.depositExchangeTransId });
      await this.setState({ receiveTransactionId: orderDetail.data.data.transId });
      await this.setState({
        depositExchangeTransFee: orderDetail.data.data.depositExchangeTransFee,
      });
      await this.setState({ withdrawalAmount: orderDetail.data.data.withdrawalAmount });
      await this.setState({ networkFee: orderDetail.data.data.network_fee });
      await this.setState({ sendAmount: orderDetail.data.data.amount_send });

      const create_at = new Date(orderDetail.data.data.created_at);
      create_at.setTime(create_at.getTime() + 24 * 60 * 60 * 1000);
      await this.setState({ createdAt: create_at });
      const now_date = new Date();
      await this.setState({ distance: this.state.createdAt - now_date });
      await this.setState({
        timeLeftHours: Math.floor(
          (this.state.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ) >= 0
          ? Math.floor((this.state.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : 0,
      });

      if (Math.floor((this.state.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) < 0) {
        await this.setState({ timeLeftMinutes: 0 });
      } else {
        await this.setState({
          timeLeftMinutes: Math.floor((this.state.distance % (1000 * 60 * 60)) / (1000 * 60)) > 0
            ? Math.floor((this.state.distance % (1000 * 60 * 60)) / (1000 * 60)) : 0,
        });
      }
      if (orderDetail.data.data.status > 1) {
        await this.setState({ showTimer: false });
      }
    }
  };

  // Deposit amount from FB vault to Exchange
  getDepositExchange = async (amount) => {
    if (this.state.countDepositExchange <= 0) {
      await this.setState({ countDepositExchange: 1 });
      const depositExchangeData = {
        orderId: this.state.order_id,
        assetId: this.state.sendCoin,
        sourceId: this.state.destId,
        amount,
      };
      const depositExchange = await swapApi.getDepositExchange(depositExchangeData);
      if (depositExchange.status === 200 && depositExchange.data.status === 200) {
        await this.setState({ depositExchangeTransId: depositExchange.data.data.id });
        const updateData = {
          orderId: this.state.order_id,
          status: 3,
        };
        const updateTransactionStatus = await swapApi.getUpdateTransactionStatus(
          updateData,
        );

        if (
          updateTransactionStatus.status === 200
          && updateTransactionStatus.data.status === 200
        ) {
          const datas = {
            order_id: this.state.order_id,
          };

          const orderDetail = await swapApi.getOrderDetails(datas);

          if (orderDetail.status === 200 && orderDetail.data.status === 200) {
            await this.setState({ status: orderDetail.data.data.status });
            await this.setState({
              depositExchangeTransFee: orderDetail.data.data.depositExchangeTransFee,
            });
          }
        }
      } else {
        console.log('else');
      }
    }
  };

  // check exchange transaction details
  depositTrade = async () => {
    const getDepositExchangeTransDetail = await
    swapApi.getTransactionDetail(this.state.depositExchangeTransId);

    if (
      getDepositExchangeTransDetail.status === 200
      && getDepositExchangeTransDetail.data.status === 200
      && getDepositExchangeTransDetail.data.data.status === 'COMPLETED'
    ) {
      if (this.state.countTradeDeposit <= 0) {
        await this.setState({ countTradeDeposit: 1 });
        const data = {
          asset: getDepositExchangeTransDetail.data.data.assetId.split('_')[0].toLowerCase(),
          type: 'Deposit',
          amount: getDepositExchangeTransDetail.data.data.amount,
        };
        const transfer = await swapApi.transfer(data);
        if (transfer.status === 200 && transfer.data.status === 200) {
        // && transfer.data.data.Data.Status === 'Completed'
          const updateData = {
            orderId: this.state.order_id,
            status: 4,
          };

          const updateTransactionStatus = await swapApi.getUpdateTransactionStatus(
            updateData,
          );

          if (
            updateTransactionStatus.status === 200
          && updateTransactionStatus.data.status === 200
          ) {
            const datas = {
              order_id: this.state.order_id,
            };

            const orderDetail = await swapApi.getOrderDetails(datas);

            if (orderDetail.status === 200 && orderDetail.data.status === 200) {
              await this.setState({ status: orderDetail.data.data.status });
            }
          }
        } else {
          console.log('error = ', transfer.data.errors[0].msg);
        }
      }
    }
  };

  // calculate FURA
  updateOrderFURA = async () => {
    if (this.state.countUpdateFURA <= 0) {
      await this.setState({ countUpdateFURA: 1 });
      const data = {
        destId: this.state.destId,
        assets: this.state.sendCoin,
        destAddress: this.state.sendAddress,
      };

      const transactionDetail = await swapApi.getTransactionDetails(data);
      if (
        transactionDetail.status === 200
        && transactionDetail.data.status === 200
        && transactionDetail.data.data.length > 0
        && transactionDetail.data.data[0].status === 'COMPLETED'
      ) {
        const updateFURAData = {
          orderId: this.state.order_id,
          sendAmount: transactionDetail.data.data[0].amount,
          coin_send: this.state.sendCoin,
          coin_receive: this.state.receiveCoin,
          destId: this.state.destId,
          estimateFee: this.state.depositExchangeTransFee,
        };
        const getUpdateOrderFURA = await swapApi.updateOrderFURA(updateFURAData);
        if (getUpdateOrderFURA.status === 200 && getUpdateOrderFURA.data.status === 200) {
          const updateData = {
            orderId: this.state.order_id,
            status: 5,
          };

          const updateTransactionStatus = await swapApi.getUpdateTransactionStatus(
            updateData,
          );

          if (
            updateTransactionStatus.status === 200
              && updateTransactionStatus.data.status === 200
          ) {
            const datas = {
              order_id: this.state.order_id,
            };

            const orderDetail = await swapApi.getOrderDetails(datas);

            if (orderDetail.status === 200 && orderDetail.data.status === 200) {
              await this.setState({ status: orderDetail.data.data.status });
              await this.setState({ sendAmount: orderDetail.data.data.amount_send });
              await this.setState({ receiveAmount: orderDetail.data.data.amount_receive });
              await this.setState({ withdrawalAmount: orderDetail.data.data.withdrawalAmount });
            }
          }
        } else {
          console.log('else');
        }
      }
    }
  };

  withdeawalTradeAmount = async () => {
    if (this.state.countWithdeawalAmount <= 0) {
      await this.setState({ countWithdeawalAmount: 1 });
      const data = {
        asset: this.state.receiveCoin.toLowerCase(),
        type: 'Withdrawal',
        amount: this.state.withdrawalAmount,
      };
      const transfer = await swapApi.transfer(data);
      if (transfer.status === 200 && transfer.data.status === 200) {
        const updateData = {
          orderId: this.state.order_id,
          status: 6,
        };

        const updateTransactionStatus = await swapApi.getUpdateTransactionStatus(
          updateData,
        );

        if (
          updateTransactionStatus.status === 200
        && updateTransactionStatus.data.status === 200
        ) {
          const datas = {
            order_id: this.state.order_id,
          };

          const orderDetail = await swapApi.getOrderDetails(datas);

          if (orderDetail.status === 200 && orderDetail.data.status === 200) {
            await this.setState({ status: orderDetail.data.data.status });
          }
        }
      } else {
        console.log('error = ', transfer.data.errors[0].msg);
      }
    }
  };

  // Receive coin
  placeReceiveAsset = async (data) => {
    if (this.state.countReceiveTransaction <= 0) {
      await this.setState({ countReceiveTransaction: 1 });
      const receiveTransaction = await swapApi.receiveTransaction(data);
      if (receiveTransaction.status === 200 && receiveTransaction.data.status === 200) {
        await this.setState({ receiveTransactionId: receiveTransaction.data.data.id });
        const updateData = {
          orderId: this.state.order_id,
          status: 7,
        };

        const updateTransactionStatus = await swapApi.getUpdateTransactionStatus(
          updateData,
        );

        if (
          updateTransactionStatus.status === 200
          && updateTransactionStatus.data.status === 200
        ) {
          const datas = {
            order_id: this.state.order_id,
          };

          const orderDetail = await swapApi.getOrderDetails(datas);

          if (orderDetail.status === 200 && orderDetail.data.status === 200) {
            await this.setState({ status: orderDetail.data.data.status });
          }
        }
      }
    }
  };

  // Receive transaction details
  getReceiveTransactionDetail = async (transId) => {
    const getReceiveTransDetail = await swapApi.getTransactionDetail(transId);
    if (getReceiveTransDetail.status === 200 && getReceiveTransDetail.data.status === 200 && getReceiveTransDetail.data.data.status === 'CONFIRMING') {
      const data = {
        txHash: getReceiveTransDetail.data.data.txHash,
        status: 8,
        orderId: this.state.order_id,
      };
      const updateOrderTxHash = await swapApi.updateReceiveTransactionTxHash(data);
      if (updateOrderTxHash.status === 200 && updateOrderTxHash.data.status === 200) {
        const datas = {
          order_id: this.state.order_id,
        };

        const orderDetail = await swapApi.getOrderDetails(datas);

        if (orderDetail.status === 200 && orderDetail.data.status === 200) {
          await this.setState({ status: orderDetail.data.data.status });
        }
      }
    }
  };

  render() {
    return (
      <>
        {
          this.state.redirect && <Redirect to={`/receipt/${this.state.order_id}`} />
        }
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sendBoxArea">
                  <div className="tradeId">
                    <h4>
                      TradeID:
                      <span>{this.state.order_id}</span>
                    </h4>
                  </div>
                  <div className="sendAmountArea">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="sendAmountAreaLeft">
                          <h5>{this.state.status > '1' && this.state.status < 9 ? 'You sent this amount' : 'Send this amount:'}</h5>
                          <h2>
                            {this.state.sendAmount}
                            {' '}
                            {this.state.sendCoin}
                          </h2>
                          <h5>To this address:</h5>
                          <h3>{this.state.sendAddress}</h3>
                        </div>

                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="sendAmountAreaRight d-flex flex-wrap">
                          <div className="amtLeft">
                            <span><img src="../../../images/qr.png" alt="" /></span>
                          </div>
                          <div className="amtRight">
                            {this.state.showTimer ? (
                              <>
                                <h5>Time left:</h5>
                                <p>
                                  {
                                    this.state.timeLeftHours > 0
                                      ? `${this.state.timeLeftHours} Hours ${this.state.timeLeftMinutes} Minutes`
                                      : `${this.state.timeLeftMinutes} Minutes`
                                  }
                                </p>
                              </>
                            ) : ''}

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="youReceive">
                    <p>You Receive</p>
                    <h6>
                      ≈
                      {this.state.receiveAmount}
                      {' '}
                      {this.state.receiveCoin}
                    </h6>
                    <p>
                      The rate locks after confirm stage. In most cases, only 1
                      confirmation is required
                    </p>
                    <ul>
                      <li>Network Fee:</li>
                      <li>
                        {this.state.networkFee}
                        {' '}
                        {this.state.receiveCoin}
                      </li>
                      <li className="deducted">This fee is deducted from the final amount you receive</li>
                    </ul>
                    <p>Recipient Wallet</p>
                    <h4>{this.state.receiveAddress}</h4>
                  </div>
                </div>

                <div className="sendTabArea">
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link to="#" className={this.state.status === '1' ? 'active' : ''}>Deposit</Link>
                    </li>
                    <li>
                      <Link to="#" className={this.state.status === '2' ? 'active' : ''}>Confirming</Link>
                    </li>
                    <li>
                      <Link to="#" className={this.state.status === '3' || this.state.status === '4' || this.state.status === '5' || this.state.status === '6' ? 'active' : ''}>Exchanging</Link>
                    </li>
                    <li>
                      <Link to="#" className={this.state.status === '7' ? 'active' : ''}>Receive</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default withParams(Deposit);
