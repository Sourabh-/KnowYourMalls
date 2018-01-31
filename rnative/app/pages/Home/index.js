import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import Menu from '../Menu';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			drawer: ''
		};
	}

	handleMenuIconClicked = () => {
    	this.state.drawer.openDrawer();
  	}

  	mapDrawer = (drawer) => {
  		if(!this.state.drawer)
	  		this.setState({
	  			drawer
	  		})
  	}

	render() {
		const {  handleMenuIconClicked, mapDrawer } = this;

		return (
			<View>
		      <Toolbar title={"Know Your Malls"} handleMenuIconClicked={handleMenuIconClicked}/>
		      <Menu mapDrawer={mapDrawer}/>
		    </View>
		);
	}
}