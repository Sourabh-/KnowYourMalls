import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import styles from '../../assets/styles/style';

export default class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		const list = [
		  {
		    name: 'Bangalore'
		  },
		  {
		    name: 'Pune'
		  },
		  {
		    name: 'Mumbai'
		  },
		  {
		    name: 'Chennai'
		  },
		  {
		    name: 'Kolkata'
		  },
		  {
		    name: 'Delhi'
		  }
		]

		return (
			<View style={styles.menuContainer}>
		      <Text style={styles.menuHeading}>Cities</Text>
		      <List>
				  {
				    list.map((item, i) => (
				      <ListItem
				      	roundAvatar
				        key={i}
				        title={item.name}
				        hideChevron={true}
				        avatar={require("../../assets/images/city.png")}
				        avatarStyle={{
				        	backgroundColor: "#FFFFFF"
				        }}
				        containerStyle={styles.listItem}
				      />
				    ))
				  }
			  </List>
		    </View>
		);
	}
}