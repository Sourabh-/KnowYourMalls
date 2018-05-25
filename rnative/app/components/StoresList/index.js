import React from 'react';
import { ScrollView, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import AppListItem from '../AppListItem';
import styles from '../../assets/styles/style';

const StoresList = ({ handleDetailsNavigate, stores, isAjaxDone, categoriesFilter, comingSoonNotReq }) => {

	let _stores = !categoriesFilter.length ? JSON.parse(JSON.stringify(stores)) : stores.filter((store) => {
		return (categoriesFilter.indexOf(store.category) > -1);
	});

	const getComingSoonText = () => {
		return isAjaxDone ? "Coming Soon..." : "Loading...";
	};

	_renderItem = ({item}) => {
		return (
			<AppListItem
				title={item.store}
				subTitle={item.category}
				text={item.floor ? `${item.floor} Floor` : ''}
				image={item.image ? { uri: item.image } : require("../../assets/images/store.png")}
				onPress={() => handleDetailsNavigate(item)}
			/>
		)
	}

	return (
		<ScrollView>
			{
				stores && stores.length 
				? <View>
					<FlatList
						style={styles.storeFlatList}
					  	data={_stores || []}
					  	keyExtractor={(item, index) => item.storeId}
					  	renderItem={this._renderItem}
					/>
				</View>
				: <Text style={styles.comingSoonText}>
					{comingSoonNotReq ? " " : getComingSoonText()}
				  </Text>
			}
		</ScrollView>
	)
}

export default StoresList;