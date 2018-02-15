import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { Overlay, Icon, CheckBox } from 'react-native-elements';
import styles from '../../assets/styles/style';

const FilterOverlay = ({isPopupOpen, openFilterPopup, filteredCheckboxes, handleCheckboxClick}) => {

	const listSeparator = () => {
			return (
				<View
				  style={{
				      borderBottomColor: 'black',
				      borderBottomWidth: 0.5
				  }}
				  ></View>
			)
	}

	const filterSectionItem = (item) => {
		return (
			<View style={styles.filterCategoryText}>
				<CheckBox
				  title={item.name}
				  checked={filteredCheckboxes[item.name]}
				  containerStyle={styles.checkboxContainer}
				  onPress={() => handleCheckboxClick(item.name)}
				/>
			</View>
		)
	}

	const filterSection = (section) => {
		return (
			<View style={styles.filterCategoryHeader}>
				<Text style={styles.filterCategoryHeaderText}>{section.title}</Text>
			</View>
		)
	}

	return (
		<Overlay
		  isVisible={isPopupOpen}
		  containerStyle={styles.filterOverlay}
		  overlayStyle={styles.filterOverlayView}
		  >
		  <View style={styles.closeButton}>
		  	  <Text
		  	  	style={styles.filterHeading}>Filter</Text>
		  	  <View style={styles.filterHeadingIcon}>
		  	  	<Icon
				  	name="close-circle"
				  	type="material-community"
				  	onPress={openFilterPopup}
				  	color="#E0E0E0"
				  	/>
		  	  </View>
		  </View>
		  <SectionList
		  	  style={styles.filterListContainer}
			  renderItem={({item, i}) => filterSectionItem(item)}
			  renderSectionHeader={({section}) => filterSection(section)}
			  ItemSeparatorComponent={() => listSeparator()}
			  sections={[
			    {
			    	data: [
					    	{ name: "Restaurants", key: 1 },
					    	{ name: "Footwear", key: 2 },
					    	{ name: "Clothes", key: 3 },
					    	{ name: "Super Markets", key: 4 },
					    	{ name: "Bar" , key: 5},
					    	{ name: "Electronics" , key: 6},
					    	{ name: "Smartphones & Tablets", key: 7 },
					    	{ name: "Books", key: 8 },
					    	{ name: "Watches", key: 9 }
			    	], 
			    	title: "CATEGORY"
			    }
			  ]}
			/>
		</Overlay>
	);
}

export default FilterOverlay;