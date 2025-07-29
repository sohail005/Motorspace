import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './TermsFullViewStyles';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import AppText from '../../../components/AppText';

const TermsFullView = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppHeaderCommon title="" onLeftPress={() => navigation.goBack()} />

            <View style={styles.mainConatiner}>
                

                <ScrollView style={styles.termsScroll}>
                <View style={styles.headerContainer}>
                    <AppText style={styles.logoText}>MOTORSPACE</AppText>
                    <AppText style={styles.title}>Terms & Conditions</AppText>
                </View>
                    <AppText style={styles.termItem}>1. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</AppText>
                    <AppText style={styles.termItem}>2. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</AppText>
                    <AppText style={styles.termItem}>3. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Laculis massa nisl malesuada lacinia integer nunc posuere.</AppText>
                    <AppText style={styles.termItem}>4. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</AppText>
                    <AppText style={styles.termItem}>5. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</AppText>
                    <AppText style={styles.termItem}>6. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</AppText>
                    <AppText style={styles.termItem}>7. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</AppText>
                    <AppText style={styles.termItem}>8. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</AppText>
                    <AppText style={styles.termItem}>9. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Laculis massa nisl malesuada lacinia integer nunc posuere.</AppText>
                    <AppText style={styles.termItem}>10. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</AppText>
                    <AppText style={styles.termItem}>11. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</AppText>
                    <AppText style={styles.termItem}>12. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Laculis massa nisl malesuada lacinia integer nunc posuere.</AppText>
                    <AppText style={styles.termItem}>13. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</AppText>
                    <AppText style={styles.termItem}>14. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</AppText>
                    <AppText style={styles.termItem}>15. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</AppText>
                    <AppText style={styles.termItem}>16. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</AppText>
                    <AppText style={styles.termItem}>17. In id cursus mi pretium tellus duis convallis.</AppText>
                </ScrollView>

            </View>
        </View>
    );
};

export default TermsFullView;
