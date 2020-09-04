import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import logo from '../../assets/blue/logo.png';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Details() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <TouchableOpacity onPress={() => {}}>
          <Feather name='arrow-left' size={28} color='#007bff' />
        </TouchableOpacity>
      </View>

      <View style={styles.drone}>
        <Text style={styles.droneProperty}>Nome: </Text>
        <Text style={styles.droneValue}>XpeeR </Text>
        <Text style={styles.droneProperty}>Bateria: </Text>
        <Text style={styles.droneValue}>100% </Text>
        <Text style={styles.droneProperty}>Status: </Text>
        <Text style={styles.droneValue}>success </Text>
      </View>
    </View>
  );
}
