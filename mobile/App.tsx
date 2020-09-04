import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import { AppLoading } from 'expo';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Routes />
        <StatusBar style='light' backgroundColor='#007bff' />
      </>
    );
  }
}
