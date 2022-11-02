/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import { create } from 'axios';

const API = create({
  baseURL: process.env.REACT_APP_API_URL,
});

const CryptiswapAPI = create({
  baseURL: process.env.REACT_APP_CRYPTISWAP_API_URL,
});

const swapApi = {};

swapApi.getSupportedAssets = async () => {
  try {
    const res = await CryptiswapAPI.post('get_coins');
    return res;
  } catch (error) {
    return error;
  }
};

swapApi.getCoinRealPrice = async (data) => {
  try {
    const datas = {
      coin_send: data.coinfrom,
      coin_receive: data.cointo,
    };
    const res = await CryptiswapAPI.post('get_full_rate', datas);
    return res;
  } catch (error) {
    return error;
  }
};

swapApi.getSubAssets = async (asset) => {
  try {
    const res = await API.get('/swap/find-child-assets-by-asset-id', {
      params: {
        asset
      }
    });
    return res;
  } catch (error) {
    return error;
  }
};

swapApi.checkValidWalletAddress = async (data) => {
  try {
    const res = await API.post('/swap/check-valid-wallet-address', data);
    return res;
  } catch (error) {
    return error;
  }
};

swapApi.getPlaceOrder = async (data) => {
  try {
    const res = await API.post('/swap/create-order', data);
    return res;
  } catch (error) {
    return error;
  }
};

swapApi.getOrderDetails = async (data) => {
  try {
    const res = await API.post('/swap/order', data);
    return res;
  } catch (error) {
    return error;
  }
};

swapApi.getTransactionDetails = async (data) => {
  try {
    const res = await API.get('/swap/transaction-details', { params: { destId: data.destId, assets: data.assets, destAddress: data.destAddress } });
    return res;
  } catch (error) {
    return error;
  }
};

swapApi.getUpdateTransactionStatus = async (data) => {
  try {
    const res = await API.post('/swap/update-order-status', data);
    return res;
  } catch (error) {
    return error;
  }
};

swapApi.updateOrder = async (data) => {
  try {
    const res = await API.post('/swap/update-order', data);
    return res;
  } catch (error) {
    return error;
  }
};

swapApi.getDepositExchange = async (data) => {
  try {
    const res = await API.post('/swap/deposit-exchange', data);
    return res;
  } catch (error) {
    return error;
  }
};

swapApi.getTransactionDetail = async (data) => {
  try {
    const res = await API.get('/swap/fetch-transaction', { params: { transId: data } });
    return res;
  } catch (error) {
    return error;
  }
};

swapApi.updateOrderFURA = async (data) => {
  try {
    const res = await API.post('/swap/update-order-fura', data);
    return res;
  } catch (error) {
    return error;
  }
};

swapApi.receiveTransaction = async (data) => {
  try {
    const res = await API.post('/swap/receive-asset', data);
    return res;
  } catch (error) {
    return error;
  }
};

swapApi.updateReceiveTransactionTxHash = async (data) => {
  try {
    const res = await API.post('/swap/update-order-txhash', data);
    return res;
  } catch (error) {
    return error;
  }
};

swapApi.transfer = async (data) => {
  try {
    const res = await API.post('/swap/transfers', data);
    return res;
  } catch (error) {
    return error;
  }
};

swapApi.updateOrderSendAmount = async (data) => {
  try {
    const res = await API.post('/swap/update-order-send-amount', data);
    return res;
  } catch (error) {
    return error;
  }
};

export { swapApi };
