import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import logo from '../../assets/blue/logo.png';
import api from '../../services/api';

function Main() {
  const navigation = useNavigation();

  const [drones, setDrones] = useState([]);

  function navigationToDetail() {
    navigation.navigate('Details');
  }

  useEffect(() => {
    loadDrones();
  }, []);

  async function loadDrones() {
    const response = await api.get('drones');
    setDrones(response.data.serializedDrones);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>

      <FlatList
        style={styles.droneList}
        data={drones}
        keyExtractor={(drone) => String(drone.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: drone }) => (
          <View style={styles.drone}>
            <Text style={styles.droneProperty}>Nome: </Text>
            <Text style={styles.droneValue}>{drone.name} </Text>
            <Text style={styles.droneProperty}>Bateria: </Text>
            <Text style={styles.droneValue}>{drone.battery} </Text>
            <Text style={styles.droneProperty}>Status: </Text>
            <Text style={styles.droneValue}>{drone.status} </Text>
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
