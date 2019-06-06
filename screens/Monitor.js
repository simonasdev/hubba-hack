import React from 'react';
import { ScrollView, StyleSheet, View, Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
} from 'react-native-chart-kit'

export default function Monitor() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
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
        <BarChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }]
          }}
          width={Dimensions.get('window').width - 40}
          height={220}
          yAxisLabel={'$'}
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

Monitor.navigationOptions = {
  title: 'Monitor',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
});
