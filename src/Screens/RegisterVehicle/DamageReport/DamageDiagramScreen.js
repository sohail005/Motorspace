import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import AppTouchable from '../../../components/AppTouchable';
import AppText from '../../../components/AppText';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import { AppColors } from '../../../constants/colors';
import { styles } from './DamageDiagramScreenStyles';
import ImageMarker from '../../../components/ImageMarker';
import { useRoute } from '@react-navigation/native';

const DamageDiagramScreen = ({ navigation }) => {
    const [damageLocated, setDamageLocated] = useState(false);
    const imageMarkerRef = useRef();
    const route = useRoute();

    const {
        imageSource,
        initialMarker,
        readOnly,
        onComplete,
    } = route.params || {};

    const handleSubmit = async () => {
        if (imageMarkerRef.current) {
            const result = await imageMarkerRef.current.saveImage();
            if (result) {
                console.log('Captured image at:', result.uri);
                console.log('Marker at:', result.markerCoordinates);
                route.params?.onComplete?.(true, result);
            } else {
                console.log('No marker placed.');
                route.params?.onComplete?.(false, null);
            }
        }
        navigation.goBack();
    };

    const DamageMarked = (data) => {
        console.log("Marker placed:", data);
        setDamageLocated(data); // true or false
    };

    return (
        <View style={styles.container}>
            <AppHeaderCommon title="" onLeftPress={navigation.goBack} />
            <View style={styles.containerContent}>
                <AppText style={styles.heading}>Damage Diagram</AppText>
                <AppText style={styles.subtitle}>
                    Pinch to zoom, and select the location of the damage.
                </AppText>

                <View style={styles.ImageMarkerConatiner}>
                    <ImageMarker
                        ref={imageMarkerRef}
                        imageSource={imageSource}
                        initialMarker={initialMarker}
                        readOnly={readOnly}
                        DamageMarked={DamageMarked}
                    />
                </View>


            </View>
            <View
                style={[
                    styles.badge,
                    damageLocated ? styles.badgeLocated : styles.badgeNotLocated,
                ]}
            >
                <AppText
                    style={[
                        styles.badgeText,
                        damageLocated ? styles.badgeTextLocated : styles.badgeTextNotLocated,
                    ]}
                >
                    {damageLocated ? '✖ Damage Located!' : 'No Damage Located'}
                </AppText>
            </View>
            <AppTouchable
                onPress={handleSubmit}
                style={[
                    styles.submitBtn,
                    { backgroundColor: damageLocated ? AppColors.primary : AppColors.buttonDisabled },
                ]}
                disabled={!damageLocated}
            >
                <AppText style={styles.submitText}>Submit</AppText>
            </AppTouchable>
        </View>
    );
};

export default DamageDiagramScreen;