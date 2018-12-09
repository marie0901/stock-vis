import axios from 'axios';
import socketIOClient from "socket.io-client";
import socket from '../socket';

// Actions
const GET_STOCKS = 'GET_STOCKS';
const ADD_STOCK_DATASET = 'ADD_STOCK_DATASET';
const REMOVE_STOCK_DATASET = 'REMOVE_STOCK_DATASET';


// reducer
export default function Stocks(state = [], action) {
	switch (action.type) {
		case GET_STOCKS: {        // the case can be removed because it is the same as the default one
			return state;
		}
    case ADD_STOCK_DATASET: {
      return [...state, action.stockDataset];
    }
    case REMOVE_STOCK_DATASET: {
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index)
      ];
    }
    default: {
      return state;
    }
  }
}

export function addStockDataset(stockDataset) {
  return {
    type: ADD_STOCK_DATASET,
    stockDataset
  }
}

export function addStock(stockCode) {

	console.log('reducer addStock', stockCode);

	return (dispatch, getState) => {
		const isStockCodeExist = getState().stocks.find((item) => {
			return item.dataset_code === stockCode;
		})
		console.log('isStockCodeExist :::', isStockCodeExist);

	if (!isStockCodeExist) {
		console.log('adddinggg');

      //fetch from quandle
      axios
        .get(
          `https://www.quandl.com/api/v3/datasets/WIKI/${stockCode}.json?api_key=DyEUK4YhBTydGB7L4Xre`
        )
        .then(res => {
          dispatch(addStockDataset(res.data.dataset));
        })
				.then(socket.emit('add stock', stockCode))
        .catch(err => {
          console.error(err);
        });
        //TODO add check if the stocCode already exists in the state
    }

	}
	}
