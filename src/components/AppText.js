// src/components/AppText.js

import React from 'react';
import { Text } from 'react-native';

const AppText = ({ style, children, ...rest }) => {
  return (
    <Text
      allowFontScaling={false}
      style={style}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default AppText;
