import React from 'react';
import {View, Text, Pressable} from 'react-native';

import UberTypeRow from '../UberTypeRow';

import typesData from '../../assets/data/types';

import styles from './styles';

const UberTypes = () => {
  const confirm = () => {
    console.warn('Confirm');
  };

  return (
    <View>
      {typesData.map((type) => (
        <UberTypeRow key={type.id} type={type} />
      ))}

      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;
