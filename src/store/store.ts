import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import QuitUserReducer from './reducers/QuitUserSlice'
import { quitUserAPI } from "../API/UserPresent";

const rootReducer = combineReducers({
    QuitUserReducer,
    [quitUserAPI.reducerPath]: quitUserAPI.reducer
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(quitUserAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']