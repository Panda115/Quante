import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { getInstruments,getInstrumentHistory, getTicker } from '../actions/market';
export default function MarketsList() {
  const [instruments,setInstruments]=useState([]);
  const [tokens,setTokens]=useState(["btc","eth","usdt"]);
  const [tradeList,setTradeList]=useState([]);
  const [starList,setStarList]=useState([]);
  useEffect(async ()=>{
    console.log('remove aos')
    await getInstruments().then((res) => {
      setInstruments(res);
    })
    .catch(() => {
    });
  },[]);
  useEffect(()=>{
    if(instruments?.length)loadData();
  },[instruments]);
  useEffect(()=>{
    //console.log(["starList",starList])
  },[starList]);
  async function loadData(){
    //var endDate=new Date();
    //var startDate=new Date(endDate.getTime()-24 * 3600 * 1000);
    //var oldDate=new Date(startDate.getTime()-startDate.getHours() * 3600 * 1000-startDate.getMinutes() * 60 * 1000-startDate.getSeconds() * 1000);
    let trades=[];
    for (var token of tokens) {
      let trade=[];
      let tickers = await getTicker();
      let filtered_instruments = instruments.filter((instrument)=>instrument.includes('_'+token));
      for (var instrument of filtered_instruments) {
        /*
        endDate=new Date();
        let res = await getInstrumentHistory({
          instrument:instrument,
          startDate:startDate,
          endDate:endDate,
          type:'15m',
          count:1000
        });
        let detail={
          instrument:instrument,
          high:0,
          low:0,
          volume:0
        };
        let minv=-1,maxv=0;
        detail.volume=0;
        res?.data.forEach((t)=>{
          if(minv==-1||minv>t.low)minv=t.low;
          if(maxv<t.high)maxv=t.high;
          detail.volume+=t.volume;
        });
        detail.low=minv;
        detail.high=maxv;

        res = await getInstrumentHistory({
          instrument:instrument,
          startDate:oldDate,
          endDate:endDate,
          type:'15m',
          count:100
        });
        detail.price=res.data.length?res.data[res.data.length-1].open:0;
        detail.origin=res.data.length?res.data[0].open:0;
        detail.change=detail.price-detail.origin;
        detail.percentage=detail.change*100/detail.origin;
        if(instrument==='btc_usdt')console.log("price="+detail.price);

        if(minv>-1)trade.push(detail);
        */

        tickers.forEach((t)=>{
          if(instrument===t.instrument){
            t.price=t.close;
            t.origin=t.open;
            t.change=t.price-t.origin;
            t.percentage=t.change*100/t.origin;
            trade.push(t);
            if(instrument==='btc_usdt')console.log("price="+t.price);
          }
        });
      }
      trades.push(trade);
    }
    setTradeList(trades);
    setTimeout(() => {
      loadData();
    },5000);
  }
  return (
    <>
      <div className="markets pb70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="markets-pair-list">
                <Tabs defaultActiveKey="btc">
                  <Tab eventKey="favorites" title="★ Favorites">
                    <div className="table-responsive">
                      <table className="table star-active">
                        <thead>
                          <tr>
                            <th>Pairs</th>
                            <th>Coin</th>
                            <th>Last Price</th>
                            <th>Change (24H)</th>
                            <th>High (24H)</th>
                            <th>Low (24h)</th>
                            <th>Volume (24h)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {starList?.map((star,index)=>{
                            let trade=tradeList[star.tokenIndex][star.tradeIndex];
                            var token=tokens[star.tokenIndex];
                            return (
                              <tr data-href="exchange-light.html" key={index}>
                                <td>
                                  <i className="icon ion-md-star"></i> {trade.instrument.toUpperCase().replace('_','/')}
                                </td>
                                <td>
                                  {/*
                                  <img src={'img/icon/'+(trade.instrument.replace('_'+token,''))+'.png'} alt={trade.instrument.replace('_'+token,'').toUpperCase()} /> {trade.instrument.replace('_'+token,'').toUpperCase()}
                                  src={`${process.env.REACT_APP_COIN_ICON_URL+(coin_send.toUpperCase())}.png`}
                                  */}
                                  <img src={`${process.env.REACT_APP_COIN_ICON_URL+(trade.instrument.replace('_'+token,'').toUpperCase())}.png`} alt={trade.instrument.replace('_'+token,'').toUpperCase()} /> {trade.instrument.replace('_'+token,'').toUpperCase()}
                                </td>
                                <td>{trade.price}</td>
                                <td className={trade.change<0?"red":"green"}>{trade.percentage.toFixed(2)}%</td>
                                <td>{trade.high}</td>
                                <td>{trade.low}</td>
                                <td>{trade.volume.toFixed(4)}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </Tab>
                  {tokens.map((token,tindex)=>(
                    <Tab eventKey={token} title={token.toUpperCase()} key={tindex}>
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Pairs</th>
                              <th>Coin</th>
                              <th>Last Price</th>
                              <th>Change (24H)</th>
                              <th>High (24H)</th>
                              <th>Low (24h)</th>
                              <th>Volume (24h)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tradeList[tindex]?.map((trade,index)=>(
                              <tr data-href="exchange-light.html" key={index}>
                                <td>
                                  <i className={"icon ion-md-star"+(starList.filter((star)=>star.tokenIndex===tindex&&star.tradeIndex===index).length?" active":"")} onClick={()=>{
                                    let list=starList;
                                    if(starList.filter((star)=>star.tokenIndex===tindex&&star.tradeIndex===index).length){
                                      setStarList(starList.filter((star)=>!(star.tokenIndex===tindex&&star.tradeIndex===index)));
                                    }else{
                                      starList.push({
                                        tokenIndex:tindex,
                                        tradeIndex:index
                                      });
                                      setStarList(starList);
                                    }
                                  }}></i> {trade.instrument.toUpperCase().replace('_','/')}
                                </td>
                                <td>
                                  <img src={`${process.env.REACT_APP_COIN_ICON_URL+(trade.instrument.replace('_'+token,'').toUpperCase())}.png`} alt={trade.instrument.replace('_'+token,'').toUpperCase()} /> {trade.instrument.replace('_'+token,'').toUpperCase()}
                                </td>
                                <td>{trade.price}</td>
                                <td className={trade.change<0?"red":"green"}>{trade.percentage.toFixed(2)}%</td>
                                <td>{trade.high}</td>
                                <td>{trade.low}</td>
                                <td>{trade.volume.toFixed(4)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Tab>
                  ))}
                  <div className="text-center">
                  <a href="#!" className="load-more btn">
                    Load More <i className="icon ion-md-arrow-down"></i>
                  </a>
                </div>
                </Tabs>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
