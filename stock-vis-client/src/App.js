import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Chart from './components/Chart';
import SideBarContainer from './components/SideBarContainer';
import './style.css';

class App extends Component {


	render() {

		return (
			<div>
			 <Header />
			 <main className= 'grey lighten-2 main'>
			 	<div className="container">
					<div className="row nobotom">
						<div className="col s12 m9">
        			<Chart />
						</div>

						<div className="col s12 m3 z-depth-1 topped">
        			<SideBarContainer />
						</div>
					</div>
				</div>
			</main>
			<Footer />
</div>

		);
	}
}

export default App;
