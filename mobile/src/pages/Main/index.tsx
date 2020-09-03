import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import Logo from '../../assets/white/logo.png';

function Main() {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
    </View>
  );
}

export default Main;
