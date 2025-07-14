import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Reference design size (e.g., your mockup was designed for 375x812 iPhone X)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
const verticalScale = (size) => (SCREEN_HEIGHT / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
    size + (scale(size) - size) * factor;

const DimensionsUtil = {
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    scale,
    verticalScale,
    moderateScale,
};

export default DimensionsUtil;
