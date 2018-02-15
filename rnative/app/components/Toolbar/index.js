import React from 'react';
import { Header, Icon } from 'react-native-elements';
import styles from '../../assets/styles/style';

const Toolbar = ({ title, leftIcon, leftIconType, rightIcon, rightIconType, handleMenuIconClicked, handleRightIconClick }) => {
	return (
		<Header
            statusBarProps={{ barStyle: 'light-content', backgroundColor: '#007f00' }}
            leftComponent={
              <Icon
                    name={leftIcon}
                    type={leftIconType}
                    color="#FFFFFF"
                    underlayColor="#1CAE21"
                    onPress={handleMenuIconClicked}
              />
            }
            centerComponent={{ text: title, style: { color: '#fff' } }}
            rightComponent={
               rightIcon ? <Icon
                    type={rightIconType}
                    name={rightIcon}
                    color="#FFFFFF"
                    underlayColor="#1CAE21"
                    onPress={handleRightIconClick ? handleRightIconClick : () => {}}
               /> : {}
            }
            backgroundColor="#1CAE21"
            outerContainerStyles={{height: 56}}
          />
	)
}

export default Toolbar;