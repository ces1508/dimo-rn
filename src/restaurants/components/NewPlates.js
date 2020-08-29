import React, { Suspense } from 'react'
import useSWR from 'swr'
import fetch from 'unfetch'
import {
  FlatList,
  StyleSheet
} from 'react-native'
import { PlateSkelleton } from '../../ui'
import ProductCard from './ProductCard'

const API = 'https://dimo.shop/api/'
const fetcher = url => fetch(url).then(r => r.json())

const NewPlates = ({ navigation }) => {
  function PlateList () {
    const { data } = useSWR(`${API}/app/products/new_products`, fetcher, { suspense: true })
    const plates = data.data.map(plate => ({
      name: plate.attributes.name,
      price: plate.attributes.price,
      slug: plate.attributes.slug,
      image: plate.attributes['image-data'].thumb.url
    }))
    return (
      <FlatList
        keyExtractor={item => item.slug}
        style={{ paddingVertical: 10 }}
        renderItem={({ item }) => <ProductCard {...item} navigation={navigation} />}
        data={plates}
        numColumns={2}
      />
    )
  }

  return (
    <>
      <Suspense fallback={<PlateSkelleton quantity={10} />}>
        <PlateList />
      </Suspense>
    </>
  )
}

export default NewPlates

const styles = new StyleSheet.create({
  list: {},
  columnWrapper: {
    paddingHorizontal: 10
  }
})