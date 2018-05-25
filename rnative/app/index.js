import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text, Button, AsyncStorage } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './pages/Home';
import Menu from './components/Menu';
import Routes from './Routes';
import AppWelcome from './components/AppWelcome';
import { httpGet, httpPost } from './utility/ApiWrapper';
import config from './utility/config.json';

export default class Index extends Component {
  constructor(props) {
	super(props);
	this.state = {
		isDrawerOpen: false,
		selectedCity: '',
		cities: [],
		malls: [],
    isInitialized: true
	};
  }

  componentDidMount() {
    AsyncStorage.getItem("isInitialized", (err, result) => {
      if(err) {
        SplashScreen.hide();
        console.log(err);
      } else {
        if(!result) {
          this.setState({ isInitialized: false }, () => {
            SplashScreen.hide();
            this.initialize();
          })
        } else {
          SplashScreen.hide();
          this.initialize();
        }
      }  
    })
  }

  initialize = () => {
    httpGet(config.server.url + config.endpoints.getCities)
    .then((cities) => {
      this.setState({
        cities
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  updateIsInitialized = () => {
    AsyncStorage.setItem('isInitialized', 'true', (err) => { console.log(err); });
    this.setState({ isInitialized: true });
  }

  handleMenuIconClick = () => {
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
	httpGet(config.server.url + config.endpoints.getMalls + city.cityId)
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
  	const {  handleMenuIconClick, handleCityClick, getSelectedCity, getMalls, updateIsInitialized } = this;
	  let { selectedCity, cities, isInitialized } = this.state;

	  const navigationView = (
		  <Menu handleCityClick={handleCityClick} cities={cities}/>
	  );

    console.log(isInitialized);
    if(isInitialized) {
      return (
        <DrawerLayoutAndroid
          ref={(drawer) => this.drawer = drawer}
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}
          onDrawerClose={() => { this.setState({ isDrawerOpen: false }) }}
          onDrawerOpen={() => { this.setState({ isDrawerOpen: true }) }}>
          <Routes handleMenuIconClick={handleMenuIconClick} getSelectedCity={getSelectedCity} getMalls={getMalls}/>
        </DrawerLayoutAndroid>
      );
    } else {
      return (<AppWelcome update={updateIsInitialized}/>);
    }
  }
}