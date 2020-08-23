import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Image,
  StyleSheet,
  Platform
} from 'react-native'
import { Price, ProductName } from '../../ui'

const PlateCard = ({ name, price, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.descriptionWrapper}>
        <ProductName name={name} />
        <Price price={price} />
      </View>
    </View>
  )
}

PlateCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}

export default PlateCard

const styles = new StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 3,
    borderColor: '#E9E9F0',
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 6,
    ...Platform.select({
      android: {
        elevation: 5
      },
      ios: {
        shadowColor: "#0000001A",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }
    })
  },
  image: {
    width: '100%',
    height: 170,
  },
  descriptionWrapper: {
    padding: 7
  },
  name: {
    fontSize: 17
  },

})