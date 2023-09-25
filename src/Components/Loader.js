
import React from 'react';
import {
  useWindowDimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
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
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';

const Loader = ({ visible = false }) => {
  return (
    visible && (
      <View style={{
        ...commonStyles.loader,
      }}>
        <UIActivityIndicator size={20} color={colors.redColor} />
      </View>
    )
  );
};

const style = StyleSheet.create({


});

export default Loader;