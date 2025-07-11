// src/components/AppImage.js
import React, { useState } from 'react';
import { Image, StyleSheet, View, ActivityIndicator } from 'react-native';

const AppImage = ({
  source,
  fallbackSource,
  style,
  resizeMode = 'cover',
  placeholder = false,
  loaderSize = 'small',
  loaderColor = '#999',
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoadEnd = () => setIsLoading(false);
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const finalSource = hasError && fallbackSource ? fallbackSource : source;

  return (
    <View style={[styles.container, style]}>
      {isLoading && placeholder && (
        <ActivityIndicator
          size={loaderSize}
          color={loaderColor}
          style={StyleSheet.absoluteFill}
        />
      )}
      <Image
        source={finalSource}
        style={[styles.image, style]}
        resizeMode={resizeMode}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default AppImage;
