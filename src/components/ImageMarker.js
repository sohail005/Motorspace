import React, {
    useRef,
    useState,
    useImperativeHandle,
    forwardRef,
} from 'react';
import { View, Image, StyleSheet } from 'react-native';
import ViewShot from 'react-native-view-shot';
import { AppColors } from '../constants/colors';
import DimensionsUtil from '../constants/Dimensions';

// Import Gesture Handler and Reanimated
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    runOnJS,
} from 'react-native-reanimated';

const ImageMarker = forwardRef(({ imageSource, onPress,DamageMarked }, ref) => {
    const [markerPlaced, setMarkerPlaced] = useState(false);
    // markerCoords will store the position relative to the original image dimensions
    const [markerCoords, setMarkerCoords] = useState({ x: 0, y: 0 });
    const [imageLayout, setImageLayout] = useState(null);
    const [containerLayout, setContainerLayout] = useState(null);
    const viewShotRef = useRef(null);

    // Reanimated shared values for image pan & zoom
    const scale = useSharedValue(1);
    const savedScale = useSharedValue(1);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const savedTranslateX = useSharedValue(0);
    const savedTranslateY = useSharedValue(0);

    // Reanimated shared values for dragging the marker
    const markerPosition = useSharedValue({ x: 0, y: 0 });
    const savedMarkerPosition = useSharedValue({ x: 0, y: 0 });

    // Track if marker is being dragged to prevent tap conflicts
    const isMarkerDragging = useSharedValue(false);

    // Define Gestures
    const tapGesture = Gesture.Tap()
        .maxDuration(250)
        .onEnd((event) => {
            'worklet';
            if (!imageLayout || !containerLayout || isMarkerDragging.value) return;

            // Get the container center point
            const containerCenterX = containerLayout.width / 2;
            const containerCenterY = containerLayout.height / 2;

            // Calculate tap position relative to container center
            const tapX = event.x - containerCenterX;
            const tapY = event.y - containerCenterY;

            // Convert tap coordinates to image coordinates
            // Account for current transform: (tap - translate) / scale
            const imageCoordX = (tapX - translateX.value) / scale.value + imageLayout.width / 2;
            const imageCoordY = (tapY - translateY.value) / scale.value + imageLayout.height / 2;

            // Clamp to image boundaries
            const clampedX = Math.max(0, Math.min(imageCoordX, imageLayout.width));
            const clampedY = Math.max(0, Math.min(imageCoordY, imageLayout.height));

            // Update marker position
            markerPosition.value = { x: clampedX, y: clampedY };
            savedMarkerPosition.value = { x: clampedX, y: clampedY };

            // Use runOnJS to update React state from a Reanimated worklet
            runOnJS(setMarkerCoords)({ x: clampedX, y: clampedY });
            runOnJS(setMarkerPlaced)(true);
            runOnJS(DamageMarked)(true);
            
            if (onPress) {
                runOnJS(onPress)();
            }
        });

    const panGesture = Gesture.Pan()
        .averageTouches(true)
        .minDistance(10) // The fix to distinguish a pan from a tap
        .onStart(() => {
            'worklet';
            // Prevent marker dragging during image pan
            isMarkerDragging.value = false;
        })
        .onUpdate((event) => {
            'worklet';
            if (isMarkerDragging.value) return;

            translateX.value = savedTranslateX.value + event.translationX;
            translateY.value = savedTranslateY.value + event.translationY;
        })
        .onEnd(() => {
            'worklet';
            savedTranslateX.value = translateX.value;
            savedTranslateY.value = translateY.value;
        });

    const pinchGesture = Gesture.Pinch()
        .onStart(() => {
            'worklet';
            // Prevent marker dragging during pinch
            isMarkerDragging.value = false;
        })
        .onUpdate((event) => {
            'worklet';
            if (isMarkerDragging.value) return;

            const newScale = savedScale.value * event.scale;
            // Optional: limit scale between 0.5x and 3x
            scale.value = Math.max(0.5, Math.min(3, newScale));
        })
        .onEnd(() => {
            'worklet';
            savedScale.value = scale.value;
        });

    const markerPanGesture = Gesture.Pan()
        .onStart(() => {
            'worklet';
            isMarkerDragging.value = true;
        })
        .onUpdate((event) => {
            'worklet';
            if (!imageLayout) return;

            const newX = savedMarkerPosition.value.x + event.translationX / scale.value;
            const newY = savedMarkerPosition.value.y + event.translationY / scale.value;

            markerPosition.value = {
                x: Math.max(0, Math.min(newX, imageLayout.width)),
                y: Math.max(0, Math.min(newY, imageLayout.height)),
            };
        })
        .onEnd(() => {
            'worklet';
            savedMarkerPosition.value = markerPosition.value;
            runOnJS(setMarkerCoords)(markerPosition.value);
            isMarkerDragging.value = false;
        });

    // Combine gestures
    const imageGestures = Gesture.Race(
        Gesture.Simultaneous(panGesture, pinchGesture),
        tapGesture,
    );

    // Define Animated Styles
    const animatedImageContainerStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
            { scale: scale.value },
        ],
    }));

    const animatedMarkerStyle = useAnimatedStyle(() => ({
        opacity: markerPlaced ? 1 : 0,
        transform: [
            // Center the marker on its coordinates
            { translateX: markerPosition.value.x - 25 },
            { translateY: markerPosition.value.y - 25 },
            { scale: isMarkerDragging.value ? 1.2 : 1 }, // Visual feedback when dragging
        ],
    }));

    const captureImage = async () => {
        if (!markerPlaced) return null;
        try {
            // Reset zoom/pan for capture to get a clean, full-frame image
            scale.value = 1;
            translateX.value = 0;
            translateY.value = 0;
            const uri = await viewShotRef.current.capture();
            return { uri, markerCoordinates: markerCoords };
        } catch (error) {
            console.warn('ViewShot capture failed:', error);
            return null;
        }
    };

    useImperativeHandle(ref, () => ({
        saveImage: captureImage,
        isMarkerPlaced: () => markerPlaced,
        resetMarker: () => {
            setMarkerPlaced(false);
            setMarkerCoords({ x: 0, y: 0 });
            markerPosition.value = { x: 0, y: 0 };
            savedMarkerPosition.value = { x: 0, y: 0 };
        },
        resetTransform: () => {
            scale.value = 1;
            translateX.value = 0;
            translateY.value = 0;
            savedScale.value = 1;
            savedTranslateX.value = 0;
            savedTranslateY.value = 0;
        },
    }));

    const handleContainerLayout = (event) => {
        setContainerLayout(event.nativeEvent.layout);
    };

    const handleImageLayout = (event) => {
        setImageLayout(event.nativeEvent.layout);
    };

    return (
        <View style={[styles.MainContainer, { borderColor: markerPlaced && AppColors.buttonOrange }]} onLayout={handleContainerLayout}>
            <GestureDetector gesture={imageGestures}>
                <ViewShot
                    ref={viewShotRef}
                    options={{ format: 'png', quality: 1.0, result: 'tmpfile' }}
                    style={styles.imageWrapper} // Acts as a clipping mask
                >
                    <Animated.View style={animatedImageContainerStyle}>
                        <Image
                            source={{ uri: imageSource }}
                            resizeMode="contain"
                            style={styles.image}
                            onLayout={handleImageLayout}
                        />
                        {markerPlaced && (
                            <GestureDetector gesture={markerPanGesture}>
                                <Animated.View
                                    style={[styles.marker, animatedMarkerStyle]}
                                    hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                                />
                            </GestureDetector>
                        )}
                    </Animated.View>
                </ViewShot>
            </GestureDetector>
        </View>
    );
});

export default ImageMarker;

const styles = StyleSheet.create({
    MainContainer: {
        borderWidth: 2,
        borderColor: AppColors.borderColor,
        borderRadius: 15
    },
    imageWrapper: {
        width: DimensionsUtil.SCREEN_WIDTH / 1.8,
        height: DimensionsUtil.SCREEN_HEIGHT / 1.8,
        aspectRatio: 0.7,
        alignSelf: 'center',
        backgroundColor: '#fff',
        overflow: 'hidden', // Important to clip the zoomed image
    },
    image: {
        width: '100%',
        height: '100%',
    },
    marker: {
        width: 50,
        height: 50,
        borderRadius: 25,
        position: 'absolute',
        borderWidth: 3,
        borderColor: AppColors.buttonOrange,
        backgroundColor: 'rgba(255,165,0,0.3)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});