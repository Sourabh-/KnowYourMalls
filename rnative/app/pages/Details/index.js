import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../../assets/styles/style';
import Toolbar from '../../components/Toolbar';
import StoresList from '../../components/StoresList';
import FilterOverlay from '../../components/FilterOverlay';
import { httpGet, httpPost } from '../../utility/ApiWrapper';
import config from '../../utility/config.json';

export default class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isPopupOpen: false,
			filteredCheckboxes: {},
			categoriesFilter: [],
			stores: [],
			isAjaxDone: false
		}
	}

	componentDidMount() {
		let { mall, city } = this.props;
		httpGet(config.server.url + config.endpoints.getStores + mall.mallId)
		.then((stores) => {
			this.setState({
				stores,
				isAjaxDone: true
			})
		})
		.catch((err) => {
			console.log(err);
			this.setState({ isAjaxDone: true });
		})
	}

	openFilterPopup = () => {
		this.setState({
			isPopupOpen: !this.state.isPopupOpen
		})
	}

	handleCheckboxClick = (itemName) => {
		let val = this.state.filteredCheckboxes[itemName] ? false : true;
		let categoriesFilter = [...this.state.categoriesFilter];
		if(val) {
			categoriesFilter.push(itemName);
		} else {
			categoriesFilter.splice(categoriesFilter.indexOf(itemName), 1);
		}

		this.setState({
			filteredCheckboxes: {
				...this.state.filteredCheckboxes,
				[itemName]: val
			},
			categoriesFilter
		});
	}

	handleDetailsNavigate = (store) => {
		Actions.StoreDetails({
			store,
			mall: this.props.mall,
			city: this.props.city
		});
	}

	render() {
		let { city, mall } = this.props;
		let { openFilterPopup, handleCheckboxClick, handleDetailsNavigate } = this;
		let { isPopupOpen, filteredCheckboxes, stores, categoriesFilter, isAjaxDone } = this.state;

		return (
			<View>
				<Toolbar 
					title={mall.mall}
					leftIcon="arrow-back"
				  	leftIconType="material"
				  	handleMenuIconClick={Actions.pop}
				  	rightIcon="filter"
				  	rightIconType="material-community"
				  	handleRightIconClick={openFilterPopup}/>
				
				<FilterOverlay 
					isPopupOpen={isPopupOpen} 
					openFilterPopup={openFilterPopup}
					filteredCheckboxes={filteredCheckboxes} 
					handleCheckboxClick={handleCheckboxClick} />
				<StoresList 
					handleDetailsNavigate={handleDetailsNavigate} 
					stores={stores}
					isAjaxDone={isAjaxDone}
					categoriesFilter={categoriesFilter}/>
			</View>
		);
	}
}