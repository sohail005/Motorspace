import React, { useRef, useState } from 'react';
import { Alert, View } from 'react-native';
import AppTouchable from '../../../components/AppTouchable';
import AppText from '../../../components/AppText';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import { AppColors } from '../../../constants/colors';
import { styles } from './DamageDiagramScreenStyles';
import ImageMarker from '../../../components/ImageMarker';
import { useRoute } from '@react-navigation/native';
import DamageDetected from './DamageDetected';

const DamageDiagramScreen = ({ navigation }) => {
    const [damageLocated, setDamageLocated] = useState(false);
    const imageMarkerRef = useRef();
    const route = useRoute();

    const { imageSource, initialMarker, readOnly, onComplete } = route.params || {};

    const handleSubmit = async () => {
        if (imageMarkerRef.current) {
            const result = await imageMarkerRef.current.saveImage();

            if (result) {
                console.log('Captured image at:', result.uri);
                console.log('Marker coordinates:', result.markerCoordinates);
                onComplete?.(true, result);
            } else {
                console.log('No marker placed.');
                onComplete?.(false, null);
            }
        }
        navigation.goBack();
    };

    const handleDamageMarked = (isPlaced) => {
        console.log('Marker placed:', isPlaced);
        setDamageLocated(!!isPlaced);
    };

    return (
        <View style={styles.container}>
            <AppHeaderCommon title="" onLeftPress={navigation.goBack} />

            <View style={styles.containerContent}>
                <AppText style={styles.heading}>Damage Diagram</AppText>
                <AppText style={styles.subtitle}>
                    Pinch to zoom, and select the location of the damage.
                </AppText>

                <DamageDetected damageLocated={damageLocated} />

                <View style={styles.ImageMarkerConatiner}>
                    <ImageMarker
                        ref={imageMarkerRef}
                        imageSource={imageSource}
                        initialMarker={initialMarker}
                        readOnly={readOnly}
                        DamageMarked={handleDamageMarked}
                    />
                </View>
            </View>


            <View style={styles.submitBtnConatiner}>
                <AppTouchable
                    onPress={handleSubmit}
                    style={[
                        styles.button,
                        { backgroundColor: damageLocated ? AppColors.primary : AppColors.buttonDisabled },
                    ]}
                // disabled={!damageLocated}
                >
                    <AppText style={styles.submitText}>Submit</AppText>
                </AppTouchable>
            </View>
        </View>
    );
};

export default DamageDiagramScreen;
