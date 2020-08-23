import React from 'react'
import { Text } from 'react-native'
import { AllHtmlEntities as Entities } from 'html-entities'

const ProductName = ({ name }) => {
  return (
    <Text
      numberOfLines={2}
      lineBreakMode='tail'>
      {name.replace(/<|span|>/g, '').replace(/-/g, ' ').trim().toLowerCase()}
    </Text>
  )
}

export default ProductName
