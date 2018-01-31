import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text, ToolbarAndroid } from 'react-native';

export default class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		const navigationView = (
			<View style={{flex: 1, backgroundColor: 'grey'}}>
		      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
		    </View>
		);

		return (
			<DrawerLayoutAndroid
			  ref={(drawer) => this.props.mapDrawer(drawer)}
		      drawerWidth={200}
		      drawerPosition={DrawerLayoutAndroid.positions.Left}
		      drawerBackgroundColor="grey"
		      renderNavigationView={() => navigationView}>
		      <View style={{flex: 1, alignItems: 'center'}}>
		        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
		        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
		      </View>
		    </DrawerLayoutAndroid>
		);
	}
}