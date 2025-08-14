// ReportMinorDamages.js
import React, { useCallback, useState } from 'react';
import { View, LayoutAnimation, Platform, UIManager, FlatList } from 'react-native';
import AppTouchable from '../../../components/AppTouchable';
import AppText from '../../../components/AppText';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import { styles } from './ReportMinorDamagesStyles';
import storageItem from '../../../utils/storageItem';
import { AppColors } from '../../../constants/colors';
import AppImage from '../../../components/AppImage';
import { useFocusEffect } from '@react-navigation/native';

// Enable layout animation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ReportMinorDamages = ({ navigation }) => {
    const [allReports, setAllReports] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const fetchReports = () => {
                const reports = storageItem.getItem('damageReports') || [];
                const withExpandFlag = reports.map(item => ({ ...item, expanded: false }));
                setAllReports(withExpandFlag);
            };
            fetchReports();
        }, [])
    );

    const toggleExpand = (id) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setAllReports((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, expanded: !item.expanded } : item
            )
        );
    };

    const removeDamage = (id) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const updated = allReports.filter(item => item.id !== id);
        setAllReports(updated);
        storageItem.setItem('damageReports', updated);
    };

    const addDamage = () => navigation.navigate('DamageReport');

    const renderHeader = () => (
        <>

            <AppText style={styles.screenTitle}>Report Minor Damages</AppText>
        </>
    );

    const renderFooter = () => (
        <>
            <View style={styles.AddButtonContainer}>
                <AppTouchable onPress={addDamage} style={styles.addMotorButton}>
                    <Icon name="add" size={32} color="white" />
                </AppTouchable>
                <AppText style={styles.addMotorText}>Report Vehicle Damage</AppText>
            </View>

        </>
    );

    const renderItem = ({ item }) => (
        <View key={item.id} style={styles.damageItemContainer}>
            <AppTouchable onPress={() => toggleExpand(item.id)}>
                <View style={styles.damageItemHeader}>
                    <View style={styles.itemTitleConatiner}>
                        <AppTouchable onPress={() => removeDamage(item.id)} style={styles.closeIcon}>
                            <Icon name="close" size={28} color={AppColors.buttonOrange} />
                        </AppTouchable>
                        <AppText numberOfLines={1} style={styles.damageTitle}>
                            {item.location}
                        </AppText>
                    </View>
                    <Icon
                        name={!item.expanded ? 'chevron-forward' : 'chevron-down'}
                        size={20}
                        color={AppColors.textPrimary}
                    />
                </View>
            </AppTouchable>

            {item.expanded && (
                <View style={styles.damageItemDetails}>
                    <AppText style={styles.damageDetailText}>{item.description}</AppText>
                    {item?.photo?.uri && (
                        <AppImage
                            source={{ uri: item?.photo?.uri }}
                            resizeMode="contain"
                            style={styles.damageDetailImage}
                        />
                    )}
                </View>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <AppHeaderCommon title="" onLeftPress={() => navigation.goBack()} />
            <View style={styles.flatlistConatiner}>
                <FlatList
                    data={allReports}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    contentContainerStyle={styles.listContainer}
                    renderItem={renderItem}
                    ListHeaderComponent={renderHeader}
                    ListFooterComponent={renderFooter}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View style={styles.bottomButtons}>
                <AppTouchable onPress={() => navigation.navigate("AdditionalFeatures")} style={styles.finishButton}>
                    <AppText style={styles.finishButtonText}>Submit</AppText>
                </AppTouchable>
            </View>
        </View>
    );
};

export default ReportMinorDamages;
