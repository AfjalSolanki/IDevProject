// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet, SafeAreaView, useColorScheme, StatusBar } from 'react-native';
// import colors from '../styles/colors';
// import { useSelector } from 'react-redux';

// // create a component
// const WrapperContainer = ({
//     style = {},
//     children
// }) => {
//     const { selectedTheme } = useSelector(state => state?.appSetting)

//     return (
//         <View style={{
//             ...styles.container,
//             ...style,
//             backgroundColor: selectedTheme == 'dark' ? colors.themeColor : colors.whiteColor
//         }}>
//             <StatusBar barStyle={selectedTheme == 'dark' ? 'light-content' : 'dark-content'} />
//             <SafeAreaView style={{ flex: 1 }}>
//                 {children}
//             </SafeAreaView>
//         </View>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.themeColor
//     },
// });

// //make this component available to the app
// export default WrapperContainer;






















import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Keyboard, KeyboardAvoidingView, SafeAreaView, StatusBar, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../styles/colors';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
// import Loader from './Loader';
import { useSelector } from 'react-redux';
import Loader from './Loader';

const WrapperContainer = ({
  style = {},
  children,
  isLoading
}) => {
  const { selectedTheme } = useSelector(state => state?.appSetting)
  const isDark = selectedTheme == 'dark'
  return (
    <View style={{
      ...styles.container, ...style, backgroundColor: isDark ? colors.themeColor : colors.white,
    }}>
      <StatusBar
        backgroundColor={isDark ? colors.themeColor : colors.whiteColor}
        barStyle={isDark ? 'light-content' : 'dark-content'} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          {children}
        </SafeAreaView>
      </TouchableWithoutFeedback>
      <Loader isLoading={isLoading} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    alignItems: 'center',
    paddingHorizontal: 0,
    marginBottom: moderateScaleVertical(24)
  }
});


export default WrapperContainer;

