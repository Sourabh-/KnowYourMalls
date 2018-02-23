import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text, ToastAndroid, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SearchBar, Button } from 'react-native-elements'

import { httpGet, httpPost } from '../../utility/ApiWrapper';
import config from '../../utility/config.json';
import styles from '../../assets/styles/style';
import Toolbar from '../../components/Toolbar';
import StoresList from '../../components/StoresList';

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
			stores: []
		};
	}

	handleSearch = () => {
		Keyboard.dismiss();
		if(!this.state.searchText) {
			//DISPLAY TOAST MESSAGE
			ToastAndroid.show("Enter some text...", ToastAndroid.SHORT);
		} else {
			httpGet(config.server.host + ":" + config.server.port + config.endpoints.searchStores + this.props.city.cityId + "?tags=" + this.state.searchText)
		  	.then((stores) => {
		  		this.setState({
		  			stores
		  		})
		  	})
		  	.catch((err) => {
		  		console.log(err);
		  		ToastAndroid.show("No results found!", ToastAndroid.SHORT);
		  	})
		}
	}

	handleDetailsNavigate = (store) => {
		let mall = {};
		if(this.props.malls && this.props.malls.length) {
			for(let i=0; i< this.props.malls.length; i++) {
				if(this.props.malls[i].mallId == store.mallId) {
					mall = this.props.malls[i];
					break;
				}
			}
		}

		Actions.StoreDetails({
			store,
			mall,
			city: this.props.city
		});
	}

	handleTextChange = (searchText) => {
		this.setState({
			searchText
		})
	}

	render() {
		let { city } = this.props;
		let { handleSearch, handleTextChange, handleDetailsNavigate } = this;
		let { stores } = this.state;

		return (
			<View>
				<Toolbar 
					title={ `Search- ${city.city}` }
					leftIcon="arrow-back"
				  	leftIconType="material"
				  	handleMenuIconClicked={Actions.pop}/>

				<SearchBar
					ref={search => this.searchBar = search}
					containerStyle={styles.searchContainer}
					round
					platform="android"
					placeholder='Search...'
					onChangeText={handleTextChange}
					autoFocus={true} />

				<Button
					containerStyle={styles.searchBtnContainer}
					buttonStyle={styles.searchBtn}
					text="Search"
					onPress={handleSearch}/>
				<StoresList 
					handleDetailsNavigate={handleDetailsNavigate} 
					stores={stores}
					comingSoonNotReq={true}
					categoriesFilter={[]}/>
			</View>
		);
	}
}