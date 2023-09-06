//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import FastImageComp from '../../Components/FastImageComp';
import { moderateScale, moderateScaleVertical, textScale, width } from '../../styles/responsiveSize';
import TextComp from '../../Components/TextComp';
import { useSelector } from 'react-redux';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../Navigations/navigationStrings';


// create a component
const Profile = ({navigation}) => {
    const { selectedTheme } = useSelector(state => state?.appSetting)

    const isDark = selectedTheme == 'dark'

    const listHeader = () => {
        return (
            <View style={{ marginBottom: moderateScaleVertical(16) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <FastImageComp
                            url='https://www.nautiljon.com/images/perso/00/48/gojo_satoru_19784.webp'
                            imageStyle={{
                                borderRadius: moderateScale(50)
                            }}
                        />
                        <View style={{ marginLeft: moderateScale(16) }}>
                            <TextComp
                                text='Satoru Gojo'
                                style={{ fontSize: textScale(20) }}
                            />
                            <TextComp
                                text='gojo@email.com'
                                style={{ fontSize: textScale(14), color: isDark ? colors.whiteColorOpacity70 : colors.blackOpacity70 }}
                            />
                        </View>
                    </View>

                    <TouchableOpacity
                    activeOpacity={0.7}
                  onPress={()=>navigation.navigate(navigationStrings.PORFILE_EDIT)}
                    >
                        <Image source={imagePath.icEdit} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: moderateScaleVertical(16), }}>
                    <TextComp
                        text='Developed a dynamic e-commerce website from scratch, providing customers with a'
                        style={{ fontSize: textScale(16) }}
                    />
                </View>

                <View style={{
                    ...styles.boxView,
                    backgroundColor: isDark ? colors.blackOpacity20 : colors.blackOpacity40
                }}>
                    <TextComp
                        text='Dashboard'
                        style={{ fontSize: textScale(14) }}
                    />
                    <TextComp
                        text='1k account reached in the last 30 days'
                        style={{ fontSize: textScale(14), color: isDark ? colors.whiteColorOpacity70 : colors.blackOpacity70 }}
                    />

                </View>
            </View>
        )
    }

    const renderItem = () => {
        return (
            <TouchableOpacity
      
            >
                <FastImageComp
                    url={'https://i1.sndcdn.com/artworks-JmErnf9jVsLNoqN4-7yRD4w-t500x500.jpg'}
                    imageStyle={{
                        ...styles.imgStyle,
                        borderColor: isDark ? colors.whiteColor : colors.blackColor,

                    }}
                />

            </TouchableOpacity>
        )
    }
    return (
        <WrapperContainer>
            <View style={{ flex: 1, padding: moderateScale(16) }}>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                    data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
                    renderItem={renderItem}
                    ListHeaderComponent={listHeader}
                    ListEmptyComponent={() => <Text>No posts found</Text>}
                    keyExtractor={(item, index) => item?._id || String(index)}
                />
            </View>
        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    boxView: {
        padding: moderateScale(12),
        borderRadius: moderateScale(8)

    },
    imgStyle: {
        width: width / 3,
        height: width / 3,
        borderWidth: 0.5,
    }
});

//make this component available to the app
export default Profile;
