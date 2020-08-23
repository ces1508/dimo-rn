import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native'

const CategoryItem = ({ name, slug, image }) => (
  <TouchableOpacity>
    <View style={styles.category}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{ uri: image }}
          width={60}
          height={60} />
      </View>
      <Text
        style={styles.text}
        numberOfLines={2}
        textBreakStrategy={'highQuality'}
        ellipsizeMode="middle">
        {name}
      </Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  category: {
    width: 60,
    marginHorizontal: 8,
  },
  imageWrapper: {
    borderRadius: 15,
    ...Platform.select({
      android: {
        elevation: 5,
        backgroundColor: 'red'
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
    borderRadius: 15,
    borderColor: '#FFCA00',
    borderWidth: 1,
  },
  text: {
    marginTop: 7,
    fontSize: 11,
    textTransform: 'capitalize',
    textAlign: "center",
    color: '#000000'
  }
})

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
}

export default CategoryItem