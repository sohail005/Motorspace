// src/config/formConfig.js
import * as yup from 'yup';

export const formConfig = {
  general: {
    title: 'General',
    fields: [
      {
        name: 'make',
        label: 'Make',
        validation: yup.string().required('Make is required'),
      },
      {
        name: 'model',
        label: 'Model',
        validation: yup.string().required('Model is required'),
      },
      {
        name: 'year',
        label: 'Year',
        validation: yup.number()
          .typeError('Year must be a number')
          .required('Year is required')
          .min(1900, 'Year must be after 1900')
          .max(new Date().getFullYear() + 1, 'Year cannot be in the future'),
      },
    ],
  },
  performance: {
    title: 'Performance',
    fields: [
      {
        name: 'topSpeed',
        label: 'Top Speed (km/h)',
        validation: yup.number()
          .typeError('Must be a number')
          .required('Top speed is required')
          .positive('Must be a positive number'),
      },
      {
        name: 'acceleration',
        label: '0-100 km/h (s)',
        validation: yup.number()
          .typeError('Must be a number')
          .required('Acceleration is required')
          .positive('Must be a positive number'),
      },
    ],
  },
  tyres: {
    title: 'Tyres',
    fields: [
        {
            name: 'frontTyre',
            label: 'Front Tyre Size',
            validation: yup.string().required('Front tyre size is required').matches(/^[0-9]{3}\/[0-9]{2} R[0-9]{2}$/, 'Format must be e.g., 225/45 R17'),
        },
        {
            name: 'rearTyre',
            label: 'Rear Tyre Size',
            validation: yup.string().required('Rear tyre size is required').matches(/^[0-9]{3}\/[0-9]{2} R[0-9]{2}$/, 'Format must be e.g., 225/45 R17'),
        }
    ]
  }
  // ... You can add other sections like 'vehicleDimensions', 'engineDriveTrain' etc. here
};