import React from 'react';
import { View, Modal } from 'react-native';
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
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';

const Loader = ({ isLoading = false }) => {
    if (isLoading) {
        return (
            <Modal transparent visible={isLoading} >
                <View style={{ ...commonStyles.loader,  }}>
                    <UIActivityIndicator size={25} color={colors.lighPink} />
                </View>
            </Modal>
        );
    }
    return null;
};

export default Loader;
