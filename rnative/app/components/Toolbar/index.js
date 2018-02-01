import React from 'react';
import { Header, Icon } from 'react-native-elements';
import styles from '../../assets/styles/style';

const Toolbar = ({ title, handleMenuIconClicked }) => {
	return (
		<Header
            statusBarProps={{ barStyle: 'light-content', backgroundColor: '#007f00' }}
            leftComponent={{ icon: 'menu', color: '#fff', underlayColor: '#1CAE21', onPress: handleMenuIconClicked }}
            centerComponent={{ text: title, style: { color: '#fff' } }}
            rightComponent={
               <Icon
                    type="material-community"
                    name="dots-vertical"
                    color="#FFFFFF"
               />
            }
            backgroundColor="#1CAE21"
            outerContainerStyles={{height: 56}}
          />
	)
}

export default Toolbar;