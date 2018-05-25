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
			    			{ name: "Accessories", key: 9 },
			    			{ name: "Bags", key: 25 },
			    			{ name: "Bar", key: 15 },
			    			{ name: "Books", key: 8 },
			    			{ name: "Bowling", key: 30 },
			    			{ name: "Cosmetics", key: 17 },
			    			{ name: "Design", key: 18 },
			    			{ name: "Electronics" , key: 6},
			    			{ name: "Eyewear", key: 19 },
			    			{ name: "Fashion", key: 3 },
					    	{ name: "Food", key: 1 },
					    	{ name: "Footwear", key: 2 },
					    	{ name: "Fragrance", key: 22 },
					    	{ name: "Gaming", key: 12 },
					    	{ name: "Gifts", key: 13 },
					    	{ name: "Home Furnishings", key: 21 },
					    	{ name: "Jewellery", key: 10 },
					    	{ name: "Kitchen Essentials", key: 26 },
					    	{ name: "Miscellaneous", key: 23 },
					    	{ name: "Mothercare", key: 28 },
					    	{ name: "Rock Climbing", key: 27 },
					    	{ name: "Salon & Spa", key: 24 },
					    	{ name: "Sportswear", key: 11 },
					    	{ name: "Stationary", key: 29 },
					    	{ name: "Super market", key: 16 },
					    	{ name: "Telecom", key: 14 },
					    	{ name: "Toy Store", key: 20 }
					      ], 
			    	title: "CATEGORY"
			    }
			  ]}
			/>
		</Overlay>
	);
}

export default FilterOverlay;