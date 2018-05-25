import React from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import AppListItem from '../AppListItem';
import styles from '../../assets/styles/style';

const MallsList = ({ handleOnRowPress, malls }) => {

	_renderItem = ({item}) => (
		<AppListItem
			title={item.mall}
			subTitle={item.location}
			image={item.image ? { uri: item.image } : require("../../assets/images/mall.png")}
			onPress={() => handleOnRowPress(item)}
		/>
	)

	return (
		<ScrollView>
			  <FlatList
			  	data={malls || []}
			  	keyExtractor={(item, index) => item.mallId}
			  	renderItem={this._renderItem}
			  />
		</ScrollView>
	);
}

export default MallsList;