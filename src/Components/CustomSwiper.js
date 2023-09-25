// CustomSwiper.js

import React, { useState, useRef } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import navigationStrings from '../Navigations/navigationStrings';

const CustomSwiper = ({ data, props }) => {
    const navigation = props
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollViewRef = useRef();

    const screenWidth = Dimensions.get('window').width;

    const handleScroll = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const newIndex = Math.round(offsetX / screenWidth);
        setCurrentIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = currentIndex + 1;
        if (newIndex < data.length) {
            setCurrentIndex(newIndex);
            scrollViewRef.current.scrollTo({ x: newIndex * screenWidth });
        } else {
            Alert.alert('yes')
            console.log('yesyesyesyesyes');
            // navigation.navigate(navigationStrings.INITIAL_SCREEN)

        }
    };

    const handlePrevious = () => {
        const newIndex = currentIndex - 1;
        if (newIndex >= 0) {
            setCurrentIndex(newIndex);
            scrollViewRef.current.scrollTo({ x: newIndex * screenWidth });
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                ref={scrollViewRef}
            >
                {data.map((item, index) => (
                    <View key={index} style={[styles.page, { width: screenWidth }]}>
                        <Text style={styles.text}>{item}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.indicatorContainer}>
                {data.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.indicator,
                            index === currentIndex && styles.activeIndicator,
                        ]}
                    />
                ))}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handlePrevious}>
                    <Text style={styles.buttonText}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        margin: 5,
    },
    activeIndicator: {
        backgroundColor: 'blue',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default CustomSwiper;
