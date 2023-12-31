//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { moderateScale, textScale } from '../styles/responsiveSize';
import {
    BarIndicator,
    BallIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from "react-native-indicators"
// create a component
const ButtonComp = ({
    onPress = () => { },
    text = '',
    style = {},
    leftImg = null,
    textStyle = {},
    isLoading = false

}) => {
    return (
        <TouchableOpacity
            style={{ ...styles.container, ...style }}
            onPress={onPress}
            activeOpacity={0.7}
        >

            {!!leftImg ? <Image source={leftImg} /> : <View />}


            {isLoading ?
                <UIActivityIndicator size={25} color={colors.whiteColor} /> :
                <Text style={{ ...styles.textStyle, ...textStyle }}>{text}</Text>}

            <View />

        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.redColor,
        height: moderateScale(52),
        borderRadius: moderateScale(8),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: moderateScale(16)
    },
    textStyle: {
        fontFamily: fontFamily.medium,
        color: colors.whiteColor,
        fontSize: textScale(16)
    }
});

//make this component available to the app
export default ButtonComp;
