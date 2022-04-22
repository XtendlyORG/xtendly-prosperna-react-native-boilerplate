import React from 'react'
import {
  Text,
  StyleSheet,
  Pressable,
  PressableProps,
  StyleProp,
  ActivityIndicator,
} from 'react-native'
import { TextStyles } from '../styles'
import { Colors } from '../themes'

interface ButtonProp {
  label?: string
  style?: StyleProp<PressableProps>
  topAuto?: boolean
  isLoading?: Loading
}

type ButtonProps = ButtonProp | PressableProps

export const Button: React.FC<ButtonProps> = props => {
  const { label, style, topAuto, isLoading } = props as ButtonProp
  const Props = props as PressableProps

  return (
    <Pressable
      {...Props}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? `${Colors.BLUE}A1` : Colors.BLUE,
          marginTop: topAuto ? 'auto' : 0,
        },
        style,
      ]}
    >
      {isLoading === 'pending' ? (
        <ActivityIndicator size="small" color={Colors.PRIMARY} />
      ) : (
        <Text style={[TextStyles.fontWeight600, styles.text]}>{label}</Text>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: Colors.PRIMARY,
    fontSize: 15,
  },
})
