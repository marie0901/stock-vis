import React from 'react';
import { connect } from 'react-redux';
import socket from '../socket';

import SideBar from './SideBar';
import { addStock } from '../reducers/stocks';

export class SideBarContainer extends React.Component {


	componentDidMount() {
		//socket.io
console.log('componentDidMount')
		socket.on('stock added', (stockCode) => {
			console.log('componentDidMount:::::call addstock');
			this.addStockCode(stockCode)
		})
  }

	componentWillUnmount() {
	  socket.close();
	}

	addStockCode = (stockCode) => {
		console.log('call addstockCode', stockCode);
		this.props.addStock(stockCode);
	}

	render() {
		console.log('render()',this.props.stocks);
		return (
			<div className='container'>
				<SideBar
					stocks={this.props.stocks}
					addStock={this.addStockCode}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	stocks: state.stocks
});

// Connect to reducer actions
 export default connect(mapStateToProps, { addStock })( SideBarContainer );
