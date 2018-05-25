import React, { Component } from 'react';
import { Text } from 'react-native';
import AppIntro from 'react-native-app-intro';

export default class AppWelcome extends Component {

    doneBtnHandle = () => {
    	this.props.update();
    }

    nextBtnHandle = (index) => {}

    onSlideChangeHandle = (index, total) => {}

    render() {
        const pageArray = [{
            title: 'Who am I?',
            description: 'Hi! I am Kym, I have information about almost all the malls in your city.',
            img: require('../../assets/images/robot.png'),
            imgStyle: {
                height: 160,
                width: 160,
            },
            backgroundColor: '#66bb6a',
            fontColor: '#fff',
            level: 10,
        }, {
            title: 'Why me ?',
            description: 'I can help you find stores & shops you are looking for in shopping malls.',
            img: require('../../assets/images/shopping-mall.png'),
            imgStyle: {
                height: 150,
                width: 150,
            },
            backgroundColor: '#66bb6a',
            fontColor: '#fff',
            level: 10,
        }, {
            title: "Let's get started!",
            img: require('../../assets/images/navigation.png'),
            imgStyle: {
                height: 150,
                width: 150,
            },
            backgroundColor: '#66bb6a',
            fontColor: '#fff',
            level: 10,
        }];

        return ( 
        	<AppIntro 
        		onNextBtnClick = { this.nextBtnHandle } 
        		onDoneBtnClick = { this.doneBtnHandle } 
        		onSkipBtnClick = { this.doneBtnHandle } 
        		onSlideChange = { this.onSlideChangeHandle } 
        		pageArray = { pageArray }
                doneBtnLabel = { 'Sure' }
            />
        );
    }
}