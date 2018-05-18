import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#1CAE21'
  },
  initialText: {
    top: '10%'
  },
  homeContainer: {
  	
  },
  homeText: {
  	textAlign: 'center',
  	fontSize: 25,
  	color: '#000000',
  	fontStyle: 'italic'
  },
  comingSoonText: {
    textAlign: 'center',
    fontSize: 25,
    color: '#000000',
    fontStyle: 'italic',
    marginTop: 25
  },
  menuContainer: {
  	flex: 1
  },
  menuHeading: {
  	fontSize: 20, 
  	textAlign: 'center', 
  	marginTop: 15, 
  	fontWeight: 'bold', 
  	fontStyle: 'italic',
  	color: '#000000'
  },
  listItem: {
  	
  },
  searchBox: {
    marginLeft: 20,
    marginRight: 20,
    borderLeftWidth: 1,
    borderRightWidth: 1
  },
  mallListSubtitle: {
    fontWeight: 'normal'
  },
  filterOverlay: {
    zIndex: 20
  },
  filterOverlayView: {
    paddingRight: 0,
    paddingLeft: 0
  },
  closeButton: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10
  },
  filterHeading: {
    width: '50%',
    fontSize: 18,
    color: '#000000'
  },
  filterHeadingIcon: {
    width: '50%',
    alignItems: 'flex-end'
  },
  filterListContainer: {
    marginTop: 10
  },
  filterCategoryHeader: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#E8E8E8',
    padding: 10
  },
  filterCategoryHeaderText: {
    fontWeight: 'bold'
  },
  filterCategoryText: {
    padding: 10
  },
  checkboxContainer: {
    borderWidth: 0,
    padding: 0,
    backgroundColor: '#FFFFFF'
  },
  searchContainer: {
    
  },
  storeImgSection: {
    width: '100%',
    height: 200
  },
  locationText: {
    fontSize: 18,
    marginBottom: 10
  },
  storeDescription: {
    fontSize: 16
  },
  storeImageContainer: {
    height: 150
  },
  searchBtnContainer: {
    marginTop: 10,
    padding: 5
  },
  searchBtn: {
    width: '100%'
  },
  storesSubTitleContainer: {
    marginLeft: 10
  },
  searchInputBox: {
    fontSize: 14  }
});

export default styles;