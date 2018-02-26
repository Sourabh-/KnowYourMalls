import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Tile } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import styles from '../../assets/styles/style';
import Toolbar from '../../components/Toolbar';

export default class StoreDetails extends Component {
	render() {
		let { store, city, mall } = this.props;

		return (
			<View>
				<Toolbar 
					title={`${store.store}`}
					leftIcon="arrow-back"
				  	leftIconType="material"
				  	handleMenuIconClicked={Actions.pop}/>
		          	<Tile
					  imageSrc={require('../../assets/images/storeLarge.png')}
					  title={store.store}
					  imageContainerStyle={styles.storeImageContainer}
					  height={500}>
					  <View>
					    <Text style={styles.locationText}>
					    	{store.floor ? `${item.floor} Floor\n` : ""}
					    	{mall.mall}, {mall.location} {"\n"}
					    	<Text>Category-</Text> {store.category}
					    </Text>
					    <Text style={styles.storeDescription}>
					    	{store.description}
					    </Text>
					  </View>
					</Tile>

			</View>
		)
	}
}