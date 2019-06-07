import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit'

export default class Monitor extends Component {
  state = {
    prices: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100
    ],
    consumptions: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100
    ]
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(({ prices, consumptions }) => ({
        prices: prices.map((n, i) => i === prices.length - 1 ? Math.random() * 100 : n),
        consumptions: consumptions.map((n, i) => i === consumptions.length - 1 ? Math.random() * 100 : n)
      }))
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [{
                data: this.state.prices
              }]
            }}
            width={Dimensions.get('window').width - 40}
            height={220}
            yAxisLabel={'$'}
            chartConfig={{
              backgroundGradientFrom: '#ff6f61',
              backgroundGradientTo: '#FFBFA7',
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 8
              }
            }}
            bezier
            style={{
              marginBottom: 20,
              borderRadius: 8
            }}
          />
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [{
                data: this.state.consumptions
              }]
            }}
            width={Dimensions.get('window').width - 40}
            height={220}
            yAxisLabel={'%'}
            chartConfig={{
              backgroundGradientFrom: '#FFBFA7',
              backgroundGradientTo: '#ff6f61',
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 8
              }
            }}
            bezier
            style={{
              borderRadius: 8
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

Monitor.navigationOptions = {
  title: 'Monitor',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
});
