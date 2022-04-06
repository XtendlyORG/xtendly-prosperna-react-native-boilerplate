import React, { FC } from 'react'
import { View, ViewProps } from 'react-native'
import { FlexStyles } from '../styles'

export const FlexRow: FC<ViewProps> = ({ style, ...props }) => (
  <View style={[FlexStyles.flexContainerRow, style]} {...props} />
)
