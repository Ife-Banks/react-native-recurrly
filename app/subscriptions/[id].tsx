import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const SunscriptionDetails = () => {
    const {id} = useLocalSearchParams <{id: string}>();
  return (
    <View>
      <Text>SunscriptionDetails : {id}</Text>
      <Link href="/">Go back</Link>
    </View>
  )
}

export default SunscriptionDetails