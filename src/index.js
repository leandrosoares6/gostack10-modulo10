import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import { View } from 'react-native';

import Routes from './routes';

// import { Container } from './styles';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
