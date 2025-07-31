import React, { useEffect } from 'react';
import { Modal, Portal } from 'react-native-paper';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppColors } from '../constants/colors';
import AppImage from './AppImage'; // Reusable Image wrapper
import AppTouchable from './AppTouchable'; // Reusable Touchable
import DimensionsUtil from '../constants/Dimensions'; // for screen width/height
import { useDispatch } from 'react-redux';
import { setStatusBarColor } from '../redux/features/user/userSlice';

const { width, height } = Dimensions.get('window');

const ImageViewerPortal = ({ visible, onDismiss, imageUri }) => {


    return (
        <Portal>
            <Modal
                visible={visible}
                onDismiss={onDismiss}
                contentContainerStyle={styles.modalContainer}
            >
                <View style={styles.overlay}>
                    <AppTouchable style={styles.closeButton} onPress={onDismiss}>
                        <Icon name="close" size={28} color={AppColors.white} />
                    </AppTouchable>
                    <View style={styles.imageContainer}>
                        <AppImage
                            source={{ uri: imageUri }}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    </View>
                </View>
            </Modal>
        </Portal>
    );
};

export default ImageViewerPortal;

const styles = StyleSheet.create({
    modalContainer: {
        // flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    overlay: {
        width: width,
        height: height,
        backgroundColor: '#000000dd',

    },
    imageContainer: {
        flex: 1,
        height: DimensionsUtil.SCREEN_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: DimensionsUtil.SCREEN_WIDTH - 40,
        height: DimensionsUtil.SCREEN_HEIGHT * 0.50,
        borderRadius: 10,
        alignSelf: 'center'
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20
    },
});
