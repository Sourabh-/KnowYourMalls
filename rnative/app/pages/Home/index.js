import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import Menu from '../Menu';
import styles from '../../assets/styles/style';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDrawerOpen: false
		};
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

	render() {
		const {  handleMenuIconClicked } = this;

		const navigationView = (
			<Menu/>
		);

		return (
			<DrawerLayoutAndroid
			  ref={(drawer) => this.drawer = drawer}
		      drawerWidth={300}
		      drawerPosition={DrawerLayoutAndroid.positions.Left}
		      renderNavigationView={() => navigationView}
		      onDrawerClose={() => { this.setState({ isDrawerOpen: false }) }}
		      onDrawerOpen={() => { this.setState({ isDrawerOpen: true }) }}>
		      <Toolbar title={"Know Your Malls"} handleMenuIconClicked={handleMenuIconClicked}/>
		      <View style={styles.homeContainer}>
		      	<Text style={styles.homeText}>
		      		Hi There! 
		      		{"\n"} 
		      		To Get Started Please Select City From Sidemenu!</Text>
		      </View>
		    </DrawerLayoutAndroid>
		);
	}
}