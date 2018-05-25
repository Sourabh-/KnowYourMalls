import React, { Component } from 'react';
import {Router, Stack, Scene, ActionConst} from 'react-native-router-flux';
import Home from './pages/Home';
import Details from './pages/Details';
import Search from './pages/Search';
import StoreDetails from './pages/StoreDetails';

export default class Routes extends Component {
	render() {
		let { handleMenuIconClick, getSelectedCity, getMalls } = this.props;
		
		return (
			<Router>
				<Scene key="root" hideNavBar={true}>
		          <Scene 
		          	key="Home" 
		          	component={Home} 
		          	title="Home" 
		          	initial={true} 
		          	handleMenuIconClick={handleMenuIconClick}
		          	getSelectedCity={getSelectedCity}
		          	getMalls={getMalls}/>
		          <Scene key="Details" component={Details} title="Details" />
		          <Scene key="Search" component={Search} title="Search" />
		          <Scene key="StoreDetails" component={StoreDetails} title="Store Details" />
		        </Scene>
			 </Router>
		)
	}
}
