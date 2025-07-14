import { PermissionsAndroid, Platform } from 'react-native';

/**
 * Request gallery (photo storage) permission for Android
 * @returns {Promise<'granted' | 'denied'>}
 */
export const requestGalleryPermission = async () => {
  if (Platform.OS !== 'android') return 'granted';

  try {
    let permission;

    if (Platform.Version >= 33) {
      // Android 13+
      permission = PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES;
    } else {
      // Android 12 and below
      permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
    }

    const granted = await PermissionsAndroid.request(permission, {
      title: 'Gallery Permission',
      message: 'This app needs access to your photos to upload an image.',
      buttonPositive: 'OK',
    });

    return granted === PermissionsAndroid.RESULTS.GRANTED ? 'granted' : 'denied';
  } catch (error) {
    console.warn('Gallery permission error:', error);
    return 'denied';
  }
};
