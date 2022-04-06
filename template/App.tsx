import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { configureAppStore } from '@redux'
import { AppName } from '@src'

const { store, persistor } = configureAppStore()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppName />
      </PersistGate>
    </Provider>
  )
}

export default App
