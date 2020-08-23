import React from 'react'
import { Text } from 'react-native'
import numeral from 'numeral'

const Price = ({ price, styles }) => {
  const priceWithFormat = numeral(price).format('$0,0').replace(',','.')
  return <Text style={styles}>{priceWithFormat}</Text>
}

Price.defaultProps = {
  styles: {}
}

export default Price
