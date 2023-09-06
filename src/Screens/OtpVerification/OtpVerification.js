//import liraries
import React, { Component, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback, Alert } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import strings from '../../constants/lang';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import TextComp from '../../Components/TextComp';
import OTPTextView from 'react-native-otp-textinput';
import OTPInputView from '@twotalltotems/react-native-otp-input';
// create a component
const OtpVerification = ({ navigation }) => {
    const [timer, setTimer] = useState(59);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (timer > 0) setTimer(timer - 1)
        }, 1000);
        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [timer])
    const onResendCode = () => {
        setTimer(59)
    }

    const [loading, setLoading] = useState(false);
    const OTPRef = useRef(null);
    const [clearOTP, setClearOTP] = useState(false);
    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');

    const onPressHandleOtp = () => {
        if (otp.length < 4) {
            setOtpError('OTP is required');
        } else {
            sendOtp()
        }
    };
    const sendOtp = () => {
        Alert.alert('done')
    }

    return (
        <WrapperContainer>
            <HeaderComp />

            <KeyboardAvoidingView
                style={{ flex: 1, margin: moderateScale(16) }}
            // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1 }}>

                        <View style={{ flex: 0.8 }}>
                            <TextComp style={styles.headerStyle} text={strings.ENTER_THE_FOUR_DIGIT + ` xyz@gmail.com`} />
                            <TextComp onPress={() => navigation.goBack()} style={styles.descStyle} text={strings.EDIT_MY_EMAIL} />
                            <View style={{}}>
                                <OTPInputView
                                    style={styles.OtpInputStyle}
                                    keyboardType={'phone-pad'}
                                    ref={OTPRef}
                                    clearInputs={clearOTP}
                                    onCodeChanged={(code) => {
                                        setOtp(code);
                                        setClearOTP(false);
                                    }}
                                    autoFocusOnLoad={false}
                                    codeInputFieldStyle={styles.underlineStyleBase}
                                    pinCount={4}
                                    onCodeFilled={(code) => {
                                        setOtp(code);
                                        setClearOTP(false);
                                        setOtpError('');
                                    }}
                                />
                                {otpError && <Text style={styles.errorMessage}>{otpError}</Text>}
                            </View>


                        </View>

                        <View style={{ flex: 0.2, justifyContent: 'flex-end', marginBottom: moderateScaleVertical(16) }} >
                            {timer > 0 ?
                                <TextComp style={{
                                    ...styles.descStyle,
                                    marginBottom: 12
                                }} text={strings.RESEND_CODE + 'In'} >

                                    <Text>{timer}</Text>

                                </TextComp>
                                :
                                <TextComp onPress={onResendCode} style={styles.resendCodeStyle} text={strings.RESEND_CODE} />
                            }

                            <ButtonComp
                                onPress={onPressHandleOtp}
                                text={strings.LOGIN}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    headerStyle: {
        fontSize: textScale(24),
        fontFamily: fontFamily.medium,

    },
    descStyle: {
        fontSize: textScale(14),
        fontFamily: fontFamily.regular,
        color: colors.blueColor,
        marginTop: moderateScaleVertical(8),
        marginBottom: moderateScaleVertical(52)
    },
    textInputContainer: {
        backgroundColor: colors.gray2,
        borderBottomWidth: 0,
        borderRadius: 8,
        color: colors.whiteColor

    },
    resendCodeStyle: {
        fontSize: textScale(14),
        fontFamily: fontFamily.regular,
        marginTop: moderateScaleVertical(8),
        marginBottom: moderateScaleVertical(16)
    },
    errorMessage: {
        fontSize: textScale(14),
        fontFamily: fontFamily.regular,
        color: colors.redColor
        // marginTop: moderateScaleVertical(8),
        // marginBottom: moderateScaleVertical(16)  
    },
    OtpInputStyle: {
        marginTop: moderateScaleVertical(44),
        color: colors.whiteColor,

    },
    underlineStyleBase: {
        borderWidth: 1,
        width: moderateScale(55),
        height: moderateScale(55),
        borderRadius: 5,
        color: colors.whiteColor,
        textAlign: 'center',
    },

});

//make this component available to the app
export default OtpVerification;
