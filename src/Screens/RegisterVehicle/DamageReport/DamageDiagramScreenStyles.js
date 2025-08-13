import { StyleSheet } from "react-native";
import { AppColors } from "../../../constants/colors";
import { FontSizes } from "../../../constants/fontsizes";
import { Fonts } from "../../../constants/Fonts";
import DimensionsUtil from "../../../constants/Dimensions";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.white,
        flex: 1,
    },
    containerContent: {
        flex: 1,
        paddingHorizontal: 20
    },
    ImageMarkerConatiner: {
        height: DimensionsUtil.SCREEN_HEIGHT / 1.8,

    },
    heading: {
        fontSize: FontSizes.ultraLarge,
        fontFamily: Fonts.bold,
        color: AppColors.primary,
        marginVertical: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: AppColors.textSecondary,
        textAlign: 'center',
    },
    diagramWrapper: {
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 12,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    diagramImage: {
        width: '100%',
        height: 200,
    },
    damageIndicator: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -12 }, { translateY: -12 }],
    },
    damageCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'orange',
        borderWidth: 2,
        borderColor: '#fff',
    },
    badge: {
        marginTop: 16,
        alignSelf: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 50,
    },
    badgeLocated: {
        backgroundColor: AppColors.warning,
    },
    badgeNotLocated: {
        backgroundColor: '#ccc',
    },
    badgeText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    badgeTextLocated: {
        color: '#fff',
    },
    badgeTextNotLocated: {
        color: '#fff',
    },
    submitBtnConatiner: {
        width: DimensionsUtil.SCREEN_WIDTH / 2.5,
        height: 55,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 100000
    },
    button: {
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    submitBtnDisabled: {
        backgroundColor: '#ccc',
        marginTop: 24,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    submitText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
