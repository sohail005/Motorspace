// src/components/AppText.js

import React from 'react';
import { Text } from 'react-native';

const AppText = ({ style, children, ...rest }) => {
  return (
    <Text
      allowFontScaling={false}
      style={[style, { letterSpacing: 0.8, lineHeight: style?.fontSize * 1.5 }]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default AppText;
