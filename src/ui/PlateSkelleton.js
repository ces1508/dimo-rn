import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Image,
  StyleSheet,
  FlatList
} from 'react-native'
import ImageSkelleton from '../icons/imageSkelleton.svg'

import { generateSkelletonData } from '../utils'

const Item = () => (
  <View style={styles.card}>
    <View style={styles.imageWrapper}>
      <ImageSkelleton
        style={styles.image} />
    </View>
    <View>
      <View style={styles.text} />
      <View style={[styles.text, styles.textSmall]} />
    </View>
  </View>
)

const PlateSkelleton = ({ quantity }) => {
  const data = generateSkelletonData(quantity, 'new_product')
  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={() => <Item />}
    />
  )
}

const styles = new StyleSheet.create({
  card: {
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
    marginVertical: 8,
    marginHorizontal: 10,
    height: 190,
    flex: 1,
    paddingBottom: 8
  },
  imageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  image: {
    width: 60,
    height: 60
  },
  text: {
    marginHorizontal: 10,
    backgroundColor: '#DFDFE1',
    width: '80%',
    height: 20,
    marginBottom: 8
  },
  textSmall: {
    width: '50%'
  }
})

PlateSkelleton.propTypes = {
  quantity: PropTypes.number.isRequired
}

PlateSkelleton.defaultProps = {
  quantity: 8
}

export default PlateSkelleton
