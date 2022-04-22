import React from 'react'
import { View, Text, StyleSheet, Image, Linking } from 'react-native'
import Toast from 'react-native-toast-message'
import {
  Colors,
  TextStyles,
  Button,
  Images,
  HeaderButton,
  flexDirectionRow,
} from '@core'

import { batch, useSelector } from 'react-redux'
import {
  useAppDispatch,
  navigationActions,
  selectSample,
  sampleActions,
} from '@redux'

export const PlayReduxScreen: React.FC = () => {
  const dispatch = useAppDispatch()
  const sample = useSelector(selectSample)

  const onChangeRandom = () => {
    batch(async () => {
      const { payload }: any = await dispatch(
        sampleActions.randomCompanyThunk(sample.companyId),
      )
      if (payload.status === 200) {
        Toast.show({
          type: 'success',
          text1: payload.title,
          text2: payload.message,
        })
      } else {
        Toast.show({
          type: 'error',
          text1: payload.title,
          text2: payload.message,
        })
      }
    })
  }

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
          Redux-Persist 🗂
        </Text>
        <Text style={[styles.desc]}>🚩 How redux persist works?</Text>

        <Text style={[styles.desc]}>
          When we close a react native application that using a redux, the state
          always resets back to the initial values which in not a good thing
          when you try to build some large mobile application like e-commerce.
        </Text>
        <Text style={[styles.desc]}>
          So here the redux-persist comes into play, with support for redux
          toolkit, that helps us to persist the state after application closed.
        </Text>
        <Text style={styles.head}>
          {sample.companyId === 0 ? 'Initial' : 'Current'} State 💎
        </Text>
        <View style={styles.code}>
          <View style={[flexDirectionRow]}>
            <Text style={[styles.state]}>companyId: </Text>
            <Text style={[styles.state]}>{sample.companyId},</Text>
          </View>
          <View style={[flexDirectionRow]}>
            <Text style={[styles.state]}>company: </Text>
            <Text style={[styles.state]}>"{sample.company}",</Text>
          </View>

          <View style={[flexDirectionRow]}>
            <Text style={[styles.state]}>employees: </Text>
            <Text style={[styles.state]}>{sample.employees},</Text>
          </View>
          <View style={[flexDirectionRow]}>
            <Text style={[styles.state]}>address: </Text>
            <Text style={[styles.state]}>"{sample.address}",</Text>
          </View>
        </View>

        <Button
          isLoading={sample.loading}
          style={styles.button}
          onPress={onChangeRandom}
          label="Change Random ⚡️"
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
  state: {
    ...TextStyles.fontWeight600,
    color: Colors.PRIMARY,
    marginLeft: 5,
    marginBottom: 3,
  },
  Image: {
    width: '100%',
    height: '40%',
    marginRight: 20,
    resizeMode: 'cover',
    position: 'absolute',
    top: 30,
  },
  button: { marginTop: 15 },
  code: {
    padding: 20,
    backgroundColor: Colors.BLACK,
    borderRadius: 20,
    marginTop: 10,
  },
})
