import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Profile({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Meu perfil',
      tabBarIcon: () => <Icon name="person" color="#fff" size={20} />,
    });
  }, [navigation]);

  return <Background />;
}

Profile.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func.isRequired,
  }).isRequired,
};
