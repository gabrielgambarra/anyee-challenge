import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class NewJokeButton extends Component {
    render() {
        return (
            <>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
                        <Text>Get new joke!</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#c8c8c8'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderWidth: 2,
        borderColor: '#c8c8c8',
        width: 300
    }
});
