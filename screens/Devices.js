import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Switch } from 'react-native';

import Text from '../components/StyledText';

const Separator = () => <View style={{ height: 1, backgroundColor: '#ff6f61' }}></View>

export default class Devices extends Component {
  static navigationOptions = {
    title: 'Devices',
  }

  state = {
    list: [
      { key: '0', title: 'EV socket', on: true },
      { key: '0', title: 'Living room TV', on: false },
      { key: '0', title: 'Living room PC', on: false },
      { key: '1', title: 'Kitchen socket', on: true },
      { key: '1', title: 'Kitchen fridge', on: true },
      { key: '2', title: 'Bedroom', on: false },
      { key: '2', title: 'Bathroom', on: false },
    ]
  }

  toggleDevice(key) {
    this.setState(({ list }) => ({
      list: list.map(item => item.key === key ? { ...item, on: !item.on } : item)
    }))
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.title}</Text>
        <Switch
          thumbColor='#ff6f61'
          trackColor={{ true: '#FFBFA7' }}
          value={item.on}
          onValueChange={() => this.toggleDevice(item.key)}
        />
      </View>
    )
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.list}
        renderItem={this.renderItem}
        ItemSeparatorComponent={Separator}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
