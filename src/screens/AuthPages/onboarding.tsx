import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Button } from '../../UI'
import React from 'react'
import { Dispatch, RootState } from '../../states'
import { Colors } from '../../UI/theme'
import { decrement, increment } from '../../states/States/counter'

/**
 * An example of how redux toolkit works in components
 * 
 */

const Onboarding = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<Dispatch>()
  return (
    <View flex width='100%' height="100%" centerH centerV>
      <Text>{counter}</Text>
      <View row>
        <Button label={'Increment'} size={Button.sizes.large} backgroundColor={Colors.red30} onPress={() => dispatch(increment())}/>
        <View width={20} />
        <Button label={'Decrement'} size={Button.sizes.large} backgroundColor={Colors.blue30} onPress={() => dispatch(decrement())} />
      </View>
    </View>
  )
}

export default Onboarding