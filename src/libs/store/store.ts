import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeReducer from './slices/theme-slice';
import userReducer from './slices/user-slice';
import commonReducer from './slices/common-slice';
import navReducer from './slices/nav-slice';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedCommonReducer = persistReducer(persistConfig, commonReducer);
const persistedThemeReducer = persistReducer(persistConfig, themeReducer);
const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedNavReducer = persistReducer(persistConfig, navReducer);

export const store = configureStore({
    reducer: {
        common: persistedCommonReducer,
        theme: persistedThemeReducer,
        user: persistedUserReducer,
        nav: persistedNavReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
