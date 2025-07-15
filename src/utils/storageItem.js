// src/utils/storageItem.js

import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const storageItem = {
  /**
   * Stores a value (string/object/number) in MMKV
   * @param {string} key
   * @param {any} value
   */
  setItem: (key, value) => {
    try {
      const serialized = typeof value === 'string' ? value : JSON.stringify(value);
      storage.set(key, serialized);
    } catch (error) {
      console.error(`storageItem.setItem: Failed to save key "${key}"`, error);
    }
  },

  /**
   * Retrieves a value from MMKV
   * @param {string} key
   * @returns {any | null}
   */
  getItem: (key) => {
    try {
      const value = storage.getString(key);
      if (value == null) return null;

      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    } catch (error) {
      console.error(`storageItem.getItem: Failed to retrieve key "${key}"`, error);
      return null;
    }
  },

  /**
   * Removes an item from MMKV
   * @param {string} key
   */
  removeItem: (key) => {
    try {
      storage.delete(key);
    } catch (error) {
      console.error(`storageItem.removeItem: Failed to remove key "${key}"`, error);
    }
  },

  /**
   * Checks if a key exists in MMKV
   * @param {string} key
   * @returns {boolean}
   */
  hasItem: (key) => {
    return storage.contains(key);
  },

  /**
   * Clears all data from MMKV
   */
  clearAllItems: () => {
    try {
      storage.clearAll();
    } catch (error) {
      console.error('storageItem.clearAllItems: Failed to clear storage', error);
    }
  },
};

export default storageItem;
