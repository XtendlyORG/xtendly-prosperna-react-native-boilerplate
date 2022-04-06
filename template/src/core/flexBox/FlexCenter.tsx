import React, { FC } from 'react'
import { View, ViewProps } from 'react-native'
import { FlexStyles } from '../styles'

export const FlexCenter: FC<ViewProps> = ({ style, ...props }) => (
  <View style={[FlexStyles.flexCenter, style]} {...props} />
)
