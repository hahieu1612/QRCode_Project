import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

import { useNavigation } from '@react-navigation/native';

export default function Home (){
    const navigation = useNavigation();
    // useEffect(() => {
    //    if(!checkLogin){
    //         navigation.navigate('Login')
    //    }
    // },[])


    return (
        <View style={StyleSheet.container}>
            <Button title='Scan' onPress={() => navigation.navigate('Scanner')}/>
            {/* <Button title='History' onPress={() => navigation.navigate('History')}/> */}
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
    }
})

