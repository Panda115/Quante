import axios from 'axios';
//import { APICore } from '../helpers/api/apiCore';
//const api = new APICore();
let headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
}
export const getInstruments = async () => {
    let config = {
        method: 'get',
        url: `${process.env.REACT_APP_MARKET_API}instruments`,
        params:{},
        headers:headers
    };
    /*const baseUrl = `${process.env.REACT_APP_MARKET_API}instruments`;
    let res = api.create(`${baseUrl}`, {}).then((response) => {
        console.log(['res',response])
    })
    .catch((e) => {
        console.log(e)
    });*/
    
    const response = await axios(config);
    console.log([config,response])
    if(response.status === 200) return response.data;
    else return [];
}
export const getInstrumentHistory = async (params) => {
    let config = {
        method: 'get',
        url: `${process.env.REACT_APP_MARKET_API}instruments/${params.instrument}/history`,
        params:params,
        headers:headers
    };
    const response = await axios(config);
    if(response.status === 200) return response.data;
    else return {data:[]};
}
export const getTicker = async () => {
    let config = {
        method: 'get',
        url: `${process.env.REACT_APP_MARKET_API}api/v2/marketdata/ticker`,
        params:{},
        headers:headers
    };
    const response = await axios(config);
    if(response.status === 200) return response.data;
    else return [];
}
export const getRates = async (params) => {
    let config = {
        method: 'get',
        url: `${process.env.REACT_APP_MARKET_API}api/v2/rates/${params.from}/${params.to}`,
        params:{},
        headers:headers
    };
    const response = await axios(config);
    if(response.status === 200) return response.data;
    else return {data:[]};
}