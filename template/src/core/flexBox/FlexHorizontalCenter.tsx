import React, { FC } from 'react'
import { View, ViewProps } from 'react-native'
import { FlexStyles } from '../styles'

export const FlexHorizontalCenter: FC<ViewProps> = ({ style, ...props }) => (
  <View style={[FlexStyles.flexHorizontalCenter, style]} {...props} />
)
