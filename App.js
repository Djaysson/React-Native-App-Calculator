import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//inicia 11:00
class Botao extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    let c = 1;
    if (props.c) {
      c = parseInt(props.c);
    }

    this.styles = StyleSheet.create({
      area: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999999',
        backgroundColor: '#E0E0E0'
      },
      text: {
        fontSize: 18
      }
    });
  }
  render() {
    return (
      <TouchableOpacity style={this.styles.area}>
        <Text style={this.styles.text}></Text>
      </TouchableOpacity>

    );
  }
}

export default class Calculadora extends Component {
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.linha}>
          <Text></Text>
        </View>
        <View style={styles.linha}>
          <Botao c="2" />
          <Botao />
        </View>
        <View style={styles.linha}>
          <Botao />
          <Botao />
          <Botao />
          <Botao />
        </View>
        <View style={styles.linha}>
          <Botao />
          <Botao />
          <Botao />
          <Botao />
        </View>
        <View style={styles.linha}>
          <Botao />
          <Botao />
          <Botao />
          <Botao />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    padding: 20,
    flex: 1
  },
  linha: {
    flex: 1,
    flexDirection: 'row',

  }

});