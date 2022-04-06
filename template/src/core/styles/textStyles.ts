import { StyleSheet, TextStyle, Platform } from 'react-native'

export const fontWeight400: TextStyle = {
  ...(Platform.OS === 'ios' ? { fontWeight: '400' } : {}),
  fontFamily: Platform.OS === 'ios' ? 'Montserrat' : 'montserrat_medium',
}

export const fontWeight500: TextStyle = {
  ...(Platform.OS === 'ios' ? { fontWeight: '500' } : {}),
  fontFamily: Platform.OS === 'ios' ? 'Montserrat' : 'montserrat_semibold',
}

export const fontWeight600: TextStyle = {
  ...(Platform.OS === 'ios' ? { fontWeight: '600' } : {}),
  fontFamily: Platform.OS === 'ios' ? 'Montserrat' : 'montserrat_bold',
}

export const fontWeight700: TextStyle = {
  ...(Platform.OS === 'ios' ? { fontWeight: '700' } : {}),
  fontFamily: Platform.OS === 'ios' ? 'Montserrat' : 'montserrat_bold',
}

export const fontWeight800: TextStyle = {
  ...(Platform.OS === 'ios' ? { fontWeight: '800' } : {}),
  fontFamily: Platform.OS === 'ios' ? 'Montserrat' : 'montserrat_extrabold',
}

export const underline: TextStyle = {
  textDecorationLine: 'underline',
}

export const transformToUppercase: TextStyle = {
  textTransform: 'uppercase',
}

export const TextStyles = StyleSheet.create({
  fontWeight500,
  fontWeight600,
  fontWeight700,
  fontWeight800,
  fontWeight400,
  transformToUppercase,
  underline,
})
