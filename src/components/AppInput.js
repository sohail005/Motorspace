import React from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';
import { AppColors } from '../constants/colors';
import { FontSizes } from '../constants/fontsizes';

const AppInput = ({ placeholder, icon, iconStyle, label, errorMessage, style, ...rest }) => {
    return (
        <View style={style}>
            {label && <Text style={styles.label}>{label}</Text>}

            <View style={[
                styles.container,
                errorMessage && { borderColor: AppColors.errorRed } // red border on error
            ]}>
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
                    style={styles.input}
                    {...rest}
                />
            </View>

            {!!errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
            ) :
                <Text style={styles.errorText}></Text>
            }
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
        alignItems: 'center',
        height: 48,
        backgroundColor: AppColors.white,
    },
    input: {
        flex: 1,
        fontSize: FontSizes.smallMedium,
        color: AppColors.textPrimary,
    },
    icon: {
        width: 18,
        height: 18,
        marginRight: 8,
    },
    errorText: {
        color: AppColors.errorText,
        fontSize: FontSizes.small,
        marginTop: 2,
        marginBottom: 5,
    },
});

export default AppInput;
