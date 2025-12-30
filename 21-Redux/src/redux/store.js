import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './count/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})