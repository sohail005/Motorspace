// src/services/logoutService.ts

import { AppColors } from "../../constants/colors";
import { navigate } from "../../navigation/NavigationService";
import { logout, setStatusBarColor } from "../../redux/features/user/userSlice";
import { store } from "../../redux/store";

export const appLogout = () => {
    // 1. Clear Redux auth state
    store.dispatch(logout());//setStatusBarColor
    store.dispatch(setStatusBarColor(AppColors.white));//setStatusBarColor

    // 2. Navigate to Login screen after state change
    setTimeout(() => {
        navigate('Login');
    }, 100);
};
