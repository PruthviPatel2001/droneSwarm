import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Platform,
    StatusBar,
    Dimensions,
    Image,
    Button,
    TextInput
} from "react-native";

import React from "react";
import icons from "../constants/icons";
import {useNavigation} from "@react-navigation/native";

const Profile = () => {

    const navigator = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View className='flex flex-col items-center'>
                <Text className='text-2xl mt-4'>Profile</Text>
                <Image
                    source={{
                        uri: 'https://i.imgur.com/Bt8Hp7X.jpg'
                    }}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 999,
                    }}
                    resizeMode='contain'
                    className='mt-6'
                />
            </View>
            <View className='mx-4 text-left mt-6'>
                <Text className='text-sm text-gray-500'>Name</Text>
                <View className='flex flex-row justify-center items-center w-full border-solid border-b-2 border-gray-200'>
                    <TextInput
                        className='flex flex-row w-full'
                        value=''
                    />
                    <Image
                        source={icons.edit}
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        resizeMode='contain'
                    />
                </View>
                <Text className='text-sm text-gray-500 mt-4'>Email</Text>
                <Text className='text-xl border-solid border-b-2 border-gray-200'>shubhamdeepak007@gmail.com</Text>
                <Text className='text-sm text-gray-500 mt-4'>Date of Birth</Text>
                <View className='flex flex-row justify-center items-center w-full border-solid border-b-2 border-gray-200'>
                    <TextInput
                        className='flex flex-row w-full'
                        value=''
                    />
                    <Image
                        source={icons.edit}
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        resizeMode='contain'
                    />
                </View>
                <Text className='text-sm text-gray-500 mt-4'>Account Type</Text>
                <Text className='text-xl border-solid border-b-2 border-gray-200'>Moderator</Text>
                <Text className='text-sm text-gray-500 mt-4'>Fast Login</Text>
                <View className='flex flex-row justify-between border-solid border-b-2 border-gray-200'>
                    <Text className='text-xl'>Remember</Text>
                    <Image
                        source={icons.toggle}
                        style={{
                            width: 35,
                            height: 35,
                        }}
                        resizeMode='contain'
                    />
                </View>
            </View>
            <View className='mx-4 text-center mt-10 flex items-center'>
                <Button
                    title='Save Profile'
                    onPress={() => navigator.navigate('Home')}
                    color='rgb(15,23,42)'
                />
                <View className='flex flex-row items-center mt-6'>
                    <Text className='text-xl mr-2'>Logout</Text>
                    <Image
                        source={icons.logout}
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        height: Dimensions.get("screen").height,
        backgroundColor: '#ffffff'
    },
})