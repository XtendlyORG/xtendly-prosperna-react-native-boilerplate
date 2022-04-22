import { createSelector } from '@reduxjs/toolkit'
import { ONBOARDSTACK, WELCOMESCREEN } from '@constants'
import { RootState } from '../type'

const navigation = (state: RootState) => state.navigation

export const selectNavigation = createSelector(navigation, state => state)

export const selectnavigationAndMetadata = createSelector(
  selectNavigation,
  ({
    currentScreen = WELCOMESCREEN,
    currentStack = ONBOARDSTACK,
    currentParams = {},
  }) => ({
    currentScreen,
    currentStack,
    currentParams,
  }),
)
