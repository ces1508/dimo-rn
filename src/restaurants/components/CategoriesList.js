import React, { Suspense } from 'react'
import useSWR from 'swr'
import fetch from 'unfetch'
import {
  FlatList,
  View,
  Text
} from 'react-native'
import {
  Category,
  CategorySkelleton
} from '../../ui'

const API = 'https://dimo.shop/api/'

const fetcher = url => fetch(url).then(r => r.json())

const CategoryList = () => {

  function List () {
    const { data } = useSWR(`${API}/app/categories/alphabet_categories_restaurants_with_locations`, fetcher, { suspense: true })
    const categories = data.data.attributes.map(cat => ({
      slug: cat.slug,
      name: cat.name,
      image: cat.image.url
    }))
    return (
      <View style={{ paddingVertical: 10 }}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 10 }}>
          <Text>Categorias</Text>
          <Text>Ver todas</Text>
        </View>
        <FlatList
          horizontal
          data={categories}
          showsHorizontalScrollIndicator={false}
          itemVisiblePercentThreshold
          keyExtractor={item => item.slug}
          renderItem={({ item }) => <Category {...item} />}
        />
      </View>
    )
  }
  return (
    <>
     <Suspense fallback={<CategorySkelleton />}>
      <List />
     </Suspense>
    </>
  )
}

export default CategoryList
