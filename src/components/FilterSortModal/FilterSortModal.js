import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Portal,
    Modal,
    Text,
    Button,
    IconButton,
    TouchableRipple,
    Menu,
    Divider,
    Icon,
} from 'react-native-paper';
import { AppColors } from '../../constants/colors';
import { Fonts } from '../../constants/Fonts';
import { FontSizes } from '../../constants/fontsizes';
import DimensionsUtil from '../../constants/Dimensions';
import AppText from '../AppText';

// --- Default State & Sample Data ---
const initialFiltersState = {
    sort: 'Most Recent',
    distance: 'Any',
    model: 'Any',
    price: 'Any',    // Represents max price
    year: 'Any',     // Represents min year
    mileage: 'Any',  // Represents max mileage
};

// In a real app, this might be fetched or stored elsewhere

const SORT_OPTIONS = ['Most Recent', 'Price (Low to High)', 'Price (High to Low)', 'Distance', 'Age (Newest)'];
const DISTANCE_OPTIONS = ['Any', '10 miles', '25 miles', '50 miles', '100 miles'];
const MODEL_OPTIONS = ['Any', 'Ford', 'BMW', 'Audi', 'Volkswagen', 'Mercedes-Benz'];
const PRICE_OPTIONS = ['Any', 5000, 10000, 15000, 20000, 30000, 50000];
const YEAR_OPTIONS = ['Any', ...Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i)];
const MILEAGE_OPTIONS = ['Any', 10000, 20000, 50000, 80000, 100000];

// Helper to format values for display, matching the design
const formatDisplayValue = (key, value) => {
    if (value === 'Any') return 'Any';
    switch (key) {
        case 'price': return `Up to £${Number(value).toLocaleString()}`;
        case 'year': return `From ${value}`;
        case 'mileage': return `Up to ${Number(value).toLocaleString()} miles`;
        default: return value;
    }
}

const FilterSortModal = ({ visible, onDismiss, onApplyFilters, initialFilters = {} }) => {
    const [filters, setFilters] = useState({ ...initialFiltersState, ...initialFilters });
    const [menuVisible, setMenuVisible] = useState({});

    useEffect(() => {
        if (visible) {
            setFilters({ ...initialFiltersState, ...initialFilters });
        }
    }, [visible, initialFilters]);

    const handleUpdateFilter = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const openMenu = (name) => setMenuVisible(prev => ({ ...prev, [name]: true }));
    const closeMenu = (name) => setMenuVisible(prev => ({ ...prev, [name]: false }));

    const handleApply = () => {
        onApplyFilters({ ...filters });
        onDismiss();
    };

    // Reusable Row Component
    const FilterRow = ({ icon, label, value, onPress }) => (
        <TouchableRipple onPress={onPress}>
            <View style={styles.rowContent}>
                <View style={styles.labelContainer}>
                    <Icon source={icon} size={28} color={AppColors.buttonOrange} />
                    <Text style={styles.label}>{label}</Text>
                </View>
                <Text style={styles.value}>{value}</Text>
            </View>
        </TouchableRipple>
    );

    // Reusable Menu wrapper to keep the main render clean
    const FilterMenu = ({ menuName, options, filterKey, children }) => (
        <Menu
            visible={menuVisible[menuName]}
            onDismiss={() => closeMenu(menuName)}
            anchor={children}
            contentStyle={{ backgroundColor: AppColors.white }}
        >
            {options.map(option => (
                <Menu.Item
                    key={String(option)}
                    onPress={() => {
                        handleUpdateFilter(filterKey, option);
                        closeMenu(menuName);
                    }}
                    titleStyle={{ color: AppColors.textPrimary }}
                    title={String(option)}
                />
            ))}
        </Menu>
    );

    return (
        <Portal>
            <Modal
                visible={visible}
                onDismiss={onDismiss}
                contentContainerStyle={styles.modalContainer}
                style={styles.modalWrapper} // Positions the modal at the top
            >
                <View style={styles.header}>
                    <AppText variant="titleMedium" style={styles.headerText}>Filter & Sort</AppText>
                    <IconButton icon="close" size={38} onPress={onDismiss} style={styles.closeButton} />
                </View>

                <FilterMenu menuName="sort" options={SORT_OPTIONS} filterKey="sort">
                    <FilterRow icon="swap-vertical" label="Sort" value={filters.sort} onPress={() => openMenu('sort')} />
                </FilterMenu>
                <Divider style={styles.divider} />

                <FilterMenu menuName="distance" options={DISTANCE_OPTIONS} filterKey="distance">
                    <FilterRow icon="map-marker-outline" label="Distance" value={filters.distance} onPress={() => openMenu('distance')} />
                </FilterMenu>
                <Divider style={styles.divider} />

                <FilterMenu menuName="model" options={MODEL_OPTIONS} filterKey="model">
                    <FilterRow icon="shield-outline" label="Model" value={filters.model} onPress={() => openMenu('model')} />
                </FilterMenu>
                <Divider style={styles.divider} />

                <FilterMenu menuName="price" options={PRICE_OPTIONS} filterKey="price">
                    <FilterRow icon="currency-gbp" label="Price" value={formatDisplayValue('price', filters.price)} onPress={() => openMenu('price')} />
                </FilterMenu>
                <Divider style={styles.divider} />

                <FilterMenu menuName="year" options={YEAR_OPTIONS} filterKey="year">
                    <FilterRow icon="calendar-blank-outline" label="Year" value={formatDisplayValue('year', filters.year)} onPress={() => openMenu('year')} />
                </FilterMenu>
                <Divider style={styles.divider} />

                <FilterMenu menuName="mileage" options={MILEAGE_OPTIONS} filterKey="mileage">
                    <FilterRow icon="speedometer" label="Mileage" value={formatDisplayValue('mileage', filters.mileage)} onPress={() => openMenu('mileage')} />
                </FilterMenu>

                <Button mode="contained" onPress={handleApply} style={styles.applyButton} labelStyle={styles.applyButtonText}>
                    Apply Filters
                </Button>
            </Modal>
        </Portal>
    );
};


const styles = StyleSheet.create({
    modalWrapper: {
        justifyContent: 'flex-start',
        paddingTop: 60, // Adjust this value based on your app's status bar height
    },
    modalContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 15,
        marginHorizontal: 15,
        borderRadius: 20,
        elevation: 8,
        shadowColor: AppColors.textPrimary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
    },
    header: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    headerText: {
        fontFamily: Fonts.bold,
        color: AppColors.primary,
        fontSize: FontSizes.xxLarge,
        alignSelf: 'center',
        flex: 1,
        textAlign: 'center'
    },
    closeButton: {
        marginRight: -15,
    },
    rowContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: FontSizes.medium,
        marginLeft: 18,
        color: AppColors.textPrimary,
        fontFamily: Fonts.semiBold
    },
    value: {
        fontSize: FontSizes.medium,
        color: AppColors.filltervalue, // Medium Gray
    },
    divider: {
        backgroundColor: AppColors.borderColor, // Light Gray
    },
    applyButton: {
        marginTop: 25,
        backgroundColor: AppColors.buttonOrange, // Orange
        borderRadius: 12,
        paddingVertical: 6,
        elevation: 2,
        width: DimensionsUtil.SCREEN_WIDTH / 2.5,
        alignSelf: 'center'
    },
    applyButtonText: {
        fontSize: FontSizes.medium,
        color: AppColors.white,
        fontFamily: Fonts.semiBold
    },
});

export default FilterSortModal;