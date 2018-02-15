import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SearchBar } from 'react-native-elements'

import styles from '../../assets/styles/style';
import Toolbar from '../../components/Toolbar';

export default class Search extends Component {
	render() {
		let { city } = this.props;
		return (
			<View>
				<Toolbar 
					title={ `Search- ${city.city}` }
					leftIcon="arrow-back"
				  	leftIconType="material"
				  	handleMenuIconClicked={Actions.pop}/>

				<SearchBar
					containerStyle={styles.searchContainer}
					round
					platform="android"
					placeholder='Search...' />
			</View>
		);
	}
}