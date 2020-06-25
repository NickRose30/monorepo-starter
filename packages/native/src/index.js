import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { double } from '@monorepo/common';

export default _ => (
  <View style={styles.container}>
    <Text>Double 2 is {double(2)}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});