import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './AuthRoutes';
import SignedRoutes from './SignedRoutes';

export default (signed = false) => (
  <NavigationContainer>
    {signed ? <SignedRoutes /> : <AuthRoutes />}
  </NavigationContainer>
);
