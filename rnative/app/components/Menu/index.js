import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text, List } from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from '../../assets/styles/style';

export default class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { handleCityClick, cities } = this.props;

		return (
			<View style={styles.menuContainer}>
		      <Text style={styles.menuHeading}>Cities</Text>
		      	{
				    cities.map((item, i) => (
				      <ListItem
				      	roundAvatar
				        key={i}
				        title={item.city}
				        hideChevron={true}
				        avatar={require("../../assets/images/city.png")}
				        avatarStyle={{
				        	backgroundColor: "#FFFFFF"
				        }}
				        containerStyle={styles.listItem}
				        onPress={() => handleCityClick(item)}
				      />
				    ))
				}
		    </View>
		);
	}
}