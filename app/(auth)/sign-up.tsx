import { View, Text } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import SignIn from './sign-in'

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Link href="/(auth)/sign-in">Go to Sign in</Link>
    </View>
  )
}

export default SignUp