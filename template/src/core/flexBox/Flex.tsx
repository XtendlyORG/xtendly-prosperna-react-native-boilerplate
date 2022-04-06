import React, { FC } from 'react'
import { View, ViewProps } from 'react-native'
import { FlexStyles } from '../styles'

export const Flex: FC<ViewProps> = ({ style, ...props }) => (
  <View style={[FlexStyles.flexContainer, style]} {...props} />
)
