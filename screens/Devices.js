import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Switch } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import Text from '../components/StyledText';

const Separator = () => <View style={{ height: 1, backgroundColor: '#ff6f61' }}></View>

export default class Devices extends Component {
  static navigationOptions = {
    title: 'Devices',
  }

  state = {
    list: [
      { key: '0', title: 'EV socket', on: true, icon: <MaterialCommunityIcons size={24} color='#ff6f61' name='car-battery' /> },
      { key: '7', title: 'Cooling fan', on: false, icon: <MaterialCommunityIcons size={24} color='#ff6f61' name='fan' /> },
      { key: '1', title: 'Living room TV', on: false, icon: <FontAwesome size={24} color='#ff6f61' name='tv' /> },
      { key: '2', title: 'Living room PC', on: false, icon: <MaterialCommunityIcons size={24} color='#ff6f61' name='laptop' /> },
      { key: '3', title: 'LED strip', on: false, icon: <MaterialCommunityIcons size={24} color='#ff6f61' name='led-strip' /> },
      { key: '4', title: 'Kitchen fridge', on: true, icon: <MaterialCommunityIcons size={24} color='#ff6f61' name='fridge' /> },
      { key: '5', title: 'Bedroom', on: false, icon: <MaterialCommunityIcons size={24} color='#ff6f61' name='bed-empty' /> },
      { key: '6', title: 'Bathroom', on: false, icon: <FontAwesome size={24} color='#ff6f61' name='bath' /> },
    ]
  }

  toggleDevice(key) {
    this.setState(({ list }) => ({
      list: list.map(item => item.key === key ? { ...item, on: !item.on } : item)
    }), () => this.handleDeviceSwitch(key))
  }

  async handleDeviceSwitch(key) {
    const { title, on } = this.state.list.find((item) => item.key === key)

    switch (title) {
      case 'LED strip':
        await fetch(`http://blynk-cloud.com/95716389d4024e18b19f88ec8b422709/update/D4?value=${Number(!on)}`)

        break;
      case 'Cooling fan':
        if (on) {
          await fetch(`https://maker.ifttt.com/trigger/Rozete/with/key/WavxzWXqAqh6MeXBiMn9I`)
        } else {
          await fetch(`https://maker.ifttt.com/trigger/RozeteOff/with/key/WavxzWXqAqh6MeXBiMn9I`)
        }

      default:
        break;
    }
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        {item.icon}
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
