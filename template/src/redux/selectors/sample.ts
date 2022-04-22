import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../type'

const sample = (state: RootState) => state.sample

export const selectSample = createSelector(sample, state => state)

export const selectsampleAndMetadata = createSelector(
  selectSample,
  ({
    loading = 'idle',
    companyId = 0,
    company = 'Prosperna',
    employees = 400,
    address = 'Philippines',
  }) => ({
    loading,
    companyId,
    company,
    employees,
    address,
  }),
)
