import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import AppImage from '../../../components/AppImage';
import AppHeader from '../../../components/AppHeader';
import { styles } from './CompleteSaleStyles';
import { IMAGES } from '../../../assets/Images/ImagePath';
import AppBadge from '../../../components/AppBadge';
import FinaliseSalePortal from './FinaliseSalePortal';
import { useNavigation } from '@react-navigation/native';

const CompleteSale = () => {
  const navigation = useNavigation(); // Assuming you are using react-navigation
  const [showFinalisePortal, setShowFinalisePortal] = useState(false);

  const OnProceedClcik = () => {
    setShowFinalisePortal(true);
  }
  return (
    <View style={styles.container}>
      <AppHeader leftIcon rightIcon={IMAGES.home} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <AppText style={styles.title}>Complete Sale</AppText>
        {/* Sold By Section */}
        <View style={styles.section}>
          <AppText style={styles.sectionTitle}>Sold By</AppText>
          <View style={styles.divider} />
          <View style={styles.rowBetween}>
            <View style={styles.rowStart}>
              <AppImage
                source={IMAGES.private}
                style={styles.avatar}
                resizeMode="cover"
              />
              <View>
                <AppText style={styles.name}>Thomas Lamb</AppText>
                <AppText style={styles.company}>Motorspace Testing</AppText>
              </View>
            </View>
          </View>
        </View>

        {/* Vehicle Details Section */}
        <View style={styles.section}>
          <AppText style={styles.sectionTitle}>Vehicle Details</AppText>
          <View style={styles.divider} />
          <AppText style={styles.carTitle}>Mercedes-Benz CLS</AppText>
          <AppText style={styles.carSubtitle}>CLS 350d AMG Line 4dr 9G-Tronic</AppText>
          <View style={styles.regPlateContainer}>
            <AppBadge text={"LP19 RET"} badgeStyle={styles.plateBadge} />

          </View>
          <View style={styles.dividerthin} />
          <View style={styles.rowBetween}>
            <AppText style={styles.label}>Agreed Price:</AppText>
            <AppText style={styles.price}>£24,650</AppText>
          </View>
        </View>

        {/* Purchased By Section */}
        <View style={styles.section}>
          <AppText style={styles.sectionTitle}>Purchased By</AppText>
          <View style={styles.divider} />
          <View style={styles.rowStart}>
            <AppImage
              source={IMAGES.private}
              style={styles.avatar}
              resizeMode="contain"
            />
            <View>
              <AppText style={styles.name}>Sally Thimble</AppText>
              <AppText style={styles.company}>Shark Fin Motors</AppText>
            </View>
          </View>

          <View style={styles.actionRow}>
            <AppTouchable style={styles.contactButton}>
              <AppText style={styles.contactText}>Contact Buyer</AppText>
            </AppTouchable>
            <AppTouchable style={styles.emailButton}>
              <AppText style={styles.emailText}>Email Buyer</AppText>
            </AppTouchable>
          </View>
        </View>

        {/* Proceed Button */}
        <View style={styles.proceedButtonContainer}>
          <AppTouchable onPress={() => OnProceedClcik()} style={styles.proceedButton}>
            <AppText style={styles.proceedText}>Proceed</AppText>
          </AppTouchable>
        </View>
      </ScrollView>
      <FinaliseSalePortal
        visible={showFinalisePortal}
        onDismiss={() => setShowFinalisePortal(false)}
        onFinalise={() => {
          setShowFinalisePortal(false);
          navigation.navigate('SaleSuccess'); // Navigate to SaleSuccess screen
          // handle finalise logic
        }}
      />
    </View>
  );
};



export default CompleteSale;
