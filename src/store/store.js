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
import authReducer from './features/auth/authSlice';
import foodIntakeReducer from './features/foodIntake/foodIntakeSlice';
import waterIntakeReducer from './features/waterIntake/waterIntakeSlice';
const tokenPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const waterPersistConfig = {
  key: 'waterIntake',
  storage,
  whitelist: ['volume'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(tokenPersistConfig, authReducer),
    foodIntake: foodIntakeReducer,
    waterIntake: persistReducer(waterPersistConfig, waterIntakeReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
