import { View, Text } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const SignIn = () => {
  return (
    <View className='flex-1 items-center justify-center bg-background'>
      <Text className='text-xl font-bold text-success'>SignIn</Text>
      <Link href="/(auth)/sign-up" className='mt-4 rounded bg-primary text-white p-4'>
        Create an Account
      </Link>
      <Link href="/(tabs)/insights" className='mt-4 rounded bg-primary text-white p-4'> 
        Go back
      </Link>
    </View>
  )
}

export default SignIn