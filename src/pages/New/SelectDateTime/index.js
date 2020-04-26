import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import { Container, SchedulesList, Schedule, Hour } from './styles';

import api from '~/services/api';

export default function SelectDateTime({ route, navigation }) {
  const { provider } = route.params;
  const [date, setDate] = useState(new Date());
  const [schedules, setSchedules] = useState([]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Selecione o horário',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    async function loadSchedules() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      setSchedules(response.data);
    }

    loadSchedules();
  }, [date, provider.id]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      provider,
      time,
    });
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
        <SchedulesList
          data={schedules}
          keyExtractor={(schedule) => schedule.time}
          renderItem={({ item: schedule }) => (
            <Schedule
              onPress={() => handleSelectHour(schedule.value)}
              enabled={schedule.available}
            >
              <Hour>{schedule.time}</Hour>
            </Schedule>
          )}
        />
      </Container>
    </Background>
  );
}

SelectDateTime.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    setOptions: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      provider: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};
