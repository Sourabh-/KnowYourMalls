import React from 'react';
import { ToolbarAndroid } from 'react-native';
import styles from '../../assets/styles/style';

const Toolbar = ({ title, handleMenuIconClicked }) => {
	return (
		<ToolbarAndroid
          navIcon={require('../../assets/images/menu.png')}
          title={title}
          titleColor="#FFFFFF"
          actions={[
          	{ title: 'Settings', 
          	  icon: require('../../assets/images/toolbar.png'), 
          	  show: 'always'
            }
          ]}
          onIconClicked={handleMenuIconClicked}
          style={styles.toolbar} />
	)
}

export default Toolbar;