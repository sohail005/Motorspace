import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Linking,
  Platform,
  Alert,
} from 'react-native';
import VersionCheck from 'react-native-version-check';
import DeviceInfo from 'react-native-device-info';
import { AppColors } from '../constants/colors';

const AppUpdateChecker = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [storeUrl, setStoreUrl] = useState('');
  const [isMandatory, setIsMandatory] = useState(false);
  const [newVersion, setNewVersion] = useState('');

  useEffect(() => {
    if (Platform.OS == 'android') {
      checkAppUpdate();
    } else {
      checkIOSUpdate();
    }
  }, []);

  const checkIOSUpdate = async () => {
    try {
      // Use VersionCheck to get current and latest versions
      const updateInfo = await VersionCheck.needUpdate();
      const latestVersion = updateInfo.latestVersion;
      const currentVersion = updateInfo.currentVersion;
      const storeUrl = updateInfo.storeUrl;
      console.log("updateInfo:", DeviceInfo.getApiLevel());

      const resultCompared = compareVersions(currentVersion, latestVersion);
      // ✅ Only prompt if App Store version is newer
      if (resultCompared === -1) {
        setStoreUrl(storeUrl);
        setNewVersion(latestVersion);
        setIsVisible(true);
      }
    } catch (err) {
      console.log('Error checking iOS update:', err);
    }
  };

  const compareVersions = (v1, v2) => {
    const v1Parts = v1.split('.').map(Number);
    const v2Parts = v2.split('.').map(Number);

    const len = Math.max(v1Parts.length, v2Parts.length);
    for (let i = 0; i < len; i++) {
      const a = v1Parts[i] || 0;
      const b = v2Parts[i] || 0;
      if (a > b) return 1;
      if (a < b) return -1;
    }
    return 0;
  };

  const checkAppUpdate = async () => {
    try {
      // Get current app version
      const currentVersion = DeviceInfo.getVersion();
      console.log("currentVersion:", currentVersion);

      // Check for update
      const updateInfo = await VersionCheck.needUpdate();

      if (updateInfo?.isNeeded) {
        setStoreUrl(updateInfo.storeUrl);
        setNewVersion(updateInfo.latestVersion);

        // You can implement your logic to determine if update is mandatory
        // For example, compare versions to decide
        const isCriticalUpdate = isVersionCritical(
          currentVersion,
          updateInfo.latestVersion,
        );
        setIsMandatory(isCriticalUpdate);
        setIsVisible(true);
      }
    } catch (error) {
      console.log('Error checking app update:', error);
    }
  };
  // Helper function to determine if update is critical/mandatory
  const isVersionCritical = (current, latest) => {
    // Implement your logic here - this is a simple example
    // Compare major versions (1.x.x) to decide if mandatory
    const currentMajor = parseInt(current.split('.')[0], 10);
    const latestMajor = parseInt(latest.split('.')[0], 10);
    return latestMajor > currentMajor;
  };

  const handleUpdate = () => {
    Linking.openURL(storeUrl).catch(err => {
      Alert.alert('Error', 'Unable to open app store');
    });

    if (!isMandatory) {
      setIsVisible(false);
    }
  };

  const handleLater = () => {
    setIsVisible(false);
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
    // onRequestClose={() => !isMandatory && setIsVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <AppText style={styles.title}>New Update Available</Text>
          <AppText style={styles.message}>
            Version {newVersion} is available on{' '}
            {Platform.OS === 'ios' ? 'App Store' : 'Play Store'}.
          </Text>

          {isMandatory && (
            <AppText style={styles.mandatoryText}>
              This is a mandatory update to continue using the app.
            </Text>
          )}

          <View style={styles.buttonContainer}>
            {/* {!isMandatory && (
              <TouchableOpacity
                style={[styles.button, styles.laterButton]}
                onPress={handleLater}>
                <AppText style={styles.buttonText}>Later</Text>
              </TouchableOpacity>
            )} */}

            <TouchableOpacity
              style={[styles.button, styles.updateButton]}
              onPress={handleUpdate}>
              <AppText style={styles.buttonText}>Update Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  mandatoryText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  laterButton: {
    backgroundColor: AppColors.borderColor,
  },
  updateButton: {
    backgroundColor: AppColors.defaultColor,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
};

export default AppUpdateChecker;
