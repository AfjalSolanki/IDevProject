/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
//import liraries
import React, {useEffect} from 'react';
import Routes from './src/Navigations/Routes';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {changeAppTheme, changeLanguage} from './src/redux/actions/appSettings';
import {getData} from './src/utils/helperFunctions';
import FlashMessage from 'react-native-flash-message';
import fontFamily from './src/styles/fontFamily';
import {textScale} from './src/styles/responsiveSize';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

const {dispatch} = store;
const App = () => {
  useEffect(() => {
    initiateLang();
    initiateTheme();
    getFCMToken();
  }, []);
  const initiateTheme = async () => {
    try {
      let myTheme = await getData('theme');
      if (!!myTheme) {
        changeAppTheme(myTheme);
      }
    } catch (error) {
      console.log('no data found');
    }
  };
  const initiateLang = async () => {
    try {
      let myLang = await getData('language');
      if (!!myLang) {
        changeLanguage(myLang);
      }
    } catch (error) {
      console.log('no data found');
    }
  };
  const getFCMToken = async () => {
    try {
      const token = await messaging().getToken();
      console.log(
        'token-------token------token----token----token---token',
        token,
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        'A new FCM message arrived forgeound mode!',
        JSON.stringify(remoteMessage),
      );
    });

    return unsubscribe;
  }, []);

  const toastConfig = {
    success: props => (
      <BaseToast {...props} text1NumberOfLines={0} text2NumberOfLines={0} />
    ),
    error: props => (
      <ErrorToast {...props} text1NumberOfLines={0} text2NumberOfLines={0} />
    ),
  };

  return (
    <Provider store={store}>
      <Routes />
      <Toast config={toastConfig} />
      <FlashMessage
        position={'top'}
        titleStyle={{
          fontFamily: fontFamily.medium,
          fontSize: textScale(14),
        }}
      />
    </Provider>
  );
};

export default App;
