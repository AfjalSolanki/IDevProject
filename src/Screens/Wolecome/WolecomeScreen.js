import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import { moderateScale } from '../../styles/responsiveSize';
import CustomSwiper from '../../Components/CustomSwiper';

const WolecomeScreen = () => {
    const swiperData = ['Screen 1', 'Screen 2', 'Screen 3'];

    return (
        <WrapperContainer>
            <View style={{ flex: 1, padding: moderateScale(16), alignItems: 'center' }}>
            <CustomSwiper data={swiperData} />
            </View>
        </WrapperContainer>
    )
}



export default WolecomeScreen

const styles = StyleSheet.create({});

