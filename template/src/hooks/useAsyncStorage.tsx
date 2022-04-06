import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const useAsyncStorage = (key: string, initialValue: string) => {
  const [storedValue, setStoredValue] = React.useState()

  async function getStoredItem(keys: string, initialValues: string) {
    try {
      const item = await AsyncStorage.getItem(keys)
      const value = item ? JSON.parse(item) : initialValues
      setStoredValue(value)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getStoredItem(key, initialValue)
  }, [key, initialValue])

  const setValue: any = async (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
