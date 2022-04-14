import React from 'react'
import { Provider } from 'react-redux'
import Toast from 'react-native-toast-message'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { configureAppStore } from '@redux'
import { AppName } from '@src'
import { toastConfig } from '@core'

const { store, persistor } = configureAppStore()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppName />
        <Toast config={toastConfig} />
      </PersistGate>
    </Provider>
  )
}

export default App
