import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppColors } from '../constants/colors';
import { FontSizes } from '../constants/fontsizes';

const AppInput = ({
    placeholder,
    icon,
    iconStyle,
    label,
    required, // ✅ new prop
    labelStyle,
    errorMessage,
    secureTextEntry,
    style,
    inputStyle,
    ...rest
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

    return (
        <View style={style}>
            {label && (
                <Text style={[styles.label, labelStyle]}>
                    {label}
                    {required && <Text style={styles.required}> *</Text>}
                </Text>
            )}

            <View
                style={[
                    styles.container,
                    errorMessage && styles.errorBorder,
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

                {secureTextEntry && (
                    <TouchableOpacity
                        onPress={() => setIsPasswordVisible(prev => !prev)}
                    >
                        <Icon
                            name={isPasswordVisible ? 'eye' : 'eye-off'}
                            size={24}
                            color={AppColors.primary}
                            style={styles.eyeIcon}
                        />
                    </TouchableOpacity>
                )}
            </View>

            <Text style={styles.errorText}>
                {errorMessage ? errorMessage : ' '}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: FontSizes.smallMedium,
        fontWeight: '500',
        marginBottom: 4,
        color: AppColors.textPrimary,
        marginTop: 10
    },
    required: {
        color: AppColors.primary,
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
    errorBorder: {
        borderColor: AppColors.errorRed,
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
        marginLeft: 8,
    },
    errorText: {
        color: AppColors.errorRed,
        fontSize: FontSizes.small,
        marginTop: 4,
    },
});

export default AppInput;
