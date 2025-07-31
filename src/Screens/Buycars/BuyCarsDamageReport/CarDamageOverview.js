import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Image, Text, FlatList, LayoutAnimation } from 'react-native';
import { AppColors } from '../../../constants/colors';
import { Fonts } from '../../../constants/Fonts';
import { FontSizes } from '../../../constants/fontsizes';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import DimensionsUtil from '../../../constants/Dimensions';
import { IMAGES } from '../../../assets/Images/ImagePath';
import AppImage from '../../../components/AppImage';
import { useFocusEffect } from '@react-navigation/native';
import storageItem from '../../../utils/storageItem';
import ImageViewerPortal from '../../../components/ImageViewerPortal';
import { useDispatch } from 'react-redux';
import { setStatusBarColor } from '../../../redux/features/user/userSlice';

const CarDamageOverview = () => {
    const [allReports, setAllReports] = useState([]);
    const [showImageViewer, setShowImageViewer] = useState(false);
    const [clickedImage, setClickedImage] = useState("");
    const dispatch = useDispatch();

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
    const OnImagePress = () => {
        dispatch(setStatusBarColor('#000000dd'));
        setClickedImage("https://images.pexels.com/photos/63764/pexels-photo-63764.jpeg?cs=srgb&dl=car-cars-lamborghini-aventador-63764.jpg&fm=jpg");
        setShowImageViewer(true)
    }
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
                            resizeMode="cover"
                            style={styles.damageDetailImage}
                        />
                    )}
                </View>
            )}
        </View>
    );
    const OnDismissImageViewer = () => {
        setShowImageViewer(false);
        dispatch(setStatusBarColor(AppColors.primary));

    }
    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.headerRow}>
                <View style={styles.conditionConatienr}>
                    <AppText style={styles.label}>Condition:</AppText>
                    <AppText style={styles.condition}> Like New </AppText>
                </View>
                <AppText style={styles.labelRight}>Minor Damages: <Text style={styles.damageCount}>3</Text></AppText>
            </View>

            {/* Car Diagram with Overlays */}
            <AppTouchable onPress={() => OnImagePress()} style={styles.diagramContainer}>
                <AppImage
                    source={IMAGES.CarsDamages}
                    resizeMode="contain"
                    style={styles.carImage}
                />

                {/* Markers */}
                <View style={[styles.marker, { top: '36%', left: '20%' }]} />
                <View style={[styles.marker, { top: '52%', left: '35%' }]} />
                <View style={[styles.marker, { top: '60%', left: '66%' }]} />
            </AppTouchable>

            <View style={styles.divider} />

            {/* Damage Items */}
            <View style={styles.flatlistConatiner}>
                <FlatList
                    data={allReports}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    contentContainerStyle={styles.listContainer}
                    renderItem={renderItem}
                    // ListHeaderComponent={renderHeader}
                    // ListFooterComponent={renderFooter}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <ImageViewerPortal
                visible={showImageViewer}
                onDismiss={() => OnDismissImageViewer()}
                imageUri={clickedImage} // or a remote URL
            />
        </View>
    );
};

export default CarDamageOverview;
const styles = StyleSheet.create({
    container: {
        // padding: 16,
        borderRadius: 12,
        backgroundColor: AppColors.white,
        // margin: 10,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginBottom: 10,
    },
    conditionConatienr: {
        flexDirection: 'row'
    },
    label: {
        fontFamily: Fonts.semiBold,
        fontSize: FontSizes.medium,
        color: AppColors.textPrimary,
    },
    labelRight: {
        fontFamily: Fonts.semiBold,
        fontSize: FontSizes.medium,
        color: AppColors.textPrimary,
    },
    condition: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
        color: AppColors.likeNew,
    },
    damageCount: {
        color: AppColors.buttonOrange,
        fontFamily: Fonts.bold,
    },
    diagramContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    carImage: {
        width: '100%',
        height: DimensionsUtil.SCREEN_HEIGHT * 0.35,
    },
    marker: {
        position: 'absolute',
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: AppColors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    divider: {
        height: 1,
        backgroundColor: AppColors.grayLine,
        marginVertical: 16,
    },
    damageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: AppColors.lightPrimary,
        padding: 12,
        marginVertical: 6,
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    damageLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    damageText: {
        fontFamily: Fonts.medium,
        color: AppColors.black,
        fontSize: FontSizes.medium,
    },
    flatlistConatiner: {
        alignItems: 'center',
    },
    listContainer: {
        width: DimensionsUtil.SCREEN_WIDTH / 1.1,

    },
    damageItemContainer: {
        width: '100%',
        borderWidth: 2,
        borderColor: AppColors.buttonOrange,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: AppColors.white,
        marginTop: 15
    },
    damageItemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    damageTitle: {
        fontSize: FontSizes.mediumLarge,
        fontFamily: Fonts.semiBold,
        color: AppColors.textPrimary,
        paddingLeft: 10,
        width: DimensionsUtil.SCREEN_WIDTH / 1.4,
        textAlignVertical: 'center',
    },
    damageTitle: {
        fontSize: FontSizes.mediumLarge,
        fontFamily: Fonts.semiBold,
        color: AppColors.textPrimary,
        paddingLeft: 10,
        width: DimensionsUtil.SCREEN_WIDTH / 1.4,
        textAlignVertical: 'center',
    },
    itemTitleConatiner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    damageItemDetails: {
        paddingHorizontal: 32,
        borderTopColor: AppColors.borderColor || '#ccc',
        paddingTop: 15
    },

    damageDetailText: {
        fontSize: FontSizes.medium,
        color: AppColors.textPrimary,
        fontWeight: '500'
    },
    damageDetailImage: {
        width: DimensionsUtil.SCREEN_WIDTH / 1.4,
        height: DimensionsUtil.SCREEN_WIDTH / 2,
        borderRadius: 8,
        margin: 8,
    },
});
