import React from 'react';
import { ScrollView, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import styles from '../../assets/styles/style';

const StoresList = ({ handleDetailsNavigate, stores, isAjaxDone, categoriesFilter }) => {

	const getComingSoonText = () => {
		return isAjaxDone ? "Coming Soon..." : "Loading...";
	};

	return (
		<ScrollView>
			{
				stores && stores.length 
				? <List>
				  {
				    stores.map((item, i) => {
				    	if(!categoriesFilter.length || (categoriesFilter.length && categoriesFilter.indexOf(item.category) > -1))
					    	return (
						      <ListItem
						      	roundAvatar
						        key={i}
						        title={item.store}
						        subtitle={item.category}
						        subtitleStyle={styles.mallListSubtitle}
						        avatar={require("../../assets/images/store.png")}
						        avatarStyle={{
						        	backgroundColor: "#FFFFFF"
						        }}
						        containerStyle={styles.listItem}
						        onPress={() => handleDetailsNavigate(item)}
						      />
					    	)
				   	})
				  }
				</List> 
				: <Text style={styles.comingSoonText}>
					{getComingSoonText()}
				  </Text>
			}
		</ScrollView>
	)
}

export default StoresList;