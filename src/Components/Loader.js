import React from 'react';
import { View, Modal } from 'react-native';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from "react-native-indicators"
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';

const Loader = ({ isLoading = false }) => {
    if (isLoading) {
        return (
            <Modal transparent visible={isLoading} >
                <View style={{ ...commonStyles.loader, backgroundColor: "rgba(0,0,0,0.3)" }}>
                    <UIActivityIndicator size={30} color={colors.redColor} />
                </View>
            </Modal>
        );
    }
    return null;
};

export default Loader;
