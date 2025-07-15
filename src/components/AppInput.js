import React from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';
import { AppColors } from '../constants/colors';
import { FontSizes } from '../constants/fontsizes';

const AppInput = ({
    placeholder,
    icon,
    iconStyle,
    label,
    errorMessage,
    style,
    inputStyle, // <--- Add this
    ...rest
}) => {
    return (
        <View style={style}>
            {label && <Text style={styles.label}>{label}</Text>}

            <View
                style={[
                    styles.container,
                    errorMessage && { borderColor: AppColors.errorRed },
                    rest.multiline && { alignItems: 'flex-start', paddingVertical: 10 }, // fix for multiline
                ]}
            >
                {icon && (
                    <Image
                        source={icon}
                        style={[styles.icon, iconStyle]}
                        resizeMode="contain"
                    />
                )}
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={AppColors.grayOverlay}
                    cursorColor={AppColors.primary}
                    style={[styles.input, inputStyle]} // <--- Apply inputStyle
                    {...rest}
                />
            </View>

            {!!errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
            ) : (
                <Text style={styles.errorText}></Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: FontSizes.smallMedium,
        fontWeight: '500',
        marginBottom: 6,
        color: AppColors.textPrimary,
    },
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: AppColors.white,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        fontSize: FontSizes.smallMedium,
        color: AppColors.textPrimary,
        // textAlignVertical: 'top', // <--- Important for multiline to work properly
        padding: 0,
        minHeight: 50
    },
    icon: {
        width: 18,
        height: 18,
        marginRight: 8,
        marginTop: 3,
    },
    errorText: {
        color: AppColors.errorText,
        fontSize: FontSizes.small,
        marginTop: 2,
        marginBottom: 5,
    },
});

export default AppInput;
