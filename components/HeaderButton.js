import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const customHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      iconSize={props.size * 1}
      color={props.color}
      IconComponent={Icon}
    />
  );
};
export default customHeaderButton;
