import React from 'react'
import {Text, StyleSheet, Image, View, TouchableOpacity} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
            pages={[
                {
                    backgroundColor: '#009933',
                    image: <Image style={styles.image} source={require('../assets/images/logo.png')} />,
                    title: 'Lipa Fees',
                    subtitle: 'This is a platform that allows you to pay school fees using Mpesa and other mobile money platforms',
                },
                {
                    backgroundColor: '#009933',
                    image: <Image style = {styles.image} source={require('../assets/images/logo.png')} />,
                    title: 'Simple, Fast, Secure',
                    subtitle: 'Transactions are Fast and downloadable receipts are generated immediately after payment.',
                },
                {
                    backgroundColor: '#009933',
                    image: <Image style={styles.image} source={require('../assets/images/logo.png')} />,
                    title: 'Lipa Pole Pole',
                    subtitle: 'Allows fee payment from ksh 50 which enables slow recurring payments until you complete the school fees balance',
                },
                {
                    backgroundColor: '#009933',
                    image: <Image style={styles.image} source={require('../assets/images/logo.png')} />,
                    title: 'All records in one place',
                    subtitle: 'We keep all your payment receipts safe, you can download the receipts at any time of will',
                },
            ]}
        />
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009933',
    },
    text: {
        color: '#FFF',
        fontSize: 27,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    }
})

export default OnboardingScreen