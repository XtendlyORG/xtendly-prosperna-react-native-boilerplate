import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginApi } from '@services'
import { LoginResponse, Login, AuthState } from '@types'

const initialState = {
  loading: 'idle',
  token: '',
  loggedIn: false,
} as AuthState

const loginThunk = createAsyncThunk(
  'Authentication/loginThunk',
  async (body: Login, { rejectWithValue }) => {
    try {
      const response: { data: LoginResponse } = await loginApi(body)
      return response.data
    } catch (err: any) {
      return rejectWithValue(err.response.data)
    }
  },
)

const { actions, reducer } = createSlice({
  name: 'authentication',
  initialState: initialState,
  reducers: {
    logOut(state) {
      state.loading = 'idle'
      state.loggedIn = false
      state.token = ''
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = 'succeeded'
        state.loggedIn = true
        state.token = action.payload.token || 'sampletoken'
      })
      .addCase(loginThunk.rejected, state => {
        state.loading = 'failed'
        state.loggedIn = false
        state.token = ''
      })
      .addCase(loginThunk.pending, state => {
        state.loading = 'pending'
      })
  },
})

export const authenticationActions = {
  ...actions,
  loginThunk,
}

export const authenticationReducer = reducer
