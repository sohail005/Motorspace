// src/navigation/NavigationService.js
import { CommonActions, createNavigationContainerRef } from '@react-navigation/native';
import { switchTab } from './TabService';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
export function goBack(fallbackScreen, params) {
  if (navigationRef.isReady()) {
    if (navigationRef.canGoBack()) {
      navigationRef.goBack();
    } else if (fallbackScreen) {
      // Navigate to a fallback screen if no history is available
      navigationRef.navigate(fallbackScreen, params);
    } else {
      switchTab(0); // Sell Cars tab index
      // navigate("BuyCarsList");
      console.log("No previous screen to go back to");
    }
  }
}
export function resetStack(tabName, firstScreenName) {
  console.log('Resetting stack:', tabName, firstScreenName);
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: tabName,
            state: {
              index: 0,
              routes: [{ name: firstScreenName }],
            },
          },
        ],
      })
    );
  }
}