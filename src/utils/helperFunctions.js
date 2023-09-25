import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashMessage, { showMessage } from "react-native-flash-message";
import Toast from 'react-native-toast-message';


export const storeData = async (key, value) => {
    try {
        var jsonValue = value
        if (typeof (value) !== 'string') {
            jsonValue = JSON.stringify(value);
        }
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        return e
    }   
};


export const getData = async (key) => {
    try {
        const res = await AsyncStorage.getItem(key);
        return res != null ? typeof (res) !== 'string' ? JSON.parse(res) : res : null;
    } catch (e) {
        return e
        // error reading value
    }
};

export const showError = (message) => {
    showMessage({
        type: 'danger',
        icon: "danger",
        message,
        duration: 2500
    })
}

export const showSucess = (message) => {
    showMessage({
        type: 'success',
        icon: "success",
        message,
        duration: 2500
    })
}

export const showMessageOnToast = ({ text1, ...rest }) => {
    Toast.show({
        type: 'success',
        position: 'top',
        text1,
        visibilityTime: 3000,
        autoHide: true,
        bottomOffset: 40,
        ...rest,
    });
    //   showMessageOnToast({ text1: 'message', type: 'error' })
    // showMessageOnToast({ text1: 'message', type: 'success' });


};


