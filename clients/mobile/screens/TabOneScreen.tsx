import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
// import { userName } from "@core/shared";
import { Text, View } from '../components/Themed';
import { incrementCounter, decrementCounter } from "@core/shared/actions/authActions"
import { useSelector,useDispatch } from 'react-redux'
import { ButtonContainer, ButtonText } from '@core/shared/styles/Button.native'

export default function TabOneScreen() {
  const counter = useSelector(({ counter }) => counter.value)
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter = { counter }</Text>
      <View style={{ flexDirection: 'row' }}>
      <ButtonContainer onPress={() => dispatch(decrementCounter())} >
           <ButtonText>Decrease</ButtonText>
       </ButtonContainer>
        <ButtonContainer primary onPress={() => dispatch(incrementCounter())} >
           <ButtonText>Increment</ButtonText>
       </ButtonContainer>
      </View>
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
  }
});
