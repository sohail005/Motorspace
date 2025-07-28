import * as yup from 'yup';

export const formConfig = {
    general: {
        title: 'General',
        fields: [
            {
                name: 'adBlue',
                label: 'AdBlue? (Yes/No)',
                type: 'dropdown',
                options: ['Yes', 'No'],
                validation: yup.string(),
            },
            {
                name: 'alternativeFuel',
                label: 'Alternative Fuel Qualifying? (Yes/No)',
                type: 'dropdown',
                options: ['Yes', 'No'],
                validation: yup.string(),
            },
            {
                name: 'badgeEngineCC',
                label: 'Badge Engine CC',
                type: 'text',
                validation: yup.string(),
            },
            {
                name: 'badgePower',
                label: 'Badge Power',
                type: 'text',
                validation: yup.string(),
            },
            {
                name: 'coinDescription',
                label: 'Coin Description',
                type: 'text',
                validation: yup.string(),
            },
            {
                name: 'coinSeries',
                label: 'Coin Series',
                type: 'text',
                validation: yup.string(),
            },
        ],
    },

    performance: {
        title: 'Performance',
        fields: [
            {
                name: 'zeroToSixty',
                label: '0 to 60 (MPH)',
                type: 'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in seconds')
            },
            {
                name: 'enginePowerBhp',
                label: 'Engine Power (BHP)',
                type: 'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in BHP')
            },
            {
                name: 'enginePowerKw',
                label: 'Engine Power (KW)',
                type: 'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in KW')
            },
            {
                name: 'enginePowerRpm',
                label: 'Engine Power (RPM)',
                type: 'number',
                validation: yup.string()
                    .matches(/^[0-9]+$/, 'Must be a valid number in RPM')
            },
            {
                name: 'engineTorqueLbsFt',
                label: 'Engine Torque (LBS.FT)',
                type: 'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in LBS.FT')
            },
            {
                name: 'engineTorqueNm',
                label: 'Engine Torque (NM)',
                type: 'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in NM')
            }
        ]
    },

    tyres: {
        title: 'Tyres',
        fields: [
            {
                name: 'alloywheels',
                label: 'Alloy Wheels? (Yes/No)',
                type: 'dropdown',
                options: ['Yes', 'No'],
                validation: yup.string(),
            },
            {
                name: 'spacesaver',
                label: 'Space Saver? (Yes/No)',
                type: 'dropdown',
                options: ['Yes', 'No'],
                validation: yup.string(),
            },
            {
                name: 'frontTyre',
                label: 'Front Tyre Size',
                type: 'text',
                validation: yup.string().matches(/^[0-9]{3}\/[0-9]{2} R[0-9]{2}$/, 'Format must be e.g., 225/45 R17'),
            },
            {
                name: 'rearTyre',
                label: 'Rear Tyre Size',
                type: 'text',
                validation: yup.string().matches(/^[0-9]{3}\/[0-9]{2} R[0-9]{2}$/, 'Format must be e.g., 225/45 R17'),
            },
            {
                name: 'wheelstyle',
                label: 'Wheel Style',
                type: 'text',
                validation: yup.string(),
            },
            {
                name: 'wheeltype',
                label: 'Wheel Type',
                type: 'text',
                validation: yup.string(),
            },
        ],
    },

    vehicledimensions: {
        title: 'Vehicle Dimensions',
        fields: [
            {
                name: 'length',
                label: 'Length (mm)',
                type: 'text',
                validation: yup.string(),
            },
            {
                name: 'width',
                label: 'Width (mm)',
                type: 'text',
                validation: yup.string(),
            },
            {
                name: 'height',
                label: 'Height (mm)',
                type: 'text',
                validation: yup.string(),
            },
        ],
    },

    weightcapacities: {
        title: 'Weight & Capacities',
        fields: [
            {
                name: 'fullTankCapacity',
                label: 'Full Tank Capacity (Litres)',
                type:'number',
                validation: yup.string(),
            },
            {
                name: 'grossVehicleWeight',
                label: 'Gross Vehicle Weight (KG)',
                type:'number',
                validation: yup.string(),
            },
            {
                name: 'luggageCapacity',
                label: 'Luggage Capacity (Seats Down)',
                type:'number',
                validation: yup.string(),
            },
            {
                name: 'maxLoadingWeight',
                label: 'Max. Loading Weight (KG)',
                type:'number',
                validation: yup.string(),
            },
            {
                name: 'maxRoofLoad',
                label: 'Max. Roof Load (KG)',
                type:'number',
                validation: yup.string(),
            },
            {
                name: 'maxTowingWeightBraked',
                label: 'Max. Towing Weight (Braked)',
                type:'number',
                validation: yup.string(),
            },
            {
                name: 'maxTowingWeightUnbraked',
                label: 'Max. Towing Weight (Unbraked)',
                type:'number',
                validation: yup.string(),
            },
        ],
    },

    enginedrivetrain: {
        title: 'Engine & Drive Train',
        fields: [
            {
                name: 'camshaft',
                label: 'Camshaft',
                validation: yup.string()
            },
            {
                name: 'catalyticConverter',
                label: 'Catalytic Converter? (Yes/No)',
                options: ['Yes', 'No'],
                type: 'dropdown',
                validation: yup.string()
            },
            {
                name: 'compressionRatio',
                label: 'Compression Ratio',
                validation: yup.string()
            },
            {
                name: 'cylinderLayout',
                label: 'Cylinder Layout',
                validation: yup.string()
            },
            {
                name: 'cylinders',
                label: 'Cylinders',
                validation: yup.string()
            },
            {
                name: 'cylindersBore',
                label: 'Cylinders - Bore (mm)',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in mm')
            },
            {
                name: 'cylindersStroke',
                label: 'Cylinders - Stroke (mm)',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in mm')
            },
            {
                name: 'engineCode',
                label: 'Engine Code',
                validation: yup.string()
            },
            {
                name: 'engineLayout',
                label: 'Engine Layout',
                validation: yup.string()
            },
            {
                name: 'fuelDelivery',
                label: 'Fuel Delivery',
                validation: yup.string()
            },
            {
                name: 'gears',
                label: 'Gears',
                type:'number',
                validation: yup.string()
            },
            {
                name: 'noOfValves',
                label: 'No. of Valves',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+$/, 'Must be a valid number')
            },
            {
                name: 'transmission',
                label: 'Transmission',
                validation: yup.string()
            }
        ]
    },

    fuelconsumption: {
        title: 'Fuel Consumption',
        fields: [
            {
                name: 'urbanConsumption',
                label: 'Urban (mpg)',
                type: 'text',
                validation: yup.string(),
            },
            {
                name: 'extraUrbanConsumption',
                label: 'Extra Urban (mpg)',
                type: 'text',
                validation: yup.string(),
            },
            {
                name: 'combinedConsumption',
                label: 'Combined (mpg)',
                type: 'text',
                validation: yup.string(),
            },
        ],
    },
    emissions: {
        title: 'Emissions',
        fields: [
            {
                name: 'co',
                label: 'CO',
                validation: yup.string()
            },
            {
                name: 'hcNox',
                label: 'HC+NOX',
                validation: yup.string()
            },
            {
                name: 'noiseLevelDb',
                label: 'Noise Level DB(A)',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in dB(A)')
            },
            {
                name: 'nox',
                label: 'NOX',
                validation: yup.string()
            },
            {
                name: 'standardEuroEmissions',
                label: 'Standard Euro Emissions',
                validation: yup.string()
            },
            {
                name: 'wltpCo2ComboTeh',
                label: 'WLTP - CO2 (g/km) - Combo - TEH',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in g/km')
            },
            {
                name: 'wltpCo2ComboTel',
                label: 'WLTP - CO2 (g/km) - Combo - TEL',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in g/km')
            },
            {
                name: 'wltpCo2ExtraHighTeh',
                label: 'WLTP - CO2 (g/km) - Extra High - TEH',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in g/km')
            },
            {
                name: 'wltpCo2ExtraHighTel',
                label: 'WLTP - CO2 (g/km) - Extra High - TEL',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in g/km')
            },
            {
                name: 'wltpCo2HighTeh',
                label: 'WLTP - CO2 (g/km) - High - TEH',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in g/km')
            },
            {
                name: 'wltpCo2HighTel',
                label: 'WLTP - CO2 (g/km) - High - TEL',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in g/km')
            },
            {
                name: 'wltpCo2LowTeh',
                label: 'WLTP - CO2 (g/km) - Low - TEH',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in g/km')
            },
            {
                name: 'wltpCo2LowTel',
                label: 'WLTP - CO2 (g/km) - Low - TEL',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in g/km')
            },
            {
                name: 'wltpCo2MediumTeh',
                label: 'WLTP - CO2 (g/km) - Medium - TEH',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in g/km')
            },
            {
                name: 'wltpCo2MediumTel',
                label: 'WLTP - CO2 (g/km) - Medium - TEL',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in g/km')
            }
        ]
    },
    fuelconsumption: {
        title: 'Fuel Consumption',
        fields: [

            {
                name: 'ecdirective1999/100/ECApplies',
                label: 'EC Directive 1999/100/EC Applies? (Yes/No)',
                type: 'dropdown',
                options:['Yes','No'],
                validation: yup.string()
            },
            {
                name: 'ecExtraUrban',
                label: 'EC Extra Urban (Mpg)',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in MPG')
            },
            {
                name: 'ecUrban',
                label: 'EC Urban (Mpg)',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in MPG')
            },
            {
                name: 'wltpFcComboTeh',
                label: 'WLTP - FC (L/100km) - Combo - TEH',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in L/100km')
            },
            {
                name: 'wltpFcComboTel',
                label: 'WLTP - FC (L/100km) - Combo - TEL',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in L/100km')
            },
            {
                name: 'wltpFcExtraHighTeh',
                label: 'WLTP - FC (L/100km) - Extra High - TEH',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in L/100km')
            },
            {
                name: 'wltpFcExtraHighTel',
                label: 'WLTP - FC (L/100km) - Extra High - TEL',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in L/100km')
            },
            {
                name: 'wltpFcHighTeh',
                label: 'WLTP - FC (L/100km) - High - TEH',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in L/100km')
            },
            {
                name: 'wltpFcHighTel',
                label: 'WLTP - FC (L/100km) - High - TEL',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in L/100km')
            },
            {
                name: 'wltpFcLowTeh',
                label: 'WLTP - FC (L/100km) - Low - TEH',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in L/100km')
            },
            {
                name: 'wltpFcLowTel',
                label: 'WLTP - FC (L/100km) - Low - TEL',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in L/100km')
            },
            {
                name: 'wltpFcMediumTeh',
                label: 'WLTP - FC (L/100km) - Medium - TEH',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in L/100km')
            },
            {
                name: 'wltpFcMediumTel',
                label: 'WLTP - FC (L/100km) - Medium - TEL',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in L/100km')
            },
            {
                name: 'wltpMpgComboTeh',
                label: 'WLTP - MPG - Combo - TEH',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in MPG')
            },
            {
                name: 'wltpMpgComboTel',
                label: 'WLTP - MPG - Combo - TEL',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in MPG')
            },
            {
                name: 'wltpMpgExtraHighTeh',
                label: 'WLTP - MPG - Extra High - TEH',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in MPG')
            },
            {
                name: 'wltpMpgExtraHighTel',
                label: 'WLTP - MPG - Extra High - TEL',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in MPG')
            },
            {
                name: 'wltpMpgHighTeh',
                label: 'WLTP - MPG - High - TEH',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in MPG')
            },
            {
                name: 'wltpMpgHighTel',
                label: 'WLTP - MPG - High - TEL',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in MPG')
            },
            {
                name: 'wltpMpgLowTeh',
                label: 'WLTP - MPG - Low - TEH',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in MPG')
            },
            {
                name: 'wltpMpgLowTel',
                label: 'WLTP - MPG - Low - TEL',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in MPG')
            },
            {
                name: 'wltpMpgMediumTeh',
                label: 'WLTP - MPG - Medium - TEH',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in MPG')
            },
            {
                name: 'wltpMpgMediumTel',
                label: 'WLTP - MPG - Medium - TEL',
                type:'number',
                validation: yup.string()
                    .matches(/^[0-9]+(\.[0-9]+)?$/, 'Must be a valid number in MPG')
            }
        ]
    }


};
