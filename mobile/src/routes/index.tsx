import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import Details from '../pages/Details';

const { Navigator, Screen } = createStackNavigator();

function routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Main' component={Main} />
        <Screen name='Details' component={Details} />
      </Navigator>
    </NavigationContainer>
  );
}

export default routes;
