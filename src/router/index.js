import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeRestaurants from '../Screens/HomeRestaurant'
import PlateScreen from '../Screens/PlateScreen'
const Stack = createStackNavigator()

const config = {
  animation: 'mass',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 1,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function RestaurantsRouter () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeRestaunant"
          options={{ title: 'Dimo.shop' }}
          component={HomeRestaurants}
        />
        <Stack.Screen
          name="PlateScreen"
          component={PlateScreen}
          options={{
            transitionSpec: {
              open: config,
              close: config
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
