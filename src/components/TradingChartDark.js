import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default function TradingChart() {
  return (
    <>
      <div className="main-chart mb15">
        <TradingViewWidget
          symbol="BINANCE:BTCUSD"
          theme={Themes.DARK}
          locale="en"
          autosize
        />
      </div>
    </>
  );
}
