import React, { Suspense } from 'react'
import useSWR from 'swr'
import fetch from 'unfetch'
import {
  FlatList, Alert
} from 'react-native'
import {
  Category,
  CategorySkelleton
} from '../../ui'

const API = 'https://dimo.shop/api/'

const fetcher = url => fetch(url).then(r => r.json())

const CategoryList = () => {
  const renderItem = ({ item }) => {
    return <Category {...item}/>
  }

  function List () {
    const { data } = useSWR(`${API}/app/categories/alphabet_categories_restaurants_with_locations`, fetcher, { suspense: true })
    const categories = data.data.attributes.map(cat => ({
      slug: cat.slug,
      name: cat.name,
      image: cat.image.url
    }))
    return <FlatList
      horizontal
      data={categories}
      showsHorizontalScrollIndicator={false}
      itemVisiblePercentThreshold
      keyExtractor={item => item.slug}
      renderItem={renderItem}
    />
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
