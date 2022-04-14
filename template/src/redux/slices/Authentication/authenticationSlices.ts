import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginApi } from '@services'
import { LoginResponse, Login, AuthState } from '@types'

export const initialState = {
  loading: 'idle',
  token: '',
  loggedIn: false,
} as AuthState

const loginSlice = createAsyncThunk(
  'Authentication/loginSlice',
  async (body: Login, { rejectWithValue }) => {
    try {
      const response: { data: LoginResponse; status: number } = await loginApi(
        body,
      )
      return response.data
    } catch (err: any) {
      return rejectWithValue(err.response.data)
    }
  },
)

const { actions, reducer } = createSlice({
  name: 'authentication',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginSlice.fulfilled, (state, action) => {
        state.loading = 'succeeded'
        state.loggedIn = true
        state.token = action.payload.token || 'sampletoken'
      })
      .addCase(loginSlice.rejected, state => {
        state.loading = 'failed'
        state.loggedIn = false
        state.token = ''
      })
      .addCase(loginSlice.pending, state => {
        state.loading = 'pending'
      })
  },
})

export const authenticationActions = {
  ...actions,
  loginSlice,
}

export const authenticationReducer = reducer
