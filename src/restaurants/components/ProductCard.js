import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Price, ProductName } from '../../ui'

const PlateCard = ({ name, price, image, slug }) => {
  const navigation = useNavigation()
  function handlerPress () {
    navigation.navigate('PlateScreen', {  slug, name })
  }

  return (
    <TouchableOpacity onPress={handlerPress} style={{ flex: 1 }}>
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.descriptionWrapper}>
          <ProductName name={name} styles={styles.name} />
          <Price price={price} styles={styles.price} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

PlateCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
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
    overflow: 'hidden',
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
    backgroundColor: '#EEEEEE'
  },
  descriptionWrapper: {
    padding: 7
  },
  name: {
    fontSize: 17,
    marginVertical: 5
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold'
  }

})