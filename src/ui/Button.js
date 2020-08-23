import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
const Button = ({ text, handlePress, loading }) => (
  <TouchableOpacity onPress={handlePress}>
    <View style={styles.button}>
      <Text style={styles.text}>
        { loading ? 'cargando ...' : text }
      </Text>
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

Button.defualtProps = {
  loading: false
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#d4d4d4'
  },
  text: {
    textTransform: 'capitalize',
    letterSpacing: 2,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default Button
