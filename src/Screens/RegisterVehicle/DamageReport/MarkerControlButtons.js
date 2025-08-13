import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Or your preferred icon library
import AppTouchable from '../../../components/AppTouchable';
import AppText from '../../../components/AppText';
import { AppColors } from '../../../constants/colors';

const MarkerControlButtons = ({ addMarker, removeAllMarkers }) => {
    return (
        <View style={styles.buttonContainer}>
            {/* "Add Marker" Button */}
            <AppTouchable onPress={addMarker} style={styles.button}>
                <View style={styles.buttonContent}>
                    <Icon name="add-circle-outline" size={22} color={AppColors.primary} style={styles.icon} />
                    <AppText style={styles.buttonText}>Add Marker</AppText>
                </View>
            </AppTouchable>

            {/* "Remove All" Button */}
            <AppTouchable onPress={removeAllMarkers} style={styles.button}>
                <View style={styles.buttonContent}>
                    <Icon name="trash-bin-outline" size={22} color={AppColors.primary} style={styles.icon} />
                    <AppText style={styles.buttonText}>Remove All</AppText>
                </View>
            </AppTouchable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        // bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
    },
    button: {
        // backgroundColor: '#007AFF', // Example background color
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        borderWidth:1
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: AppColors.primary,
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
        marginRight: 8,
    },
});

export default MarkerControlButtons;