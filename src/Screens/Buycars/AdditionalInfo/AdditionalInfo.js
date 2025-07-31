import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import InfoRow from './InfoRow';
import InfoSection from './InfoSection';
import InfoHeader from './InfoHeader';
import { AppColors } from '../../../constants/colors';
import AppHeader from '../../../components/AppHeader';
import { useRoute } from '@react-navigation/native';
import AppTouchable from '../../../components/AppTouchable';
import AppText from '../../../components/AppText';
import { FontSizes } from '../../../constants/fontsizes';
import DimensionsUtil from '../../../constants/Dimensions';
import { Fonts } from '../../../constants/Fonts';
import FillterIcon from 'react-native-vector-icons/Octicons';
import WarningContainer from './WarningContainer';

const AdditionalInfo = ({ navigation }) => {
    const route = useRoute();
    const { title, variant, vehicleInfo } = route.params.car || {};
    console.log("route:", route);

    return (
        <View style={styles.container}>
            <AppHeader onLeftPress={() => navigation.goBack()} leftIcon rightIcon />
            <ScrollView contentContainerStyle={styles.Contentcontainer}>
                <InfoHeader
                    title="Additional Info"
                    subtitle={title}
                    specLine={variant}
                />

                <InfoSection title="Mechanical Details">
                    <InfoRow label="Transmission" value={vehicleInfo.transmission} />
                    <InfoRow label="Mileage" value={vehicleInfo.miles} />
                    <InfoRow label="Engine Size" value={vehicleInfo.engine} />
                    <InfoRow label="Drive Type" value="Rear-Wheel Drive" />
                    <InfoRow label="Fuel Type" value={vehicleInfo.fuel} />
                </InfoSection>

                <InfoSection title="Trim & Interior">
                    <InfoRow label="Body" value="Hatchback" />
                    <InfoRow label="Color" value="Midnight (Blue)" />
                    <InfoRow label="Seats" value="5" />
                </InfoSection>

                <InfoSection title="Service History">
                    <InfoRow label="Last Service" value="21/06/2025" />
                    <InfoRow label="Mileage at Service" value="48,365" />
                </InfoSection>

                <InfoSection title="Running Costs">
                    <InfoRow label="Fuel Consumption" value="58 MPG" />
                    <InfoRow label="Vehicle Tax" value="£195 /year" />
                    <InfoRow label="Insurance Level" value="31E" />
                </InfoSection>

                <InfoSection title="Useful Information">
                    <InfoRow label="Previous Owners" value="4" />
                    <InfoRow label="ULEZ Compliance" value="Yes" />
                </InfoSection>
                <View style={styles.buttonRow}>
                    <AppTouchable style={styles.outlineButton}>
                        <AppText style={styles.outlineButtonText}>Full Specification</AppText>
                    </AppTouchable>
                    <AppTouchable style={styles.outlineButton}>
                        <AppText style={styles.outlineButtonText}>Additional Features</AppText>
                    </AppTouchable>
                </View>
                {/* WarningContainer */}
                <WarningContainer
                    messages={[
                        'If you think information for this listing is incorrect or misleading, you can contact the seller directly',
                        'Alternatively, you can reach out to our free Helpline below',
                    ]}
                    onPress={() => {
                        // Call helpline or open dialer
                        console.log('Calling helpline...');
                    }}
                />

            </ScrollView>
        </View>
    );
};

export default AdditionalInfo;

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.defaultBackground,
        flex: 1,

    },
    Contentcontainer: {
        paddingBottom: 150,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: AppColors.white,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    outlineButton: {
        backgroundColor: AppColors.white,
        borderWidth: 1,
        borderColor: AppColors.primary,
        borderRadius: 10,
        alignItems: 'center',
        // height: DimensionsUtil.SCREEN_WIDTH / 9,
        width: DimensionsUtil.SCREEN_WIDTH / 2.4,
        marginVertical: 25,
        paddingHorizontal:5
    },
    outlineButtonText: {
        color: AppColors.primary,
        fontSize: FontSizes.medium,
        textAlign: 'center',
        verticalAlign: 'middle',
        paddingVertical: 15,
        fontFamily: Fonts.semiBold
    },
});
