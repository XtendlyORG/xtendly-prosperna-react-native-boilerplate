import React, { FC } from 'react'
import { View, ViewProps } from 'react-native'
import { FlexStyles } from '../styles'

export const FlexVerticalCenter: FC<ViewProps> = ({ style, ...props }) => (
  <View style={[FlexStyles.flexVerticalCenter, style]} {...props} />
)
