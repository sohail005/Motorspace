const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

// Create base config from React Native defaults
const defaultConfig = getDefaultConfig(__dirname);

// Your custom config (if any)
const customConfig = {
  // You can customize resolver, transformer, etc. here if needed
};

// Merge default and custom configs
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Wrap the merged config with Reanimated's wrapper
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
