import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../type'

const authentication = (state: RootState) => state.authentication

export const selectauthenticationLoading = createSelector(
  authentication,
  state => state.loading,
)

export const selectAuthentication = createSelector(
  authentication,
  state => state,
)

export const selectAuthenticationAndMetadata = createSelector(
  selectAuthentication,
  selectauthenticationLoading,
  ({ loading = 'idle', loggedIn = false, token = '' }) => ({
    loading,
    loggedIn,
    token,
  }),
)
