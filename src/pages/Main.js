import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';
import NewJokeButton from '../components/NewJokeButton';
import api from '../services/api';

export default class Main extends Component {

  componentDidMount() {
    this.getJoke();
  }

  state = {
    joke: '',
  };

  getJoke = async () => {
    const response = await api.get('/jokes/random');
    this.setState({
      joke: response.data.value,
    });
  };

  render() {
    const { joke } = this.state;
    return (
      <View style={styles.container}>
        <Header />
        <Card joke={joke} />
        <NewJokeButton onPress={this.getJoke} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
  },
});
