import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistCombineReducers,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE
} from "redux-persist";

import storage from "redux-persist/es/storage";
import survey from "./slice/slice"
import product from "./slice/product"
import env from "../utils/environment"

const persistConfig = {
    key: "im99",
    storage,
}

const persistedReducer = persistCombineReducers(persistConfig, {
    survey,
    product
})

const store = configureStore({
    reducer: persistedReducer,
    devTools: env.environment === "development",
    middleware: (defaultMiddleware) => {
        return defaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                    REHYDRATE
                ]
            }
        })
    }
});

export const persistor = persistStore(store)
export default store;