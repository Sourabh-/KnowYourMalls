import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import AppListItem from '../AppListItem';
import styles from '../../assets/styles/style';

export default class Menu extends Component {
	constructor(props) {
		super(props);
	}

	_renderItem = ({item}) => (
		<AppListItem
			title={item.city}
			image={item.image ? { uri: item.image } : require("../../assets/images/city.png")}
			onPress={() => this.props.handleCityClick(item)}
		/>
	)

	render() {	
		let { cities } = this.props;
		return (
			<View style={styles.menuContainer}>
		      <Text style={styles.menuHeading}>Cities</Text>
		      	<FlatList
		      		data={cities || []}
		      		keyExtractor={(item, index) => item.cityId}
		      		renderItem={this._renderItem}
		      	/>
		    </View>
		);
	}
}