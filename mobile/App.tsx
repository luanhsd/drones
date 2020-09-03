import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Main from './src/pages/Main';

export default function App() {
  return (
    <>
      <StatusBar style='light' backgroundColor='#007bff' />
      <Main />
    </>
  );
}
