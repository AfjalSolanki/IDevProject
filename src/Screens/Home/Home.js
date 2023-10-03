//import liraries
import React, { Component, useCallback, useEffect, useState } from 'react';
import { View, FlatList, Text, StyleShee, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import strings from '../../constants/lang';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles'
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import FastImageComp from '../../Components/FastImageComp';
import imagePath from '../../constants/imagePath';
import TextComp from '../../Components/TextComp';
import { useSelector } from 'react-redux';
import colors from '../../styles/colors';
import Loader from '../../Components/Loader';
import axios from 'axios';

const DATA = [
    {
        title: "First Item",
    },
    {
        title: "Second Item",
    },
];



// create a component
const Home = () => {
    const { selectedTheme } = useSelector(state => state?.appSetting)
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(false)

    // useEffect(() => {
    //     axios.get('https://dummyjson.com/products/category/smartphones')
    //         .then((response) => {
    //             console.log('------------------', response.data);           
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);



    useEffect(() => {
        setisLoading(true)
        // Define the API endpoint URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/comments?postId=1';
        // Make a GET request using Axios
        axios.get(apiUrl)
            .then((response) => {
                // Handle the successful response here
                setData(response.data);
                console.log('response----response', response.data);
                setisLoading(false)

            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error fetching data:', error);
                setisLoading(false)

            });
    }, []);
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.boxStyle}>
                <View style={styles.childview}>
                    <View style={{ flexDirection: "row", alignItems: 'center', flex: 1 }}>
                        <FastImageComp
                            url={'https://i1.sndcdn.com/artworks-JmErnf9jVsLNoqN4-7yRD4w-t500x500.jpg'}
                            imageStyle={styles.profileImage}
                        />
                        <View>

                            <TextComp
                                text={item.email}
                                style={styles.nameStyle}
                            />
                            <TextComp
                                text={item.name}
                                style={{
                                    ...styles.bioStyle,
                                    color: selectedTheme == 'dark' ? colors.whiteColorOpacity40 : colors.blackOpacity70
                                }}
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                    >
                        <Image source={imagePath.icDots} />
                    </TouchableOpacity>
                </View>
                <FastImageComp
                    url={'https://e0.pxfuel.com/wallpapers/24/87/desktop-wallpaper-gojo-satoru-electric-blue-art.jpg'}
                    imageStyle={styles.postImage}
                />

                <TextComp
                    text={item.body}
                    style={styles.descStyle}
                />

                <TextComp
                    text='1hr'
                    style={{
                        ...styles.descStyle,
                        marginVertical: moderateScaleVertical(12),
                        color: selectedTheme == 'dark' ? colors.whiteColorOpacity70 : colors.blackOpacity70
                    }}
                />

                <View style={styles.flexHorizontal}>

                    <View style={{ flexDirection: 'row' }}>
                        <TextComp
                            text={`Comments ${20}`}
                            style={{ ...styles.descStyle, marginRight: moderateScale(8) }}
                        />

                        <TextComp
                            text={`Likes ${10}`}
                            style={styles.descStyle}
                        />
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                    >
                        <Image source={imagePath.icShare} />
                    </TouchableOpacity>

                </View>

            </View>
        )
    }



    return (
        <View style={{ flex: 1 }}>
            <Loader isLoading={isLoading} />
            <View style={{ flex: 1, padding: moderateScale(8) }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item?._id || String(index)}
                    ItemSeparatorComponent={() => <View style={{ height: moderateScale(20) }} />}
                />
            </View>
        </View>
    );
};

export default Home;
