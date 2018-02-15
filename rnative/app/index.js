import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text, Button } from 'react-native';
import Home from './pages/Home';
import Menu from './components/Menu';
import Routes from './Routes';
import { httpGet, httpPost } from './utility/ApiWrapper';
import config from './utility/config.json';

export default class Index extends Component {
  constructor(props) {
	super(props);
	this.state = {
		isDrawerOpen: false,
		selectedCity: '',
		cities: [],
		malls: []
	};
  }

  componentDidMount() {
  	httpGet(config.server.host + ":" + config.server.port + config.endpoints.getCities)
  	.then((cities) => {
  		this.setState({
  			cities
  		})
  	})
  	.catch((err) => {
  		console.log(err);
  	})
  }

  handleMenuIconClicked = () => {
	this.setState({
		isDrawerOpen: !this.state.isDrawerOpen
	}, () => {
		if(this.state.isDrawerOpen)
			this.drawer.openDrawer();
		else
			this.drawer.closeDrawer();
	})
  }

  handleCityClick = (city) => {
	this.drawer.closeDrawer();
	//Fetch all malls in this city
	httpGet(config.server.host + ":" + config.server.port + config.endpoints.getMalls + city.cityId)
  	.then((malls) => {
  		this.setState({
  			malls
  		})
  	})
  	.catch((err) => {
  		console.log(err);
  	})

	this.setState({
		selectedCity: city
	})
  }

  getMalls = () => {
  	return this.state.malls;
  }

  getSelectedCity = () => {
  	return this.state.selectedCity;
  }

  render() {
  	const {  handleMenuIconClicked, handleCityClick, getSelectedCity, getMalls } = this;
	let { selectedCity, cities } = this.state;

	const navigationView = (
		<Menu handleCityClick={handleCityClick} cities={cities}/>
	);

    return (
        <DrawerLayoutAndroid
		  ref={(drawer) => this.drawer = drawer}
	      drawerWidth={300}
	      drawerPosition={DrawerLayoutAndroid.positions.Left}
	      renderNavigationView={() => navigationView}
	      onDrawerClose={() => { this.setState({ isDrawerOpen: false }) }}
	      onDrawerOpen={() => { this.setState({ isDrawerOpen: true }) }}>
		   <Routes handleMenuIconClicked={handleMenuIconClicked} getSelectedCity={getSelectedCity} getMalls={getMalls}/>
		</DrawerLayoutAndroid>
    );
  }
}