/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link, useParams, Navigate, Redirect } from 'react-router-dom';
import { swapApi } from '../../services/SwapService';

function withParams(Comp) {
  // eslint-disable-next-line func-names
  return function (props) {
    // eslint-disable-next-line react/jsx-filename-extension
    return <Comp {...props} params={useParams()} />;
  };
}
class Swap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      assets: [],
      yousend: '',
      isShowYouSendAsset: false,
      showSubAssetYouSend: false,
      youSendSubAssets: [],
      youSendSubCoin: '',
      youSendSubCoinName: '',
      youSendCoinImage: '',
      youget: '',
      isShowYouGetAsset: false,
      showSubAssetYouGet: false,
      youGetSubAssets: [],
      youGetSubCoin: '',
      youGetSubCoinName: '',
      youGetSubCoinTrezorCode: '',
      youGetCoinImage: '',
      yousendamount: 0.01,
      yougetamount: '',
      realPrice: '',
      realPriceView: '',
      realPriceFrom: '',
      realPriceTo: '',
      showConfirm: false,
      walletAddress: '',
      walletAddressError: false,
      walletAddressErrorMsg: '',
      iAgree: false,
      redirect: false,
      orderId: '',
      min: '',
      max: '',
      minerror: false,
      maxerror: false,
      minerrormsg: '',
      maxerrormsg: '',
      showConfirmButton: false,
      networkFees: 0,
      isLoader: false,
      errors: true,
    };
  }

  async componentDidMount() {
    console.log('params = ', this.props.params);
    await this.setState({ yousendamount: this.props.params.amount_send });
    await this.getSupportedAssets();
  }

  getSupportedAssets = async () => {
    const supportedAssets = await swapApi.getSupportedAssets();
    if (supportedAssets.status === 200) {
      if (this.props.params.coin_send.includes('&')) {
        const split_send_coin = this.props.params.coin_send.split('&');

        await this.setState({ yousend: split_send_coin[0] });
        await this.setState({ youSendCoinImage: `${process.env.REACT_APP_COIN_IMAGE_URL}${split_send_coin[0]}.png` });
        const getsubAssets = await swapApi.getSubAssets(split_send_coin[0]);

        if (getsubAssets.status === 200 && getsubAssets.data.status === 200 && getsubAssets.data.success === true) {
          await this.setState({ youSendSubAssets: getsubAssets.data.data });
          await this.setState({ isShowYouSendAsset: true });
          const getnetworkAsset = this.state.youSendSubAssets.find((item) => item.fbCode === split_send_coin[1]);
          await this.setState({ youSendSubCoin: getnetworkAsset.fbCode });
          await this.setState({ youSendSubCoinName: getnetworkAsset.name});
        }
      } else {
        await this.setState({ yousend: this.props.params.coin_send });
        await this.setState({ youSendCoinImage: `${process.env.REACT_APP_COIN_IMAGE_URL}${this.props.params.coin_send}.png` });
      }
      await this.setState({ assets: supportedAssets.data.data });
      if (this.props.params.coin_receive.includes('&')) {
        const split_get_coin = this.props.params.coin_receive.split('&');

        await this.setState({ youget: split_get_coin[0] });
        await this.setState({ yougetCoinImage: `${process.env.REACT_APP_COIN_IMAGE_URL}${split_get_coin[0]}.png` });
        const getsubAssets = await swapApi.getSubAssets(split_get_coin[0]);

        if (getsubAssets.status === 200 && getsubAssets.data.status === 200 && getsubAssets.data.success === true) {
          await this.setState({ youGetSubAssets: getsubAssets.data.data });
          await this.setState({ isShowYouGetAsset: true });
          const getnetworkAsset = this.state.youGetSubAssets.find((item) => item.fbCode === split_get_coin[1]);
          await this.setState({ youGetSubCoin: getnetworkAsset.fbCode });
          await this.setState({ youGetSubCoinName: getnetworkAsset.name});
          await this.setState({ youGetSubCoinTrezorCode: getnetworkAsset.trezorCode });
        }
      } else {
        await this.setState({ youget: this.props.params.coin_receive });
        await this.setState({ youGetCoinImage: `${process.env.REACT_APP_COIN_IMAGE_URL}${this.props.params.coin_receive}.png` });
      }
      // await this.setState({ youget: this.props.params.coin_receive });
      // await this.setState({ youGetCoinImage: `${process.env.REACT_APP_COIN_IMAGE_URL}${this.props.params.coin_receive}.png` });
      this.getCoinRealPrice();
    }
  };

  handleYouSend = async (e) => {
    const getsubAssets = await swapApi.getSubAssets(e.target.value);
    if (getsubAssets.status === 200 && getsubAssets.data.status === 200 && getsubAssets.data.success === true) {
      await this.setState({ yousend: e.target.value });
      await this.setState({ youSendCoinImage: `${process.env.REACT_APP_COIN_IMAGE_URL}${e.target.value}.png` });
      await this.setState({ youSendSubAssets: getsubAssets.data.data });
      await this.setState({ isShowYouSendAsset: true });
      await this.setState({ youSendSubCoin: getsubAssets.data.data[0].fbCode });
      await this.setState({ youSendSubCoinName: getsubAssets.data.data[0].name});
    } else {
      await this.setState({ yousend: e.target.value });
      await this.setState({ youSendCoinImage: `${process.env.REACT_APP_COIN_IMAGE_URL}${e.target.value}.png` });
      await this.setState({ youSendSubAssets: [] });
      await this.setState({ isShowYouSendAsset: false });
      await this.setState({ youSendSubCoin: '' });
      await this.setState({ youSendSubCoinName: '' });
    }
    this.getCoinRealPrice();
  };

  handleYouGet = async (e) => {;
    const getsubAssets = await swapApi.getSubAssets(e.target.value);
    if (getsubAssets.status === 200 && getsubAssets.data.status === 200 && getsubAssets.data.success === true) {
      await this.setState({ youget: e.target.value });
      await this.setState({ youGetCoinImage: `${process.env.REACT_APP_COIN_IMAGE_URL}${e.target.value}.png` });
      await this.setState({ youGetSubAssets: getsubAssets.data.data });
      await this.setState({ isShowYouGetAsset: true });
      await this.setState({ youGetSubCoin: getsubAssets.data.data[0].fbCode });
      await this.setState({ youGetSubCoinName: getsubAssets.data.data[0].name});
      await this.setState({ youGetSubCoinTrezorCode: e.target.trezorCode });
    } else {
      await this.setState({ youget: e.target.value });
      await this.setState({ youGetCoinImage: `${process.env.REACT_APP_COIN_IMAGE_URL}${e.target.value}.png` });
      await this.setState({ youGetSubAssets: [] });
      await this.setState({ isShowYouGetAsset: false });
      await this.setState({ youGetSubCoin: '' });
      await this.setState({ youGetSubCoinName: '' });
      await this.setState({ youGetSubCoinTrezorCode: '' });
    }
    this.getCoinRealPrice();
    if (this.state.walletAddress !== '') {
      const data = {
        walletId: this.state.walletAddress,
        asset: this.state.youGetSubCoinTrezorCode!== ''? this.state.youGetSubCoinTrezorCode : this.state.youget,
      };
      this.checkValidateWallet(data);
    } else {
      this.setState({ walletAddressError: false });
      this.setState({ walletAddressErrorMsg: '' });
    }
  };

  getCoinRealPrice = async () => {
    if (this.state.yousend !== '' && this.state.youget !== '') {
      const data = {
        coinfrom: this.state.yousend,
        cointo: this.state.youget,
      };
      const coinRealPrice = await swapApi.getCoinRealPrice(data);
      if (coinRealPrice.status === 200) {
        this.setState({ realPrice: coinRealPrice.data.data });
        this.setState({ realPriceView: `1 ${this.state.yousend} ~ ${coinRealPrice.data.data} ${this.state.youget}` });
        this.setState({ realPriceFrom: 1 });
        this.setState({ realPriceTo: this.state.youget });
        const price = Math.floor(
          this.state.yousendamount * this.state.realPrice * 100000000,
        ) / 100000000;
        this.setState({ yougetamount: price.toFixed(8) });
        await this.getAssetsLimit();
      }
    }
  };

  getAssetsLimit = async () => {
    if (this.state.yousend !== '' && this.state.youget !== '') {
      this.state.assets.forEach(async (element) => {
        if (element.code === this.state.yousend) {
          await this.setState({ min: Math.ceil(element.minimum * 100000) / 100000 });
        }
        if (element.code === this.state.youget) {
          await this.setState({ max: Math.floor(element.maximum * 100000) / 100000 });
        }
      });
      if (this.state.yousendamount === '' || this.state.yousendamount < this.state.min) {
        await this.setState({ minerrormsg: `Minimum send amount: ${this.state.min} ${this.state.yousend}` });
      }

      if (this.state.yougetamount !== '' && this.state.yougetamount > this.state.max) {
        await this.setState({ maxerrormsg: `Maximum receive amount: ${this.state.max} ${this.state.youget}` });
        await this.setState({ maxerror: true });
      } else {
        await this.setState({ maxerrormsg: '' });
        await this.setState({ maxerror: false });
      }
    }
  };

  handlePrice = async (e) => {
    await this.setState({ yousendamount: e.target.value });
    const price = Math.floor(
      this.state.yousendamount * this.state.realPrice * 100000000,
    ) / 100000000;
    this.setState({ yougetamount: price.toFixed(8) });

    if (this.state.yousendamount === '' || this.state.yousendamount < this.state.min) {
      await this.setState({ minerror: true });
      await this.setState({ minerrormsg: `Minimum send amount: ${this.state.min} ${this.state.yousend}` });
      await this.setState({ errors: true });
    } else {
      await this.setState({ minerrormsg: '' });
      await this.setState({ minerror: false });
      await this.setState({ errors: false });
    }

    if (this.state.yougetamount !== '' && this.state.yougetamount > this.state.max) {
      await this.setState({ maxerrormsg: `Maximum receive amount: ${this.state.max} ${this.state.youget}` });
      await this.setState({ maxerror: true });
    } else {
      await this.setState({ maxerrormsg: '' });
      await this.setState({ maxerror: false });
    }
  };

  placeConfirm = async () => {
    if (this.state.yousend !== '' && this.state.walletAddress !== '' && this.state.youget !== '' && this.state.minerror === false && this.state.maxerror === false && this.state.walletAddressError === false) {
      const getNetworkFees = await swapApi.getSupportedAssets();
      if (getNetworkFees.status === 200 && getNetworkFees.data.result === true) {
        this.state.assets.map(async (element) => {
          if (element.code === this.state.youget) {
            await this.setState({ networkFees: element.network_fee });
          }
        });
      }
      this.setState({ showConfirm: true });
    } else {
      // eslint-disable-next-line no-alert
      alert('Please fulfill all criteria !');
    }
  };

  checkValidateWallet = async (data) => {
    const checkValidWallet = await swapApi.checkValidWalletAddress(data);
    if (checkValidWallet.status === 200) {
      if (checkValidWallet.data.status === 404) {
        this.setState({ walletAddressError: true });
        this.setState({ walletAddressErrorMsg: 'Please enter a valid address' });
        this.setState({ showConfirmButton: false });
        this.setState({ errors: true });
      } else {
        this.setState({ walletAddressError: false });
        this.setState({ walletAddressErrorMsg: '' });
        this.setState({ showConfirmButton: true });
        if (this.state.yousendamount === '') {
          this.setState({ errors: true });
        } else {
          this.setState({ errors: false });
        }
      }
    }
  };

  handleWalletAddress = async (e) => {
    await this.setState({ walletAddress: e.target.value });
    if (this.state.walletAddress !== '') {
      const data = {
        walletId: this.state.walletAddress,
        asset: this.state.youGetSubCoinTrezorCode!== ''? this.state.youGetSubCoinTrezorCode : this.state.youget,
      };
      this.checkValidateWallet(data);
    } else {
      this.setState({ walletAddressError: false });
      this.setState({ walletAddressErrorMsg: '' });
      this.setState({ showConfirmButton: false });
      this.setState({ errors: true });
    }
  };

  backConfirm = async () => {
    this.setState({ showConfirm: false });
  };

  handleIAgree = async () => {
    this.setState((prevState) => ({
      iAgree: !prevState.iAgree,
    }));
  };

  placeOrder = async () => {
    if (this.state.iAgree) {
      await this.setState({ isLoader: true });
      const data = {
        coin_send: this.state.yousend,
        coin_receive: this.state.youget,
        amount_send: this.state.yousendamount,
        amount_receive: this.state.yougetamount,
        recipient: this.state.walletAddress,
        networkFees: this.state.networkFees,
      };
      const order = await swapApi.getPlaceOrder(data);
      if (order.status === 200) {
        this.setState({ orderId: order.data.data.order_id });
        await this.setState({ isLoader: false });
        await this.setState({ redirect: true });
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('Please accept term and condition !');
    }
  };

  handleShowSendAssetDropDown = async() => {
    await this.setState({ showSubAssetYouSend: true });
  }

  handleSubCoinSend = async (e) => {
    const value = JSON.parse(e.target.value);
    await this.setState({ youSendSubCoin: value.fbCode });
    await this.setState({ youSendSubCoinName: value.name });
    await this.setState({ showSubAssetYouSend: false });
  }

  handleShowGetAssetDropDown = async() => {
    await this.setState({ showSubAssetYouGet: true });
  }

  handleSubCoinGet = async (e) => {
    const value = JSON.parse(e.target.value);
    await this.setState({ youGetSubCoin: value.fbCode });
    await this.setState({ youGetSubCoinName: value.name });
    await this.setState({ showSubAssetYouGet: false });
  }
  render() {
    return (
      <>
        {this.state.isLoader ? (
          <div className="coin-loader-wrap">
            <div className="coin-loader">
              <span className="coin-loader-img">
                <img src={'https://quantex-images.s3.us-east-2.amazonaws.com/editor+large.gif'} />
              </span>
            </div>
          </div>
        ) : ''}

        {
          this.state.redirect && <Redirect to={`/send/${this.state.orderId}`} />
        }
        {/* {
          this.state.redirect && <Navigate to={`/send/${this.state.orderId}`} />
        } */}
        {this.state.showConfirm ? (
          <section>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="sendBoxArea">
                    <div className="sendBox">
                      <span className="crpImg"><img src={this.state.youSendCoinImage} /></span>
                      <p>
                        You send
                        {' '}
                        {this.state.yousendamount}
                        {' '}
                        {this.state.yousend}
                      </p>
                    </div>
                    <div className="sendBox">
                      <span className="crpImg"><img src={this.state.youGetCoinImage} /></span>
                      <p>
                        You gate
                        {' '}
                        {this.state.yougetamount}
                        {' '}
                        {this.state.youget}
                      </p>
                      <ul>
                        <li>
                          Rate:
                          {' '}
                          {this.state.realPriceView}
                        </li>
                        <li>
                          Networkfee:
                          {' '}
                          {' '}
                          {this.state.networkFees}
                          {' '}
                          {this.state.youget}

                        </li>
                        <li>
                          Your Wallet address:
                          {' '}
                          {this.state.walletAddress}
                        </li>
                        <li>Estimated Arrival: 10 Minutes</li>
                      </ul>
                    </div>
                    <div className="sendBox">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" name="iagree" id="iagree" onClick={this.handleIAgree} value="checkedValue" checked={!!this.state.iAgree} />
                        <label className="form-check-label" htmlFor="cb-1">
                          I acknowledge that I have read and agree to the
                          {' '}
                          <Link to="/">Terms</Link>
                          {' '}
                          and
                          {' '}
                          <Link to="/">ConditionsandPrivacy</Link>
                          {' '}
                          Policy.
                        </label>
                      </div>
                    </div>
                    <div className="sendBox sendBoxBtn">
                      <ul className="d-flex">
                        <li><button type="button" onClick={this.placeOrder}>CONFIRM</button></li>
                        <li><button type="button" onClick={this.backConfirm}>BACK</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="caseStudiesSec">
            <div className="container">
              <div className="row">
                <div className="col-12 mb-4 d-flex justify-content-between align-items-center">
                  <div className="rateTabs">
                    <ul className="d-flex">
                      <li><button type="button" className="active">Dynamic Rate</button></li>
                      <li><button type="button">Fixed Rate</button></li>
                    </ul>
                  </div>
                  <div className="rightMenu">
                    <ul className="d-flex">
                      {/* {sessionStorage.getItem('token')
                        ? <li><Link className="btn-sm btn-info" to="/trade">Trade</Link></li>
                        : (
                          <>
                            <li><Link className="btn-sm btn-info" to="/login">Login</Link></li>
                            <li><Link className="btn-sm btn-info" to="/register">Register</Link></li>
                          </>
                        )} */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="text-center col-md-2">
                  <img src={this.state.youSendCoinImage} alt="" style={{ height: 'auto', width: 'auto' }} />
                </div>
                <div className="col-md-10">
                  <div className="row align-items-end">
                    <div className="col-md-9 col-9">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">You send</label>
                        <select className="form-select" name="yousend" id="yousend" onChange={this.handleYouSend}>
                          {this.state.assets.map((element) => (
                            <option
                              value={element.code}
                              key={element.id}
                              selected={this.state.yousend === element.code ? true : null}
                              disabled={this.state.youget === element.code ? true : null}
                            >
                              {element.code}
                              {' '}
                              {element.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3 col-xs-3">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label" />
                        <input type="number" className="form-control " name="yousendamount" id="yousendamount" onChange={this.handlePrice} aria-describedby="helpId" placeholder="0" value={this.state.yousendamount} />
                      </div>
                    </div>
                    {this.state.minerrormsg}
                  </div>
                </div>
              </div>
              {this.state.isShowYouSendAsset?(
                <>
                  {this.state.showSubAssetYouSend?(
                    <div className="row align-items-center">
                      <div className="text-center col-md-2"/>
                      <div className="col-md-10">
                        <div className="row align-items-end">
                          <div className="col-md-9 col-12">
                            <div className="mb-3">
                              <label htmlFor="" className="form-label">Network</label>
                              <select className="form-select" name="youSendSubCoin" id="youSendSubCoin" onChange={this.handleSubCoinSend}>
                                {this.state.youSendSubAssets.map((element)=>(
                                  <option key={element.id} value={JSON.stringify(element)} selected={element.fbCode === this.state.youSendSubCoin}>{element.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ):(
                    <div className="row align-items-center">
                      <div className="text-center col-md-2"/>
                      <div className="col-md-10">
                        <div className="row align-items-end">
                          <div className="col-md-9 col-9">Network: {this.state.youSendSubCoinName} <span role="presentation" onClick={this.handleShowSendAssetDropDown} style={{ cursor:'pointer', textDecoration:'underline' }}>Click to change</span></div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
                // <div className="row align-items-center"></div>
              ):''}

              <div className="row align-items-center">
                <div className="pl-5 col-lg-10 col-10">
                  <span>
                    <span>
                      {this.state.realPrice === ''
                        ? ''
                        : (<span><span>{this.state.realPriceView}</span></span>)}
                    </span>
                  </span>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="text-center col-md-2 col-2">
                  <img src={this.state.youGetCoinImage} alt="" style={{ height: 'auto', width: 'auto' }} />
                </div>
                <div className="col-md-10">
                  <div className="row align-items-end">
                    <div className="col-md-9 col-9">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">You get approximately</label>
                        <select className="form-select" name="youget" id="youget" onChange={this.handleYouGet}>
                          {this.state.assets.map((element) => (
                            <option
                              value={element.code}
                              key={element.id}
                              selected={this.state.youget === element.code ? true : null}
                              disabled={this.state.yousend === element.code ? true : null}
                            >
                              {element.code}
                              {' '}
                              {element.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3 col-xs-3">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label" />
                        <input type="number" className="form-control " name="yougetamount" id="yougetamount" aria-describedby="helpId" placeholder="0" value={this.state.yougetamount} readOnly />
                      </div>
                    </div>
                    {this.state.maxerrormsg}
                  </div>
                </div>
              </div>
              {this.state.isShowYouGetAsset?(
                <>
                  {this.state.showSubAssetYouGet?(
                    <div className="row align-items-center">
                      <div className="text-center col-md-2"/>
                      <div className="col-md-10">
                        <div className="row align-items-end">
                          <div className="col-md-9 col-12">
                            <div className="mb-3">
                              <label htmlFor="" className="form-label">Network</label>
                              <select className="form-select" name="youSendSubCoin" id="youSendSubCoin" onChange={this.handleSubCoinGet}>
                                {this.state.youGetSubAssets.map((element)=>(
                                  <option key={element.id} value={JSON.stringify(element)} selected={element.fbCode === this.state.youGetSubCoin}>{element.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ):(
                    <div className="row align-items-center">
                      <div className="text-center col-md-2"/>
                      <div className="col-md-10">
                        <div className="row align-items-end">
                          <div className="col-md-9 col-9">Network: {this.state.youGetSubCoinName} <span role="presentation" onClick={this.handleShowGetAssetDropDown} style={{ cursor:'pointer', textDecoration:'underline' }}>Click to change</span></div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
                // <div className="row align-items-center"></div>
              ):''}
              <div className="row">
                <div className="col-12">
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Please enter your 12 wallet address</label>
                    <input type="text" className={this.state.walletAddressError ? 'form-control input-error' : 'form-control '} name="wallet_address" id="wallet_address" aria-describedby="helpId" placeholder="" onChange={this.handleWalletAddress} value={this.state.walletAddress} />
                    {this.state.walletAddressError ? (<small id="helpId" className="form-text text-muted input-error-msg">{this.state.walletAddressErrorMsg}</small>) : ''}

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <div className="mb-3  w-50">
                    <button type="button" className="btn btn-info w-100" onClick={this.placeConfirm} disabled={this.state.errors}>Confirm</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}
export default withParams(Swap);
