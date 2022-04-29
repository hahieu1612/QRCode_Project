import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

export default function History () {
    const navigation = useNavigation ();

    return (
        <View style={StyleSheet.container}>
            <Text> History </Text>
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