import React from 'react';
import { View, ScrollView } from 'react-native';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import { styles } from './ConfirmVehicleInfoStyles';
import InfoRow from '../../../components/InfoRow';

const ConfirmVehicleInfo = ({ navigation }) => {
    const vehicleInfo = {
        registration: 'TY24FGH',
        make: 'Fiat',
        model: 'Punto',
        year: '2012',
        capacity: '1368 cc',
        co2: '132 g/km',
        fuel: 'Petrol',
        euro: 'Not Available',
        export: 'No',
        status: 'Taxed',
        color: 'WHITE',
        maker: "NO",
        Status: "Taxed",
        Approval: "M1",
        plan: "2 AXLE RIGID BODY",
        Weight: "Not Available",
        Date: "1 July 2020"
    };

    return (
        <View style={styles.container}>
            <AppHeaderCommon title='' onLeftPress={() => navigation.goBack()} showBadge />

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                <AppText style={styles.title}>Confirm{"\n"}Vehicle Info</AppText>

                <InfoRow label="Vehicle Registration" value={vehicleInfo.registration} />
                <InfoRow label="Vehicle Make" value={vehicleInfo.make} />
                <InfoRow label="Model" value={vehicleInfo.model} />
                <InfoRow label="Year of Manufacture" value={vehicleInfo.year} />
                <InfoRow label="Cylinder Capacity" value={vehicleInfo.capacity} />
                <InfoRow label="CO2 Emissions" value={vehicleInfo.co2} />
                <InfoRow label="Fuel Type" value={vehicleInfo.fuel} />
                <InfoRow label="Euro Status" value={vehicleInfo.euro} />
                <InfoRow label="Export Marker" value={vehicleInfo.export} />
                <InfoRow label="Vehicle Status" value={vehicleInfo.status} />
                <InfoRow label="Vehicle Colour" value={vehicleInfo.color} />
                <InfoRow label="Export Marker" value={vehicleInfo.color} />
                <InfoRow label="Vehicle Status" value={vehicleInfo.status} />
                <InfoRow label="Vehicle Type Approval" value={vehicleInfo.Approval} />
                <InfoRow label="Wheel Plan" value={vehicleInfo.plan} />
                <InfoRow label="Revenue Weight" value={vehicleInfo.Weight} />
                <InfoRow label="Date of Last V5C (Logbook) Issued" value={vehicleInfo.Date} />


            </ScrollView>
            <View style={styles.buttonConteiner}>
            <AppTouchable onPress={()=>navigation.navigate("AdditionalVehicleInfo")} style={styles.confirmButton}>
                <AppText style={styles.confirmButtonText}>Confirm</AppText>
            </AppTouchable>
            </View>
        </View>
    );
};

export default ConfirmVehicleInfo;
