import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ButtonToolbar, ButtonGroup, Button, Dropdown } from "react-bootstrap";
import axios from "axios";

export default function SwapBox() {
  const [coins, setCoins] = useState([]);
  const [coin_send, setCoinSend] = useState("");
  const [coin_receive, setCoinReceive] = useState("");
  const [rate, setRate] = useState(0);
  const [rate_type, setRateType] = useState("dynamic");
  const [amount_send, setAmountSend] = useState(0.01);
  const [amount_receive, setAmountReceive] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [send_minimum, setSendMinimum] = useState(0);
  const [receive_maximum, setReceiveMaximum] = useState(0);
  const [search, setSearch] = useState("");
  const [is_show_receive_asset, setIsShowReceiveAsset] = useState(false);
  const [show_sub_asset_receive, setShowSubAssetReceive] = useState(false);
  const [sub_asset_receive, setSubAssetReceive] = useState([]);
  const [sub_coin_receive, setSubCoinReceive] = useState("");
  const [sub_coin_receive_name, setSubCoinReceiveName] = useState("");
  const [is_show_send_asset, setIsShowSendAsset] = useState(false);
  const [show_sub_asset_send, setShowSubAssetSend] = useState(false);
  const [sub_asset_send, setSubAssetSend] = useState([]);
  const [sub_coin_send, setSubCoinSend] = useState("");
  const [sub_coin_send_name, setSubCoinSendName] = useState("");
  //mounted: get coins
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_SWAP_API}/get_coins`, {})
      .then((res) => {
        if (res.data.result) {
          var coins = res.data.data;
          setCoins(coins);
          setCoinSend(coins[0]["code"]);
          setCoinReceive(coins[1]["code"]);
          setLoaded(true);
          handleCoinSend(coins[0]["code"]);
          handleCoinReceive(coins[1]["code"]);
        }
      });
  }, []);
  // Change rate
  useEffect(() => {
    if (coin_send && coin_receive) {
      setLoaded(false);
      axios
        .post(`${process.env.REACT_APP_SWAP_API}/get_full_rate`, {
          coin_send,
          coin_receive,
          type: rate_type,
        })
        .then((res) => {
          setRate(res.data.data);
          setLoaded(true);
        });
    }
  }, [coin_send, coin_receive, rate_type]);
  //Change amount_send
  useEffect(() => {
    setAmountReceive(Math.floor(amount_send * rate * 100000000) / 100000000);
  }, [amount_send, rate]);
  //Change min, max
  useEffect(() => {
    for (var x in coins) {
      if (coins[x]["code"] === coin_send) {
        setSendMinimum(Math.ceil(coins[x]["minimum"] * 100000) / 100000);
      }
      if (coins[x]["code"] === coin_receive) {
        setReceiveMaximum(Math.floor(coins[x]["maximum"] * 100000) / 100000);
      }
    }
  }, [coin_send, coin_receive, coins]);
  //Coin change button
  function changeCoin() {
    var temp = coin_send;
    var temp_is_show_send_asset = is_show_send_asset;
    var temp_show_sub_asset_send = show_sub_asset_send;
    var temp_sub_asset_send = sub_asset_send;
    var temp_sub_coin_send = sub_coin_send;
    var temp_sub_coin_send_name = sub_coin_send_name;
    setCoinSend(coin_receive);
    setIsShowSendAsset(is_show_receive_asset);
    setShowSubAssetSend(show_sub_asset_receive);
    setSubAssetSend(sub_asset_receive);
    setSubCoinSend(sub_coin_receive);
    setCoinReceive(temp);
    setIsShowReceiveAsset(temp_is_show_send_asset);
    setShowSubAssetReceive(temp_show_sub_asset_send);
    setSubAssetReceive(temp_sub_asset_send);
    setSubCoinReceive(temp_sub_coin_send);
    setSubCoinReceiveName(temp_sub_coin_send_name);
  }
  function goToChoosePage() {
    if (sub_coin_send) {
      window.location.href = `/swap/${coin_send}&${sub_coin_send}/${coin_receive}/${amount_send}`;
    } else if (sub_coin_receive) {
      window.location.href = `/swap/${coin_send}/${coin_receive}&${sub_coin_receive}/${amount_send}`;
    } else {
      window.location.href = `/swap/${coin_send}/${coin_receive}/${amount_send}`;
    }
    
    // window.location.href = `/swap/choose?coin_send=${coin_send}&coin_receive=${coin_receive}&amount_send=${amount_send}`;
  }

  const handleCoinReceive = async (e) => {
    setCoinReceive(e);
    axios
      .get(`${process.env.REACT_APP_API_URL}/swap/find-child-assets-by-asset-id`, {
        params: {
          asset:e
        }
      })
      .then((res) => {
        if (res.data.status === 200 && res.data.status === 200) {
          setIsShowReceiveAsset(true);
          setSubCoinReceive(res.data.data[0].fbCode);
          setSubCoinReceiveName(res.data.data[0].name);
          setShowSubAssetReceive(false);
          setSubAssetReceive(res.data.data);
        } else {
          setIsShowReceiveAsset(false);
          setShowSubAssetReceive(false);
          setSubAssetReceive([]);
          setSubCoinReceive('');
          setSubCoinReceiveName('');
        }
      });
  }

  const handleShowReceiveAssetDropDown = async () => {
    setShowSubAssetReceive(true);
  }

  const handleSubCoinReceive = async (e) => {
    setSubCoinReceive(e.fbCode);
    setSubCoinReceiveName(e.name);
    setShowSubAssetReceive(false);
  }

  const handleCoinSend = async (e) => {
    setCoinSend(e);
    axios
      .get(`${process.env.REACT_APP_API_URL}/swap/find-child-assets-by-asset-id`, {
        params: {
          asset:e
        }
      })
      .then((res) => {
        if (res.data.status === 200 && res.data.status === 200) {
          setIsShowSendAsset(true);
          setSubCoinSend(res.data.data[0].fbCode);
          setSubCoinSendName(res.data.data[0].name);
          setShowSubAssetSend(false);
          setSubAssetSend(res.data.data);
        } else {
          setIsShowSendAsset(false);
          setShowSubAssetSend(false);
          setSubAssetSend([]);
          setSubCoinSend('');
          setSubCoinSendName('');
        }
      });
  }

  const handleShowSendAssetDropDown = async () => {
    setShowSubAssetSend(true);
  }

  const handleSubCoinSend = async (e) => {
    setSubCoinSend(e.fbCode);
    setSubCoinSendName(e.name);
    setShowSubAssetSend(false);
  }
  return (
    <>
      <div className="intro-form-exchange">
        <ButtonToolbar
          className="justify-content-between mb-4"
          aria-label="Toolbar with Button groups"
        >
          <ButtonGroup aria-label="Basic example">
            <Button
              className={rate_type === "dynamic" ? "active" : ""}
              onClick={() => {
                setRateType("dynamic");
              }}
            >
              Dynamic Rate
            </Button>
            <Button
              className={rate_type === "fixed" ? "active" : ""}
              onClick={() => {
                setRateType("fixed");
              }}
            >
              Fixed Rate
            </Button>
          </ButtonGroup>
        </ButtonToolbar>

        <div className="currency_validate">
          <div className="form-group">
            <label className="mr-sm-2">Send</label>
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                step="0.00000001"
                value={amount_send}
                onChange={(e) => {
                  setAmountSend(e.target.value);
                }}
                style={{width:'58.3333%'}}
              />
              <Dropdown style={{width:'41.6667%'}}>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <div style={{ minHeight: "25px" }}>
                    {coin_send ? (
                      <>
                        <img
                          src={`${process.env.REACT_APP_COIN_ICON_URL+(coin_send.toUpperCase())}.png`}
                          className="crypto-img mr-3"
                          alt=""
                        />
                        {coin_send}
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    onBlur={(e) => {
                      setTimeout(function () {
                        setSearch("");
                      }, 500);
                    }}
                  />
                  <div className="dropdown-menu-inner" style={{ zIndex: 999 }}>
                    {coins
                      .filter(
                        (coin) =>
                          coin.name
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          coin.code.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((coin, i) =>
                        coin.code === coin_receive ? (
                          <Dropdown.Item disabled key={i}>
                            <img
                              src={`${process.env.REACT_APP_COIN_ICON_URL+(coin.code.toUpperCase())}.png`}
                              alt={coin.code}
                            />
                            {coin.name} {coin.code}
                          </Dropdown.Item>
                        ) : (
                          <Dropdown.Item
                            onClick={() => handleCoinSend(coin.code)}
                            key={i}
                          >
                            <img
                              src={`${process.env.REACT_APP_COIN_ICON_URL+(coin.code.toUpperCase())}.png`}
                              alt={coin.code}
                            />
                            {coin.name} {coin.code}
                          </Dropdown.Item>
                        )
                      )}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {is_show_send_asset?(
              <>
                {show_sub_asset_send? (
                  <div className="input-group mb-3">
                    <label className="mr-sm-2">Network</label>
                    <div className="input-group mb-3">
                      <Dropdown style={{width:'50%', flexGrow:'unset'}}>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                          <div style={{ minHeight: "25px" }}>
                            {sub_coin_send ? (
                              <>
                                <img
                                  src={`${process.env.REACT_APP_COIN_ICON_URL+(coin_send.toUpperCase())}.png`}
                                  className="crypto-img mr-3"
                                  alt=""
                                />
                                {sub_coin_send}
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <div className="dropdown-menu-inner" style={{ zIndex: 999 }}>
                            {sub_asset_send.map((coin, i) => (
                              <Dropdown.Item
                                onClick={() => handleSubCoinSend(coin)}
                                key={i}
                              >
                                <img
                                  src={`${process.env.REACT_APP_COIN_ICON_URL+(coin_send.toUpperCase())}.png`}
                                  alt={coin_send}
                                />
                                {coin.name}
                              </Dropdown.Item>
                            ))}
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                ):(
                  <div className="input-group">
                    <p className="mb-0">
                      <span>
                        <span>Network: {sub_coin_send_name}</span> <span role="presentation" onClick={handleShowSendAssetDropDown} style={{ cursor:'pointer', textDecoration:'underline' }}>Click to change</span>
                      </span>
                    </p>
                  </div>
                )}
              </>
            ) : ''}
            {send_minimum > amount_send ? (
              <p className="notify_limitamount">
                Minimum send amount: {send_minimum} {coin_send}
              </p>
            ) : (
              <></>
            )}
            <div className="exchange-rate-board d-flex justify-content-between mt-0 align-items-center">
              <p className="mb-0">
                <i className="fa fa-lock mr-3"></i>
                <span>
                  1 {coin_send} ~ {rate} {coin_receive}
                </span>
              </p>
              <h6 className="mb-0 mr-1">
                <button
                  className="btn"
                  onClick={() => {
                    changeCoin();
                  }}
                >
                  <i className="fa fa-refresh"></i>
                </button>
              </h6>
            </div>
          </div>

          <div className="form-group">
            <label className="mr-sm-2">Receive</label>
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                value={amount_receive}
                readOnly="readonly"
                style={{width:'58.3333%'}}
              />
              <Dropdown style={{width:'41.6667%'}}>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <div style={{ minHeight: "25px" }}>
                    {coin_receive ? (
                      <>
                        <img
                          src={`${process.env.REACT_APP_COIN_ICON_URL+(coin_receive.toUpperCase())}.png`}
                          className="crypto-img mr-3"
                          alt=""
                        />
                        {coin_receive}
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    onBlur={(e) => {
                      setTimeout(function () {
                        setSearch("");
                      }, 500);
                    }}
                  />
                  <div className="dropdown-menu-inner" style={{ zIndex: 999 }}>
                    {coins
                      .filter(
                        (coin) =>
                          coin.name
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          coin.code.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((coin, i) =>
                        coin.code === coin_send ? (
                          <Dropdown.Item disabled key={i}>
                            <img
                              src={`${process.env.REACT_APP_COIN_ICON_URL+(coin.code.toUpperCase())}.png`}
                              alt={coin.code}
                            />
                            {coin.name} {coin.code}
                          </Dropdown.Item>
                        ) : (
                          <Dropdown.Item
                            // onClick={() => {
                            //   setCoinReceive(coin.code);
                            // }}
                            onClick={() => handleCoinReceive(coin.code)}
                            key={i}
                          >
                            <img
                              src={`${process.env.REACT_APP_COIN_ICON_URL+(coin.code.toUpperCase())}.png`}
                              alt={coin.code}
                            />
                            {coin.name} {coin.code}
                          </Dropdown.Item>
                        )
                      )}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          {is_show_receive_asset?(
            <>
              {show_sub_asset_receive? (
                <div className="form-group">
                  <label className="mr-sm-2">Network</label>
                  <div className="input-group mb-3">
                    <Dropdown style={{width:'50%', flexGrow: 'unset'}}>
                      <Dropdown.Toggle variant="" id="dropdown-basic">
                        <div style={{ minHeight: "25px" }}>
                          {sub_coin_receive ? (
                            <>
                              <img
                                src={`${process.env.REACT_APP_COIN_ICON_URL+(coin_receive.toUpperCase())}.png`}
                                className="crypto-img mr-3"
                                alt=""
                              />
                              {sub_coin_receive}
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <div className="dropdown-menu-inner" style={{ zIndex: 999 }}>
                          {sub_asset_receive.map((coin, i) => (
                            <Dropdown.Item
                              onClick={() => handleSubCoinReceive(coin)}
                              key={i}
                            >
                              <img
                                src={`${process.env.REACT_APP_COIN_ICON_URL+(coin_receive.toUpperCase())}.png`}
                                alt={coin_receive}
                              />
                              {coin.name}
                            </Dropdown.Item>
                          ))}
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              )
              :(
                <div className="input-group">
                  <p className="mb-0">
                    <span>
                      <span>Network: {sub_coin_receive_name}</span> <span role="presentation" onClick={handleShowReceiveAssetDropDown} style={{ cursor:'pointer', textDecoration:'underline' }}>Click to change</span>
                    </span>
                  </p>
                </div>
              )}
            </>
          ):''}
          {amount_receive > receive_maximum ? (
            <p className="notify_limitamount">
              Maximum receive amount: {receive_maximum} {coin_receive}
            </p>
          ) : (
            <></>
          )}
          {loaded ? (
            rate ? (
              <>
                <>
                  <Button
                    className="btn btn-success btn-block"
                    onClick={() => {
                      goToChoosePage();
                    }}
                    disabled={
                      amount_receive > receive_maximum ||
                      send_minimum > amount_send
                    }
                    style={{width:'100%'}}
                  >
                    Swap
                  </Button>
                </>
              </>
            ) : (
              <>
                <div className="text-center">
                  <h5>Can not trade this pair for now!</h5>
                </div>
              </>
            )
          ) : (
            <>
              <Link to={"/#"} className="btn btn-info btn-block">
                Loading
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
