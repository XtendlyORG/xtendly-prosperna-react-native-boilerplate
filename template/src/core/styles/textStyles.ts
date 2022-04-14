import { StyleSheet, TextStyle } from 'react-native'
import { Colors } from '../themes'

export const fontWeight100: TextStyle = {
  fontFamily: 'Poppins-Thin',
  color: Colors.BLACK,
}

export const fontWeight200: TextStyle = {
  fontFamily: 'Poppins-ExtraLight',
  color: Colors.BLACK,
}

export const fontWeight300: TextStyle = {
  fontFamily: 'Poppins-Light',
  color: Colors.BLACK,
}

export const fontWeight400: TextStyle = {
  fontFamily: 'Poppins-Regular',
  color: Colors.BLACK,
}

export const fontWeight500: TextStyle = {
  fontFamily: 'Poppins-Medium',
  color: Colors.BLACK,
}

export const fontWeight600: TextStyle = {
  fontFamily: 'Poppins-SemiBold',
  color: Colors.BLACK,
}

export const fontWeight700: TextStyle = {
  fontFamily: 'Poppins-Bold',
  color: Colors.BLACK,
}

export const fontWeight800: TextStyle = {
  fontFamily: 'Poppins-ExtraBold',
  color: Colors.BLACK,
}

export const fontWeight900: TextStyle = {
  fontFamily: 'Poppins-Black',
  color: Colors.BLACK,
}

export const underline: TextStyle = {
  textDecorationLine: 'underline',
}

export const transformToUppercase: TextStyle = {
  textTransform: 'uppercase',
}

export const TextStyles = StyleSheet.create({
  fontWeight100,
  fontWeight200,
  fontWeight300,
  fontWeight400,
  fontWeight500,
  fontWeight600,
  fontWeight700,
  fontWeight800,
  fontWeight900,
  transformToUppercase,
  underline,
})
