import React from 'react'
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { Colors } from '@core'
import Icon from 'react-native-vector-icons/FontAwesome5'

interface HeaderButtonProp {
  icon: string
  style?: StyleProp<TouchableOpacityProps>
  alignment?: 'right' | 'left'
}

type HeaderButtonProps = HeaderButtonProp | TouchableOpacityProps

export const HeaderButton: React.FC<HeaderButtonProps> = props => {
  const { icon, style, alignment } = props as HeaderButtonProp
  const Props = props as TouchableOpacityProps
  const left = alignment === 'left' ? 15 : 'auto'
  const right = alignment === 'right' ? 15 : 'auto'

  return (
    <TouchableOpacity
      {...Props}
      style={[
        styles.container,
        {
          left: left,
          right: right,
        },
        style,
      ]}
    >
      <Icon light color={Colors.BLACK} size={25} name={icon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    left: 15,
    zIndex: 20,
  },
})
