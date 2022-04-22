import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native'
import { batch } from 'react-redux'
import {
  authenticationActions,
  useAppDispatch,
  navigationActions,
} from '@redux'
import { AUTHSTACK, LOGINSCREEN, STATEMANAGEMENTSCREEN } from '@constants'

import Toast from 'react-native-toast-message'
import { Colors, Images, TextStyles, Button } from '@core'
import { CardItem } from '@components'

export const DashboardScreen: React.FC = () => {
  const dispatch = useAppDispatch()

  const onLogout = () => {
    batch(async () => {
      dispatch(authenticationActions.logOut())
      Toast.show({
        type: 'success',
        text1: 'LOGGED OUT',
        text2: 'Logged out successfully',
      })
      dispatch(
        navigationActions.resetStack({
          stackName: AUTHSTACK,
          screenName: LOGINSCREEN,
        }),
      )
    })
  }

  const navigateStateManagement = () => {
    batch(async () => {
      dispatch(
        navigationActions.navigateScreen({ screenName: STATEMANAGEMENTSCREEN }),
      )
    })
  }

  return (
    <View style={styles.container}>
      <Text style={[TextStyles.fontWeight800, styles.title]}>
        Good day, <Text style={{ color: Colors.BLUE }}>coder</Text>! 🚀
      </Text>
      <Text style={[TextStyles.fontWeight300, styles.desc]}>
        Here are the guides for this boilerplate!
      </Text>
      <TouchableOpacity
        onPress={() => navigateStateManagement()}
        style={styles.state}
      >
        <View style={styles.stateContainer}>
          <Text style={[TextStyles.fontWeight800, styles.text1]}>
            State <Text style={[{ color: Colors.BLUE }]}>Management</Text>
          </Text>
          <Text style={[TextStyles.fontWeight300, styles.text2]}>
            Redux toolkit and Redux persist
          </Text>
        </View>
        <Image style={styles.stateManagement} source={Images.StateManagement} />
      </TouchableOpacity>
      <Text style={[TextStyles.fontWeight800, styles.header1]}>Guides</Text>
      <View style={styles.containerGuides}>
        <CardItem
          onPress={async () =>
            await Linking.openURL(
              'https://jericok.github.io/xtendly-prosperna-react-native-boilerplate/docs/Navigation',
            )
          }
          title="Navigation"
          description="Easy way to setup React Native"
          icon="directions"
        />
        <View style={styles.seperator} />
        <CardItem
          onPress={async () =>
            await Linking.openURL(
              'https://jericok.github.io/xtendly-prosperna-react-native-boilerplate/docs/UsingFlipper',
            )
          }
          title="Flipper"
          description="Debug your app easily using Flipper"
          icon="bug"
        />
      </View>
      <View style={styles.containerGuides}>
        <CardItem
          title="Beta Build"
          description="Easy way to deploy and test apps."
          icon="flask"
          onPress={async () =>
            await Linking.openURL(
              'https://jericok.github.io/xtendly-prosperna-react-native-boilerplate/docs/BetaBuild',
            )
          }
        />
        <View style={styles.seperator} />
        <CardItem
          onPress={async () =>
            await Linking.openURL(
              'https://jericok.github.io/xtendly-prosperna-react-native-boilerplate/docs/Components',
            )
          }
          title="Components"
          description="Proper way to create a reusable components "
          icon="puzzle-piece"
        />
      </View>

      <Text style={[TextStyles.fontWeight800, styles.header1]}>
        Digging Deeper
      </Text>
      <TouchableOpacity
        onPress={async () =>
          await Linking.openURL(
            'https://jericok.github.io/xtendly-prosperna-react-native-boilerplate/',
          )
        }
        style={styles.state}
      >
        <View style={styles.stateContainer}>
          <Text style={[TextStyles.fontWeight800, styles.text1]}>
            Full <Text style={[{ color: Colors.BLUE }]}>Documentation</Text>
          </Text>
          <Text style={[TextStyles.fontWeight300, styles.text2]}>
            Visist our full documentation
          </Text>
        </View>
        <Image style={styles.deeper} source={Images.Document} />
      </TouchableOpacity>
      <Button onPress={() => onLogout()} label="Log Out 🐸" topAuto={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    padding: 25,
    paddingTop: 50,
  },
  heroImg: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
    marginRight: 20,
  },
  title: { fontSize: 25, marginTop: 20 },
  desc: {
    fontSize: 15,
  },
  stateManagement: {
    width: '70%',
    height: '100%',
    marginRight: 20,
    resizeMode: 'cover',
    position: 'absolute',
    top: 20,
    right: -40,
  },
  deeper: {
    width: '70%',
    height: '100%',
    marginRight: 20,
    resizeMode: 'cover',
    position: 'absolute',
    top: 5,
    right: -40,
  },
  state: {
    height: 120,
    width: '100%',
    backgroundColor: Colors.LIGHTBLUE,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    overflow: 'hidden',
  },
  stateContainer: {
    width: '43%',
    paddingLeft: 20,
  },
  header1: { fontSize: 17, marginTop: 20 },
  text1: { fontSize: 13 },
  text2: { fontSize: 11, marginTop: 2 },
  containerGuides: {
    flexDirection: 'row',
    marginTop: 15,
  },
  seperator: { flex: 0.1 },
})
