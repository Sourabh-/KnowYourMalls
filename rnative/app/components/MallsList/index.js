import React from 'react';
import { ScrollView, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from '../../assets/styles/style';

const MallsList = ({ handleOnRowPress, handleSearchPress, malls }) => {

	return (
		<ScrollView>
			<ListItem
		      	roundAvatar
		        key={0}
		        title="Search Stores"
		        leftIcon={{name: 'search'}}
		        onPress={handleSearchPress}
		      />

			  {
			    malls.map((item, i) => (
			      <ListItem
			      	roundAvatar
			        key={i}
			        title={item.mall}
			        subtitle={item.location}
			        subtitleStyle={styles.mallListSubtitle}
			        avatar={require("../../assets/images/mall.png")}
			        avatarStyle={{
			        	backgroundColor: "#FFFFFF"
			        }}
			        containerStyle={styles.listItem}
			        onPress={() => handleOnRowPress(item)}
			      />
			    ))
			  }
		</ScrollView>
	);
}

export default MallsList;