import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { randomApi } from '@services'
import { RandomResponse, SampleState } from '@types'

const initialState = {
  loading: 'idle',
  companyId: 0,
  company: 'Prosperna',
  employees: 400,
  address: 'Philippines',
} as SampleState

const randomCompanyThunk = createAsyncThunk(
  'sample/randomCompanyThunk',
  async (companyId: number, { rejectWithValue }) => {
    try {
      const response: { data: RandomResponse } = await randomApi(companyId)
      console.log(response.data)
      return response.data
    } catch (err: any) {
      return rejectWithValue(err.response.data)
    }
  },
)

const { actions, reducer } = createSlice({
  name: 'sample',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(randomCompanyThunk.fulfilled, (state, action) => {
        const { companyId, company, employees, address } = action.payload.data
        state.loading = 'succeeded'
        state.companyId = companyId
        state.company = company
        state.employees = employees
        state.address = address
      })
      .addCase(randomCompanyThunk.rejected, state => {
        state.loading = 'failed'
      })
      .addCase(randomCompanyThunk.pending, state => {
        state.loading = 'pending'
      })
  },
})

export const sampleActions = {
  ...actions,
  randomCompanyThunk,
}

export const sampleReducer = reducer
