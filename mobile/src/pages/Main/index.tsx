import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import logo from '../../assets/blue/logo.png';

function Main() {
  const navigation = useNavigation();

  function navigationToDetail() {
    navigation.navigate('Details');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>

      <FlatList
        style={styles.droneList}
        data={[1, 2, 3]}
        keyExtractor={(drone) => String(drone)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.drone}>
            <Text style={styles.droneProperty}>Nome: </Text>
            <Text style={styles.droneValue}>XpeeR </Text>
            <Text style={styles.droneProperty}>Bateria: </Text>
            <Text style={styles.droneValue}>100% </Text>
            <Text style={styles.droneProperty}>Status: </Text>
            <Text style={styles.droneValue}>success </Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigationToDetail}
            >
              <Text style={styles.detailsButtonText}>Detalhes</Text>
              <Feather name='arrow-right' size={16} color='#007bff' />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default Main;
