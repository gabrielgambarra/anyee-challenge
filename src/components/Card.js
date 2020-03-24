import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

export default Card = (props) => {
    const { joke } = props;

    return (
        <View style={styles.container}>
            <Text>{joke}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c8c8c8',
        alignSelf: 'stretch',
        position: 'relative',
        maxHeight: 320,
        borderRadius: 15,
        marginTop: 125,
        marginRight: 10,
        marginLeft: 10,
        padding: 20,
        color: '#fff'
    }
})
