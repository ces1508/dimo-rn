import React from 'react'
import { Text } from 'react-native'

const ProductName = ({ name, styles }) => {
  return (
    <Text
      style={styles}
      numberOfLines={1}
      lineBreakMode='tail'>
      {name.replace(/<|span|>/g, '').replace(/-/g, ' ').trim()}
    </Text>
  )
}

export default ProductName
