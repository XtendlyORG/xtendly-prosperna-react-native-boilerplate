import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { navigationRef } from '@navigation'
import { ONBOARDSTACK, WELCOMESCREEN } from '@constants'
import { NavigationState, ResetStack, Navigate } from '@types'
import { Uniq } from '@utils'

const initialState = {
  currentScreen: WELCOMESCREEN,
  currentStack: ONBOARDSTACK,
  currentParams: {},
  previousScreens: [],
} as NavigationState

const { actions, reducer } = createSlice({
  name: 'navigation',
  initialState: initialState,
  reducers: {
    redirect: (state, action: PayloadAction<ResetStack>) => {
      if (navigationRef.isReady()) {
        navigationRef.reset({
          index: 0,
          routes: [
            {
              name: action.payload.stackName,
              state: {
                routes: [
                  {
                    name: action.payload.screenName,
                    params: action.payload.params,
                  },
                ],
              },
            },
          ],
        })

        state.currentScreen = action.payload.screenName
        state.currentStack = action.payload.stackName
        state.currentParams = action.payload.params || {}
      }
    },

    resetStack: (state, action: PayloadAction<ResetStack>) => {
      if (navigationRef.isReady()) {
        navigationRef.reset({
          index: 0,
          routes: [
            {
              name: action.payload.stackName,
              state: {
                routes: [
                  {
                    name: action.payload.screenName,
                    params: action.payload.params,
                  },
                ],
              },
            },
          ],
        })

        state.previousScreens = [
          {
            name: action.payload.screenName,
            params: action.payload.params || {},
          },
        ]
        state.currentScreen = action.payload.screenName
        state.currentStack = action.payload.stackName
        state.currentParams = action.payload.params || {}
      }
    },

    navigateScreen: (state, action: PayloadAction<Navigate>) => {
      if (navigationRef.isReady()) {
        navigationRef.navigate(
          action.payload.screenName as never,
          action.payload.params as never,
        )
        const screens = [
          ...state.previousScreens,
          {
            name: action.payload.screenName,
            params: action.payload.params || {},
          },
        ]

        state.previousScreens = Uniq(screens)
        state.currentScreen = action.payload.screenName
        state.currentParams = action.payload.params || {}
      }
    },

    goBacktoPreviousScreen: state => {
      if (navigationRef.isReady()) {
        const lastScreen =
          state.previousScreens[state.previousScreens.length - 2]
        if (navigationRef.canGoBack()) {
          navigationRef.goBack()
        } else {
          navigationRef.reset({
            index: 0,
            routes: [
              {
                name: lastScreen.name,
                params: { ...lastScreen.params },
              },
            ],
          })
        }

        state.previousScreens.pop()
        state.currentScreen = lastScreen.name
        state.currentParams = lastScreen.params
      }
    },
  },
})

export const navigationActions = {
  ...actions,
}

export const navigationReducer = reducer
