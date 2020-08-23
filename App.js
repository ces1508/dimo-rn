/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';


import CategoryList from './src/restaurants/components/CategoriesList'
import NewPlates from './src/restaurants/components/NewPlates'
const App = () => {
  const [timesPressed, setTimesPressed] = useState(0)
  const handlePressButton = () => console.warn('boton presionando')

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <CategoryList />
        <NewPlates />
      </SafeAreaView>
    </>
  );
};


export default App;
