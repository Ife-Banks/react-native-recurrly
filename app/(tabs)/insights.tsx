import { View, Text } from 'react-native'
import React from 'react'
import {styled} from "nativewind"
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

const insights = () => {
  return (
    <SafeAreaView className='flex-1 p-6 bg-background'>
      <Text>insights</Text>
    </SafeAreaView>
  )
}

export default insights