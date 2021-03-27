import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { userName } from "@core/shared";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { incrementCounter, decrementCounter } from "@core/shared/actions/authActions"

import { useSelector,useDispatch } from 'react-redux'

export default function TabOneScreen() {
  const counter = useSelector(({ counter }) => counter.value)
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome { counter }</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => dispatch(incrementCounter())}>
          <Text>Increase</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => dispatch(decrementCounter())}>
          <Text>Decrease</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
