import React, {
    useRef,
    useState,
    useImperativeHandle,
    forwardRef,
    useEffect,
    useCallback,
} from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ViewShot from 'react-native-view-shot';
import { AppColors } from '../constants/colors';
import DimensionsUtil from '../constants/Dimensions';

// Import Gesture Handler and Reanimated
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    runOnJS,
    withSpring, // ----> 1. Import withSpring for the bounce effect
} from 'react-native-reanimated';
import MarkerControlButtons from '../Screens/RegisterVehicle/DamageReport/MarkerControlButtons';
import AppTouchable from './AppTouchable';
import Icon from 'react-native-vector-icons/Ionicons'; // Or your preferred icon library

// Helper component for a single draggable marker
const DraggableMarker = ({
    index,
    markersPositions,
    savedMarkersPositions,
    scale,
    imageLayout,
    onDragEnd,
    markerSize
}) => {
    // ----> 2. Add a shared value for the marker's own scale animation
    const markerScale = useSharedValue(0);

    // ----> 3. Use useEffect to trigger the animation when the marker is first added (mounted)
    useEffect(() => {
        // Animate the scale from 0 to 1 with a spring effect to make it bounce
        markerScale.value = withSpring(1, {
            damping: 8,
            stiffness: 300,
        });
    }, [markerScale]); // Runs once on component mount

    // This gesture handles dragging for an individual marker
    const markerPanGesture = Gesture.Pan()
        .onStart(() => {
            'worklet';
            // Save the starting positions of all markers when a drag begins
            savedMarkersPositions.value = markersPositions.value;
        })
        .onUpdate((event) => {
            'worklet';
            if (!imageLayout) return;

            // Get the saved starting position for this specific marker
            const savedPosition = savedMarkersPositions.value[index];
            if (!savedPosition) return;

            // Calculate new position based on drag translation and image scale
            const newX = savedPosition.x + event.translationX / scale.value;
            const newY = savedPosition.y + event.translationY / scale.value;

            // Clamp the position to stay within the image boundaries
            const clampedX = Math.max(0, Math.min(newX, imageLayout.width));
            const clampedY = Math.max(0, Math.min(newY, imageLayout.height));

            // Create a new array to update the shared value (triggers re-render)
            const newPositions = [...markersPositions.value];
            newPositions[index] = { x: clampedX, y: clampedY };
            markersPositions.value = newPositions;
        })
        .onEnd(() => {
            'worklet';
            // When drag ends, update the React state with the final position
            if (markersPositions.value[index]) {
                runOnJS(onDragEnd)(index, markersPositions.value[index]);
            }
        });

    // Animated style for the marker's position
    const animatedMarkerStyle = useAnimatedStyle(() => {
        // Ensure the marker position exists before trying to access it
        const position = markersPositions.value[index];
        if (!position) return { opacity: 0 };

        return {
            opacity: markerScale.value, // Link opacity to the scale animation
            transform: [
                { translateX: position.x - 25 }, // Center the marker (50/2)
                { translateY: position.y - 25 }, // Center the marker (50/2)
                { scale: markerScale.value }, // ----> 4. Apply the scale animation
            ],
        };
    });

    return (
        <GestureDetector gesture={markerPanGesture}>
            <Animated.View
                style={[styles.marker, {
                    width: markerSize,
                    height: markerSize,
                }, animatedMarkerStyle]}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            />
        </GestureDetector>
    );
};

const ImageMarker = forwardRef(({ imageSource, DamageMarked }, ref) => {
    // --- State Management ---
    const [markers, setMarkers] = useState([]); // React state for marker list {id, x, y}
    const [imageLayout, setImageLayout] = useState(null);
    const viewShotRef = useRef(null);
    const nextId = useRef(0);
    const [markerSize, setMarkerSize] = useState(50);
    // --- Reanimated Shared Values ---
    // For image pan & zoom
    const scale = useSharedValue(1);
    const savedScale = useSharedValue(1);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const savedTranslateX = useSharedValue(0);
    const savedTranslateY = useSharedValue(0);

    // For multiple markers' positions
    const markersPositions = useSharedValue([]); // Drives animation
    const savedMarkersPositions = useSharedValue([]); // Stores positions at drag start

    // --- Core Functions ---
    const addMarker = useCallback(() => {
        if (!imageLayout) return; // Wait for image to be measured

        const centerX = imageLayout.width / 2;
        const centerY = imageLayout.height / 2;
        const newId = nextId.current++;

        const newMarker = { id: newId, x: centerX, y: centerY };
        const newPosition = { x: centerX, y: centerY };

        // Update both React state and Reanimated shared value
        setMarkers(currentMarkers => [...currentMarkers, newMarker]);
        markersPositions.value = [...markersPositions.value, newPosition];
        DamageMarked(true);
    }, [imageLayout, DamageMarked, markersPositions]);

    const removeAllMarkers = () => {
        setMarkers([]);
        markersPositions.value = [];
        DamageMarked(false);
    };

    // Callback to sync final marker position from animation to React state
    const updateMarkerReactState = (index, finalPosition) => {
        setMarkers(currentMarkers => {
            const newMarkers = [...currentMarkers];
            if (newMarkers[index]) {
                newMarkers[index] = { ...newMarkers[index], ...finalPosition };
            }
            return newMarkers;
        });
    };

    // --- Gestures ---
    const panGesture = Gesture.Pan()
        .averageTouches(true)
        .minPointers(2) // Pan with two fingers to avoid conflict with marker drag
        .onUpdate((event) => {
            'worklet';
            translateX.value = savedTranslateX.value + event.translationX;
            translateY.value = savedTranslateY.value + event.translationY;
        })
        .onEnd(() => {
            'worklet';
            savedTranslateX.value = translateX.value;
            savedTranslateY.value = translateY.value;
        });

    const pinchGesture = Gesture.Pinch()
        .onUpdate((event) => {
            'worklet';
            const newScale = savedScale.value * event.scale;
            scale.value = Math.max(1, Math.min(newScale, 3)); // Limit scale
        })
        .onEnd(() => {
            'worklet';
            savedScale.value = scale.value;
        });

    // Combine pan and pinch for the image. Marker gestures are separate.
    const imageGestures = Gesture.Simultaneous(panGesture, pinchGesture);

    // --- Animated Styles ---
    const animatedImageContainerStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
            { scale: scale.value },
        ],
    }));

    // --- Exposing Methods via ref ---
    useImperativeHandle(ref, () => ({
        saveImage: async () => {
            if (markers.length === 0) return null;
            try {
                // Temporarily reset transform for a clean capture
                const originalTransform = {
                    scale: scale.value,
                    x: translateX.value,
                    y: translateY.value,
                };
                scale.value = 1;
                translateX.value = 0;
                translateY.value = 0;

                const uri = await viewShotRef.current.capture();

                // Restore transform
                scale.value = originalTransform.scale;
                translateX.value = originalTransform.x;
                translateY.value = originalTransform.y;

                // Get final coordinates from React state
                const markerCoordinates = markers.map(m => ({ x: m.x, y: m.y }));
                return { uri, markerCoordinates };
            } catch (error) {
                console.warn('ViewShot capture failed:', error);
                return null;
            }
        },
        isMarkerPlaced: () => markers.length > 0,
        resetAll: () => {
            removeAllMarkers();
            // Reset image transform
            scale.value = 1;
            translateX.value = 0;
            translateY.value = 0;
            savedScale.value = 1;
            savedTranslateX.value = 0;
            savedTranslateY.value = 0;
        },
    }));

    // --- Layout and Effects ---
    const handleImageLayout = (event) => {
        setImageLayout(event.nativeEvent.layout);
    };

    // Add the default marker once the image has been laid out
    useEffect(() => {
        if (imageLayout && markers.length === 0) {
            addMarker();
        }
    }, [imageLayout, markers.length, addMarker]);
    const updateMarkerSize = (change) => {
        const newSize = markerSize + change;
        setMarkerSize(Math.max(20, newSize));
    }

    return (
        <View style={styles.outerContainer}>
            <View style={[styles.mainContainer, { borderColor: markers.length > 0 ? AppColors.buttonOrange : AppColors.borderColor }]}>
                <GestureDetector gesture={imageGestures}>
                    <ViewShot
                        ref={viewShotRef}
                        options={{ format: 'png', quality: 1.0, result: 'tmpfile' }}
                        style={styles.imageWrapper}
                    >
                        <Animated.View style={[styles.fullSize, animatedImageContainerStyle]}>
                            <Image
                                source={{ uri: imageSource }}
                                resizeMode="contain"
                                style={styles.image}
                                onLayout={handleImageLayout}
                            />
                            {/* Render all draggable markers */}
                            {markers.map((marker, index) => (
                                <DraggableMarker
                                    key={marker.id}
                                    index={index}
                                    markerSize={markerSize}
                                    markersPositions={markersPositions}
                                    savedMarkersPositions={savedMarkersPositions}
                                    scale={scale}
                                    imageLayout={imageLayout}
                                    onDragEnd={updateMarkerReactState}
                                />
                            ))}
                        </Animated.View>
                    </ViewShot>
                </GestureDetector>
            </View>
            <View style={styles.markerAdjustButtonsConatiner}>
                <AppTouchable onPress={() => updateMarkerSize(-5)} style={styles.increaseButton}>
                    <Icon name="remove-circle-outline" size={34} color={AppColors.white} style={styles.icon} />
                </AppTouchable>
                <AppTouchable onPress={() => updateMarkerSize(5)} style={styles.increaseButton}>
                    <Icon name="add-circle-outline" size={34} color={AppColors.white} style={styles.icon} />
                </AppTouchable>
            </View>
            <View style={styles.buttonContainer}>
                <MarkerControlButtons addMarker={addMarker} removeAllMarkers={removeAllMarkers} />
            </View>
        </View>
    );
});

export default ImageMarker;

const styles = StyleSheet.create({
    outerContainer: {
        alignItems: 'center',
        gap: 15,
    },
    mainContainer: {
        borderWidth: 2,
        borderRadius: 15,
        overflow: 'hidden', // Ensures the container clips its children
    },
    imageWrapper: {
        width: DimensionsUtil.SCREEN_WIDTH / 1.8,
        height: DimensionsUtil.SCREEN_HEIGHT / 2,
        aspectRatio: 0.7,
        backgroundColor: AppColors.white,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    fullSize: {
        width: '100%',
        height: '100%',
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
    },
    marker: {
        width: 50,
        height: 50,
        borderRadius: 100,
        position: 'absolute',
        borderWidth: 3,
        borderColor: AppColors.buttonOrange,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10
    },
    button: {
        backgroundColor: AppColors.buttonOrange,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: AppColors.white,
        fontWeight: 'bold',
    },
    markerAdjustButtonsConatiner: {
        width: DimensionsUtil.SCREEN_WIDTH / 1.3,
        position: 'absolute',
        top: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    increaseButton: {
        padding: 5,
        borderRadius: 100,
        backgroundColor: AppColors.grayOverlay,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});