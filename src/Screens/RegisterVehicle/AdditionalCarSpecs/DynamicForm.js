import React, { useMemo } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Picker } from '@react-native-picker/picker';
import { AppColors } from '../../../constants/colors';
import { FontSizes } from '../../../constants/fontsizes';
import { Fonts } from '../../../constants/Fonts';
import DropdownMenuPaper from './DropdownMenuPaper';

const DynamicForm = ({ sectionConfig, onSubmitForm, defaultValues = {} }) => {
  if (!sectionConfig || !Array.isArray(sectionConfig.fields)) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Invalid section configuration.</Text>
      </View>
    );
  }

  const validationSchema = useMemo(() => {
    const schemaFields = sectionConfig.fields.reduce((acc, field) => {
      acc[field.name] = field.validation;
      return acc;
    }, {});
    return yup.object().shape(schemaFields);
  }, [sectionConfig]);

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    onSubmitForm?.(data);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>{sectionConfig.title}</Text> */}
      {sectionConfig.fields.map((field) => (
        <View key={field.name} style={styles.fieldContainer}>
          <Text style={styles.label}>{field.label}</Text>

          <Controller
            control={control}
            name={field.name}
            render={({ field: { onChange, onBlur, value } }) => {
              if (field.type === 'dropdown') {
                return (
                  <View style={styles.dropdownWrapper}>
                    <DropdownMenuPaper
                      value={value}
                      onChange={onChange}
                      options={field.options}
                      onSubmit={handleSubmit(onSubmit)}
                    />

                  </View>
                );
              }

              return (
                <TextInput
                 allowFontScaling={false}
                  style={[styles.input, errors[field.name] && styles.inputError]}
                  onBlur={onBlur}
                  cursorColor={AppColors.primary}
                  onChangeText={(val) => {
                    onChange(val);
                    handleSubmit(onSubmit)();
                  }}
                  value={value}
                  keyboardType={
                    field?.type === 'number' ? 'numeric' : 'default'
                  }
                />
              );
            }}
          />

          {errors[field.name] && (
            <Text style={styles.errorText}>{errors[field.name].message}</Text>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: FontSizes.medium,
    color: AppColors.textPrimary,
    fontFamily: Fonts.regular
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 12 : 0,
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 50
  },
  dropdown: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
  },
  errorContainer: {
    padding: 20,
    backgroundColor: '#fff3f3',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
  },
  dropdownWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden', // Prevent Android cutoffs
    marginBottom: 4,
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#000', // Makes selected text visible
  },

});

export default DynamicForm;
