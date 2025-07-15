import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { AppColors } from '../constants/colors';
import { FontSizes } from '../constants/fontsizes';
import Icon from 'react-native-vector-icons/Ionicons';
const AppInput = ({
    placeholder,
    icon,
    iconStyle,
    label,
    errorMessage,
    secureTextEntry,
    style,
    inputStyle,
    ...rest
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

    return (
        <View style={style}>
            {label && <Text style={styles.label}>{label}</Text>}

            <View
                style={[
                    styles.container,
                    errorMessage && { borderColor: AppColors.errorRed },
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
                    style={[styles.input, inputStyle]}
                    secureTextEntry={!isPasswordVisible}
                    {...rest}
                />

                {/* Eye Icon */}
                {secureTextEntry && (
                    <TouchableOpacity onPress={() => setIsPasswordVisible(prev => !prev)}>
                        <Icon
                            name={isPasswordVisible ? 'eye' : 'eye-off'}
                            size={24}
                            color={AppColors.primary}
                            style={[styles.eyeIcon, { fontSize: FontSizes.xLarge }]}
                        />
                    </TouchableOpacity>
                )}
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
    eyeIcon: {
        marginLeft: 8,
    },
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        borderRadius: 8,
        paddingHorizontal: 12,
        alignItems: 'center',
        backgroundColor: AppColors.white,
    },
    input: {
        flex: 1,
        fontSize: FontSizes.smallMedium,
        color: AppColors.textPrimary,
        minHeight: 50,
    },
    icon: {
        width: 18,
        height: 18,
        marginRight: 8,
    },
    eyeIcon: {
        fontSize: 18,
        marginLeft: 8,
    },
    errorText: {
        color: AppColors.errorText,
        fontSize: FontSizes.small,
        marginTop: 2,
        marginBottom: 5,
    },
});

export default AppInput;
