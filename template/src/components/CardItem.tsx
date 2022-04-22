import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { Colors, TextStyles } from '@core'

interface CardItemProp {
  title: string
  description: string
  icon: string
}

type CardItemProps = CardItemProp | TouchableOpacityProps

export const CardItem: React.FC<CardItemProps> = props => {
  const { title, description, icon } = props as CardItemProp
  const Props = props as TouchableOpacityProps

  return (
    <TouchableOpacity {...Props} style={styles.container}>
      <Text style={[TextStyles.fontWeight800, styles.text1]}>{title}</Text>
      <Text style={[TextStyles.fontWeight300, styles.text2]}>
        {description}
      </Text>
      <Icon
        style={styles.icon}
        solid
        color={Colors.BLUE}
        size={25}
        name={icon}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
    backgroundColor: Colors.LIGHTBLUE,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    justifyContent: 'flex-end',
  },
  text1: { fontSize: 13 },
  text2: { fontSize: 11, marginTop: 2 },
  icon: { position: 'absolute', right: 15, top: 15 },
})
