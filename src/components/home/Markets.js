import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { getTicker } from "../../actions/market";
import { motion } from "framer-motion/dist/framer-motion";
import { useHistory } from "react-router-dom";
function Markets() {
  const [tokens, setTokens] = useState(["btc", "ltc", "bch", "eth"]);
  const tokenNames = ["Bitcoin", "Litecoin", "Bitcoin Cash", "Ethereum"];
  const [rates, setRates] = useState([]);
  const history = useHistory();
  useEffect(() => {
    loadData();
  }, [tokens]);
  async function loadData() {
    let rs = [];
    let tikers = await getTicker();
    for (let t of tokens) {
      if (tikers.filter((tt) => tt.instrument === t + "_usdt").length) {
        rs.push(tikers.filter((tt) => tt.instrument === t + "_usdt")[0]);
      }
    }
    setRates(rs);
    setTimeout(() => {
      loadData();
    }, 5000);
  }
  return (
    <>
      <div className="price-grid section-padding" id="price">
        <div className="container">
          <h2><span className="heading-link" onClick={()=>history.push('/markets')}>Markets</span></h2>
          <div className="row">
            {rates.map((rate, index) => (
              <motion.div
                className={
                  "col-xl-3 col-lg-4 col-md-6 col-sm-6 " +
                  (0.7 + (index * 3) / 10)
                }
                key={index}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7 + (index * 3) / 10 }}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: "300px",
                  },
                  visible: {
                    opacity: 1,
                    x: "0px",
                  },
                }}
              >
                <div className="card" style={{ padding: "0px 15px" }}>
                  <div className="card-header">
                    <div className="media">
                      <span>
                        <i className={"cc " + tokens[index].toUpperCase()}></i>
                      </span>
                      <div className="media-body">{tokenNames[index]}</div>
                    </div>
                    <p className="mb-0"> 24h</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div
                        className="col-12"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "20px",
                        }}
                      >
                        <h3 style={{ margin: "0" }}>
                          $
                          {new String(rate.close).replace(
                            /(\d)(?=(\d\d\d)+(?!\d))/g,
                            "$1,"
                          )}
                        </h3>
                        <span
                          className={
                            rate.close < rate.open
                              ? "text-danger"
                              : "text-success"
                          }
                        >
                          {(
                            ((rate.close - rate.open) * 100) /
                            rate.open
                          ).toFixed(2)}
                          %
                        </span>
                        {/*<div className="chartarea">
                            <BtcChart />
                          </div>*/}
                      </div>
                    </div>
                    <div class="text-center">
                      <a
                        onClick={() => {
                          let url =
                            "https://trade.myquantex.com/trade/view/" +
                            tokens[index] +
                            "_usdt";
                          window.location.href = url;
                        }}
                      >
                        <Button variant="primary">Trade</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* <motion.div
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  whileInView="visible"
                  transition={{ duration: 0.6 }}
                  initial="hidden"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: "300px",
                    },
                    visible: {
                      opacity: 1,
                      y: "0px",
                    },
                  }}
                > */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Markets;
