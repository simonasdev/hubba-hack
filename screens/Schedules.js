import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import Text from '../components/StyledText';

const Separator = () => <View style={{ height: 1, backgroundColor: '#ff6f61' }}></View>

export default class Schedules extends Component {
  static navigationOptions = {
    title: 'Schedules',
  }

  state = {
    list: [
      { key: '0', title: 'Morning', from: '06:00', to: '09:30' },
      { key: '1', title: 'Noon', from: '11:00', to: '13:00' },
      { key: '2', title: 'Evening', from: '16:30', to: '20:00' },
      { key: '3', title: 'Night', from: '22:00', to: '00:00' },
    ]
  }

  renderItem({ item }) {
    return (
      <View style={styles.item}>
        <Text>{item.title}</Text>
        <Text>{item.from} - {item.to}</Text>
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
