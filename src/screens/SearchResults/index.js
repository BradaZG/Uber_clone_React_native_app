import React from 'react';
import {View, Dimensions, SafeAreaView} from 'react-native';

import HomeMap from '../../components/HomeMap';
import UberTypes from '../../components/UberTypes';

const SearchResults = () => {
  return (
    <SafeAreaView>
      <View style={{display: 'flex', justifyContent: 'space-between'}}>
        <View style={{height: Dimensions.get('window').height - 410}}>
          <HomeMap />
        </View>
        <View style={{height: 390}}>
          <UberTypes />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchResults;
