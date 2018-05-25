import React from 'react';
import { Header, Icon } from 'react-native-elements';
import styles from '../../assets/styles/style';

const Toolbar = ({ title, leftIcon, leftIconType, rightIcon, rightIconType, handleMenuIconClick, handleRightIconClick }) => {
	return (
		<Header
            statusBarProps={{ barStyle: 'light-content', backgroundColor: '#338a3e' }}
            leftComponent={
              <Icon
                    name={leftIcon}
                    type={leftIconType}
                    color="#FFFFFF"
                    underlayColor="#66bb6a"
                    onPress={handleMenuIconClick}
              />
            }
            centerComponent={{ text: title, style: { color: '#fff' } }}
            rightComponent={
               rightIcon ? <Icon
                    type={rightIconType}
                    name={rightIcon}
                    color="#FFFFFF"
                    underlayColor="#66bb6a"
                    onPress={handleRightIconClick ? handleRightIconClick : () => {}}
               /> : {}
            }
            backgroundColor="#66bb6a"
            outerContainerStyles={{height: 56}}
          />
	)
}

export default Toolbar;