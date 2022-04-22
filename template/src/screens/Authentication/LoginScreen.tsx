import React from 'react'
import { View, Text, StyleSheet, Image, Platform } from 'react-native'
import { Formik } from 'formik'
import { batch } from 'react-redux'
import {
  authenticationActions,
  useAppDispatch,
  navigationActions,
} from '@redux'
import { DASHSTACK, DASHBOARDSCREEN } from '@constants'

import Toast from 'react-native-toast-message'
import { Colors, Images, TextStyles, Button, Input } from '@core'
import { LoginValidation } from '@constants'
import { Login } from '@types'

export const LoginScreen: React.FC = () => {
  const dispatch = useAppDispatch()

  const onLogin = ({ username, password }: Login) => {
    batch(async () => {
      const { payload }: any = await dispatch(
        authenticationActions.loginThunk({ username, password }),
      )
      if (payload.status === 200) {
        Toast.show({
          type: 'success',
          text1: payload.title,
          text2: payload.message,
        })
        batch(() => {
          dispatch(
            navigationActions.resetStack({
              stackName: DASHSTACK,
              screenName: DASHBOARDSCREEN,
            }),
          )
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
      <Image style={styles.heroImg} source={Images.Login} />
      <Text style={[TextStyles.fontWeight800, styles.title]}>Login</Text>
      <Text style={[TextStyles.fontWeight300, styles.desc]}>
        Sample login with state management and form management using redux,
        redux toolkit, redux persist and formik. You can use prosperna as
        username and password.
      </Text>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={values => onLogin(values)}
        validationSchema={LoginValidation}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <Input
              onChangeText={handleChange('username')}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="username"
              icon="user"
              placeholder="Username"
              value={values.username}
              error={errors.username}
              touched={touched.username}
            />
            <Input
              onChangeText={handleChange('password')}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="password"
              secureTextEntry={true}
              icon="key"
              placeholder="Password"
              value={values.password}
              error={errors.password}
              touched={touched.password}
            />
            <Button
              style={styles.button}
              onPress={handleSubmit}
              label="Login"
            />
          </>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    padding: 25,
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
  },
  heroImg: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
  },
  title: { fontSize: 30 },
  desc: {
    fontSize: 13,
    marginTop: 10,
    marginBottom: 20,
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
  forgot: { color: Colors.BLUE, marginLeft: 'auto', marginTop: 10 },
  button: { marginTop: 20 },
})
