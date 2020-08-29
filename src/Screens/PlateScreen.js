import React, { useEffect } from 'react'
import {
  View,
  Text
} from 'react-native'

const PlateScreen = ({ navigation, route }) => {

  useEffect(() => {
    navigation.setOptions({
      title: route.params.name
    })
  }, [])

  return (
    <View>
      <Text>vista del plato</Text>
    </View>
  )
}

export default PlateScreen
