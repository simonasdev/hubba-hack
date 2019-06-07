import React from 'react';
import {
  InteractionManager,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import Text from '../components/StyledText';

const Ripple = TouchableNativeFeedback.Ripple('#ff6f61', true)

export default function HomeScreen({ navigation }) {
  const navigate = (screen) => {
    InteractionManager.runAfterInteractions(() => navigation.navigate(screen));
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableNativeFeedback onPress={() => navigate('Monitor')} useForeground background={Ripple}>
          <View style={styles.button}>
            <Text style={styles.title}>MONITOR</Text>
            <Entypo name='line-graph' size={32} color='white' />
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.card}>
        <TouchableNativeFeedback onPress={() => navigate('Schedules')} useForeground background={Ripple}>
          <View style={styles.button}>
            <Text style={styles.title}>TRIGGERS</Text>
            <MaterialCommunityIcons name='webhook' size={32} color='white' />
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.card}>
        <TouchableNativeFeedback onPress={() => navigate('Devices')} useForeground background={Ripple}>
          <View style={styles.button}>
            <Text style={styles.title}>DEVICES</Text>
            <Entypo name='power-plug' size={32} color='white' />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: "Dashboard",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  card: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#FFBFA7',
    marginVertical: 10,
    overflow: 'hidden'
  },
  button: {
    paddingVertical: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  }
});
