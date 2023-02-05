import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../screens/AuthPages/onboarding';
const { Navigator, Screen } = createNativeStackNavigator();

const Authentication = () => {
  return (
    <Navigator>
        <Screen name='index' component={Onboarding} />
    </Navigator>
  )
}

export default Authentication