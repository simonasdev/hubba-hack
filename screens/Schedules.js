import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Switch } from 'react-native';
import { FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import Text from '../components/StyledText';

const Separator = () => <View style={{ height: 1, backgroundColor: '#ff6f61' }}></View>

export default class Schedules extends Component {
  static navigationOptions = {
    title: 'Triggers',
  }

  state = {
    list: [
      { key: '4', title: 'Price', price: '< 10%', icon: <FontAwesome size={24} color='#ff6f61' name='dollar' />, on: true },
      { key: '5', title: 'Consumption', percentage: '> 50%', icon: <MaterialCommunityIcons size={24} color='#ff6f61' name='percent' />, on: true },
      { key: '0', title: 'Morning', from: '06:00', to: '09:30', icon: <Entypo size={24} color='#ff6f61' name='time-slot' /> },
      { key: '1', title: 'Noon', from: '11:00', to: '13:00', icon: <Entypo size={24} color='#ff6f61' name='time-slot' /> },
      { key: '2', title: 'Evening', from: '16:30', to: '20:00', icon: <Entypo size={24} color='#ff6f61' name='time-slot' /> },
      { key: '3', title: 'Night', from: '22:00', to: '00:00', icon: <Entypo size={24} color='#ff6f61' name='time-slot' /> },
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
        {item.icon}
        <Text style={{ flex: 2, textAlign: 'center' }}>{item.title}</Text>
        <Text style={{ flex: 1 }}>{item.percentage || item.price || `${item.from} - ${item.to}`}</Text>
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
        contentContainerStyle={styles.container}
        data={this.state.list}
        renderItem={this.renderItem}
        ItemSeparatorComponent={Separator}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
