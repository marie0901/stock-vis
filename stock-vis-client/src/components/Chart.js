import React from 'react';
import { connect } from 'react-redux';

import {
	HorizontalGridLines,
	VerticalGridLines,
	XAxis,
	FlexibleWidthXYPlot,
	YAxis,
	LineSeries,
	GradientDefs,
	linearGradient,

} from 'react-vis';
//import { Colors } from '../../helper';

import randomcolor from 'randomcolor';



class Chart extends React.Component {


renderSeries() {

	const stocks = this.props.stocks;

	return (
		stocks.map((stock, ind) => {
			//build chartData for the particular stock
			const chartData = [];
			const len = stock.data.length;
			for (let i = 0; i < len; i++) {
				chartData.push(
					{
						x: new Date(stock.data[i][0]).getTime(),
						y: stock.data[i][1]
					}
				)
			}

			//return <Lineseries> for the particular stock
			return (
				<LineSeries
						key = { ind }
						data={ chartData }
						style={{stroke: randomcolor(), strokeWidth: 3}}
						/>
			);
	}))

}

	render() {
		return (<div>
			<FlexibleWidthXYPlot

				height={500}
				xType="time" >
				<VerticalGridLines />
				<HorizontalGridLines />
				<XAxis />
				<YAxis />
				{this.renderSeries()}
			</FlexibleWidthXYPlot>
		</div>)
	}
}

const mapStateToProps = state => ({
	stocks: state.stocks
});

// Connect to reducer actions
 export default connect(mapStateToProps)( Chart );
