import { Platform } from 'react-native'
import { CardStyleInterpolators } from '@react-navigation/stack'

export const Options = {
  cardStyleInterpolator:
    Platform.OS === 'ios'
      ? CardStyleInterpolators.forHorizontalIOS
      : CardStyleInterpolators.forFadeFromBottomAndroid,
}
