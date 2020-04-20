import React from 'react';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Routes() {


  return (
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
  );
}
