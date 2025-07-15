import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './EmailVerifiedScreenStyles'
import AppImage from '../../../components/AppImage'
import { IMAGES } from '../../../assets/Images/ImagePath'
import AppText from '../../../components/AppText'
import AppTouchable from '../../../components/AppTouchable'
import { useNavigation } from '@react-navigation/native'

const EmailVerifiedScreen = () => {
    const navigation = useNavigation();
    const handleConfirm = () => {
        navigation.navigate("ProfileApproval")
    }
    return (
        <View style={styles.container}>
            <View style={styles.cehckMainConatiner}>
                <AppImage
                    source={IMAGES.check}
                    style={styles.cehckImage}
                    resizeMode="contain"
                />
                <AppText style={styles.Heading}>Email Address Confirmed!</AppText>
                <AppTouchable
                    style={styles.confirmButton}
                    onPress={handleConfirm}>
                    <AppText style={styles.confirmText}>Confirm</AppText>
                </AppTouchable>

            </View>
        </View>
    )
}

export default EmailVerifiedScreen
