import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Chuck Norris Jokes!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#7159C1',
        alignSelf: 'stretch',
        alignItems: 'center',
        height: 55,
        alignContent: 'space-between',
        padding: 10
    },
    headerText: {
        fontSize: 20,
        color: '#FFF'
    }
});