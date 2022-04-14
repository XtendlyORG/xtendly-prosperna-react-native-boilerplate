import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome'
import { fontWeight300, fontWeight800 } from './textStyles'

export const toastConfig = {
  success: ({ text1, text2 }: any) => {
    const color = '#33A952'
    return (
      <View style={styles.container}>
        <View style={styles.toast}>
          <View style={[styles.bar, { backgroundColor: color }]} />
          <View style={[styles.icon, { backgroundColor: color }]}>
            <FontAwesome5 size={12} color="#FFF" name={'check'} />
          </View>
          <View>
            <Text style={[styles.title, { color: color }]}>{text1}</Text>
            <Text style={styles.description}>{text2}</Text>
          </View>
        </View>
      </View>
    )
  },

  error: ({ text1, text2 }: any) => {
    const color = '#EA4435'
    return (
      <View style={styles.container}>
        <View style={styles.toast}>
          <View style={[styles.bar, { backgroundColor: color }]} />
          <View style={[styles.icon, { backgroundColor: color }]}>
            <FontAwesome5 size={12} color="#FFF" name={'times'} />
          </View>
          <View>
            <Text style={[styles.title, { color: color }]}>{text1}</Text>
            <Text style={styles.description}>{text2}</Text>
          </View>
        </View>
      </View>
    )
  },

  warning: ({ text1, text2 }: any) => {
    const color = '#F6BB2D'
    return (
      <View style={styles.container}>
        <View style={styles.toast}>
          <View style={[styles.bar, { backgroundColor: color }]} />
          <View style={[styles.icon, { backgroundColor: color }]}>
            <FontAwesome5 size={12} color="#FFF" name={'exclamation'} />
          </View>
          <View>
            <Text style={[styles.title, { color: color }]}>{text1}</Text>
            <Text style={styles.description}>{text2}</Text>
          </View>
        </View>
      </View>
    )
  },

  info: ({ text1, text2 }: any) => {
    const color = '#3F72D7'
    return (
      <View style={styles.container}>
        <View style={styles.toast}>
          <View style={[styles.bar, { backgroundColor: color }]} />
          <View style={[styles.icon, { backgroundColor: color }]}>
            <FontAwesome5 size={12} color="#FFF" name={'info'} />
          </View>
          <View>
            <Text style={[styles.title, { color: color }]}>{text1}</Text>
            <Text style={styles.description}>{text2}</Text>
          </View>
        </View>
      </View>
    )
  },
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    width: '100%',
    paddingHorizontal: 20,
  },
  bar: {
    height: '100%',
    width: 10,
    marginRight: 10,
  },
  toast: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#F5F6F7',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#040207',
    fontSize: 13,
    marginBottom: 3,
    ...fontWeight800,
  },
  description: {
    color: '#040207',
    fontSize: 11,
    ...fontWeight300,
  },
  icon: {
    marginBottom: 'auto',
    marginTop: 20,
    marginRight: 10,
    borderRadius: 100,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
