import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native'
import { generateSkelletonData } from '../utils'

const CategorySkelletonItem = () => (
  <View style={styles.wrapper}>
    <View style={styles.image} />
    <View style={styles.name} />
  </View>
)

const CategorySkelletonList = ({ quantity }) => {
  const data =  generateSkelletonData(quantity, 'categeoy_restaurant')

  return <FlatList
    data={data}
    horizontal
    keyExtractor={item => item.id}
    renderItem={() => <CategorySkelletonItem />}
  />
}

CategorySkelletonList.propTypes = {
  quantity: PropTypes.number.isRequired
}

CategorySkelletonList.defaultProps = {
  quantity: 10
}

export default CategorySkelletonList

const styles = StyleSheet.create({
  wrapper: {
    width: 50,
    height: 80,
    marginHorizontal: 8
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 15,
    backgroundColor: '#EEEEEE'
  },
  name: {
    marginTop: 10,
    width: 50,
    height: 6,
    borderRadius: 2,
    backgroundColor: '#EEEEEE'
  }
})
