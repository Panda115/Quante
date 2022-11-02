import React from 'react'

export default function TodayStats() {
  return (
    <>
      <div className="today-stats mb15">
        <div className="row">
          <div className="col-md-2 col-lg-2 col-12">
            <div className="row">
              <div className="col-12 stats-content">
                <h6>BTC/USDT</h6>
                <span className="stats-type"><i class="cc BTC"></i>BitCoin</span>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="stats-item col-4 col-sm-4 col-md-4 col-lg-2 mb15">
                <div class="stats-value">32,410.23</div>
                <div class="stats-desc">$32,401.87</div>
              </div>
              <div className="stats-item col-4 col-sm-4 col-md-4 col-lg-2 mb15">
                <div class="stats-desc">24h Change</div>
                <div class="stats-value">-40.34 -0.07%</div>
              </div>
              <div className="stats-item col-4 col-sm-4 col-md-4 col-lg-2 mb15">
                <div class="stats-desc">24h High</div>
                <div class="stats-value">32,954.24</div>
              </div>
              <div className="stats-item col-4 col-sm-4 col-md-4 col-lg-2 mb15">
                <div class="stats-desc">24h Low</div>
                <div class="stats-value">31,554.24</div>
              </div>
              <div className="stats-item col-4 col-sm-4 col-md-4 col-lg-2 mb15">
                <div class="stats-desc">24h Volume (BTC)</div>
                <div class="stats-value">32,954.24</div>
              </div>
              <div className="stats-item col-4 col-sm-4 col-md-4 col-lg-2 mb15">
                <div class="stats-desc">24h Volume (USDT)</div>
                <div class="stats-value">1,505,948,294.54</div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
        
      </div>
    </>
  )
}
