import React from 'react'
import { View, Text, StyleSheet, Image, Linking } from 'react-native'
import { Colors, TextStyles, Button, Images, HeaderButton } from '@core'

import { useAppDispatch, navigationActions } from '@redux'
import { PLAYREDUXCREEN } from '@constants'

export const StateManagementScreen: React.FC = () => {
  const dispatch = useAppDispatch()

  return (
    <View style={styles.container}>
      <HeaderButton
        onPress={() => dispatch(navigationActions.goBacktoPreviousScreen())}
        icon="chevron-left"
        alignment="left"
      />
      <HeaderButton
        onPress={async () =>
          await Linking.openURL(
            'https://jericok.github.io/xtendly-prosperna-react-native-boilerplate/docs/StateManagement',
          )
        }
        icon="book"
        alignment="right"
      />
      <Image style={styles.Image} source={Images.StateManagement} />

      <View style={styles.content}>
        <Text style={[TextStyles.fontWeight800, styles.title]}>
          State Management
        </Text>
        <Text style={[styles.desc]}>
          This boilerplate use{' '}
          <Text style={styles.descHighlight}>Redux-Toolkit</Text> and{' '}
          <Text style={styles.descHighlight}>Redux-Persist</Text> to deal with
          business side. We use them because they are often used by the
          community, very trendy and easy to debug.
        </Text>
        <Text style={styles.head}>Redux-Toolkit 🛠</Text>
        <Text style={[styles.desc]}>
          <Text style={styles.descHighlight}>Redux-Toolkit</Text> is intended to
          be the standard way to write Redux logic.
        </Text>
        <Text style={[styles.desc]}>
          So we using it for{' '}
          <Text style={styles.descHighlight}>synchronous operations.</Text>
        </Text>
        <Text style={styles.head}>Redux-Persist 🗂</Text>
        <Text style={[styles.desc]}>
          <Text style={styles.descHighlight}>Redux-Persist</Text> a library that
          allows saving a Redux store in the local storage of an application.
        </Text>
        <Text style={[styles.desc]}>
          So we using it for saving all
          <Text style={styles.descHighlight}> redux states</Text> in to{' '}
          <Text style={styles.descHighlight}>local storage.</Text>
        </Text>
        <Button
          onPress={() =>
            dispatch(
              navigationActions.navigateScreen({ screenName: PLAYREDUXCREEN }),
            )
          }
          label="Play with Redux 📦"
          topAuto={true}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHTBLUE,
    paddingTop: 50,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 40,
    paddingHorizontal: 20,
    marginTop: 180,
    paddingVertical: 10,
  },
  title: { fontSize: 20, marginTop: 20 },
  head: { ...TextStyles.fontWeight700, fontSize: 18, marginTop: 20 },
  desc: {
    ...TextStyles.fontWeight300,
    fontSize: 15,
    marginTop: 5,
  },
  descHighlight: {
    ...TextStyles.fontWeight600,
    color: Colors.BLUE,
  },
  Image: {
    width: '100%',
    height: '40%',
    marginRight: 20,
    resizeMode: 'cover',
    position: 'absolute',
    top: 30,
  },
})
