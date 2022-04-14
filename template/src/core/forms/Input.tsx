import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StyleProp,
  ViewStyle,
  TextInputProps,
} from 'react-native'
import { TextStyles } from '../styles'
import { Colors } from '../themes'
import Icon from 'react-native-vector-icons/FontAwesome5'

interface InputProp {
  icon: string
  containerStyle?: StyleProp<ViewStyle>
  iconStyle?: StyleProp<ViewStyle>
  required?: boolean
  error?: string
  touched?: boolean
}

type InpuProps = InputProp | TextInputProps

export const Input: React.FC<InpuProps> = props => {
  const { containerStyle, iconStyle, icon, error, touched } = props as InputProp
  const Props = props as TextInputProps

  return (
    <View>
      <View style={[styles.container, containerStyle]}>
        <Icon
          solid
          style={iconStyle}
          color={error && touched ? Colors.RED : Colors.GREY}
          size={25}
          name={icon}
        />
        <TextInput
          {...Props}
          style={[
            TextStyles.fontWeight400,
            styles.input,
            {
              color: error && touched ? Colors.RED : Colors.BLACK,
              borderBottomColor: error && touched ? Colors.RED : Colors.GREY,
            },
            Props.style,
          ]}
        />
      </View>
      <Text style={[TextStyles.fontWeight300, styles.error]}>
        {error && touched ? error : ''}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 15,
  },
  input: {
    borderBottomColor: Colors.GREY,
    borderBottomWidth: 0.2,
    flex: 1,
    marginLeft: 20,
    paddingBottom: 8,
    fontSize: 17,
    color: Colors.GREY,
  },
  error: { marginLeft: 43, marginTop: 5, fontSize: 12, color: Colors.RED },
})
