import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Toolbar from '../../components/Toolbar';
import MallsList from '../../components/MallsList';
import styles from '../../assets/styles/style';

export default class Home extends Component {
	handleOnRowPress = (mall) => {
		Actions.Details({
			city: this.props.getSelectedCity(),
			mall
		});
	}

	handleSearchPress = () => {
		Actions.Search({
			city: this.props.getSelectedCity(),
			malls: this.props.getMalls()
		});
	}

	render() {
		let { handleMenuIconClicked, getSelectedCity, getMalls } = this.props;
		let { handleOnRowPress, handleSearchPress } = this;

		return (
			<View>
			  <Toolbar 
			  	title={getSelectedCity().city || "Know Your Malls"} 
			  	handleMenuIconClicked={handleMenuIconClicked}
			  	leftIcon="menu"
			  	leftIconType="material"
			  	rightIcon="dots-vertical"
			  	rightIconType="material-community"/>
		      {!getSelectedCity() ?
		      	<View style={styles.initialText}>
		      		<Text style={styles.homeText}>
	      				Hi There! 
	      				{"\n"} 
	      				To Get Started Please Select City From Sidemenu!
		      		</Text>
		      	</View> :
		      	<MallsList 
		      		selectedCity={getSelectedCity} 
		      		handleOnRowPress={handleOnRowPress} 
		      		handleSearchPress={handleSearchPress} 
		      		malls={getMalls()}/>
		       }
		    </View>
		);
	}
}