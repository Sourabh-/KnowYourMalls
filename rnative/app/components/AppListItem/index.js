import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from '../../assets/styles/style';

export default class AppListItem extends React.PureComponent {
	render() {
		let { title, onPress, subTitle, image, text } = this.props;
		
		return (
			<TouchableOpacity onPress={onPress}>
				<View style={styles.appListItem}>
					{image && <View style={styles.appListItemImageContainer}>
						<Image 
							source={image}
							style={styles.appListItemImage}
						/>
					</View>}
					<View style={styles.appListItemTextContainer}>
						<Text>{title}</Text>
						{subTitle && <Text style={styles.appListItemSubTitle}>{subTitle}</Text>}
						{text && <Text style={styles.appListItemText}>{text}</Text>}
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}