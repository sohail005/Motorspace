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
        marginVertical: 16,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: AppColors.textSecondary,
        marginBottom: 20,
        marginTop: 12,
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
    submitBtn: {
        backgroundColor: AppColors.primary,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
        margin: 20,
        height: 50,
        justifyContent: 'center',
        width: DimensionsUtil.SCREEN_WIDTH / 2.5,
        alignSelf: 'flex-end',
        position:'absolute',
        bottom:20
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
