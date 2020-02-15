import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class Botao extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    let c = 1;
    if (props.c) {
      c = parseInt(props.c);
    }
    let bg = '#E0E0E0';
    if (props.bg) {
      bg = props.bg;
    }

    this.styles = StyleSheet.create({
      area: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999999',
        backgroundColor: bg,
      },
      text: {
        fontSize: 18,
      },
    });
  }
  render() {
    return (
      <TouchableOpacity style={this.styles.area} onPress={this.props.onPress}>
        <Text style={this.styles.text}>{this.props.n}</Text>
      </TouchableOpacity>
    );
  }
}

export default Botao;
