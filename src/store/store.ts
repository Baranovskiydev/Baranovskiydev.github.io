import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import QuitUserReducer from './reducers/QuitUserSlice'
import { presentUserAPI } from "../API/UserPresent";
import AddInfoReducer from './reducers/AddInfoSlice'

const rootReducer = combineReducers({
    AddInfoReducer,
    QuitUserReducer,
    [presentUserAPI.reducerPath]: presentUserAPI.reducer
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(presentUserAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']