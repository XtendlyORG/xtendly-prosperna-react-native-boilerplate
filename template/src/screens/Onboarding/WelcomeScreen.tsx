import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectAuthentication } from '@redux'

import { Colors, Images, TextStyles, Button } from '@core'
import { AUTHSTACK } from '@constants'

export const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation()
  const authentication = useSelector(selectAuthentication)
  console.log('authentication', authentication)

  React.useEffect(() => {
    if (authentication.loggedIn && authentication.token) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: AUTHSTACK }],
        }),
      )
    }
  }, [authentication, navigation])

  return (
    <View style={styles.container}>
      <Image style={styles.heroImg} source={Images.Welcome} />
      <Text style={[TextStyles.fontWeight800, styles.title]}>
        React Native Boilerplate
      </Text>
      <Text style={[TextStyles.fontWeight300, styles.desc]}>
        Ready to use react native architecture tailored for Xtendly & Prosperna
        mobile development
      </Text>
      <View style={styles.company}>
        <Image style={styles.prospernaLogo} source={Images.ProspernaLogo} />
        <Image style={styles.xtendlyLogo} source={Images.XtendlyLogo} />
      </View>
      <Button
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: AUTHSTACK }],
            }),
          )
        }
        label="Getting Started 🚀"
        topAuto={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    padding: 25,
    paddingTop: 50,
    alignItems: 'center',
  },
  heroImg: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
    marginRight: 20,
  },
  title: { fontSize: 30, textAlign: 'center', marginTop: 20 },
  desc: {
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  company: { flexDirection: 'row', marginTop: 30 },
  prospernaLogo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
    marginRight: 20,
  },
  xtendlyLogo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
})
