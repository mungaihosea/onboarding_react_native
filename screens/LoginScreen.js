import React from 'react'
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native'

const LoginScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text>
                Login screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009933'
    }
})

export default LoginScreen