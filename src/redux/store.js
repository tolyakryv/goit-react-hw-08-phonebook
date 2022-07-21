import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts-reducer';

console.log(getDefaultMiddleware());
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];
const contactPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const store = configureStore({
  reducer: { contacts: persistReducer(contactPersistConfig, contactsReducer) },
  devTools: process.env.NODE_ENV === 'development',
  middleware: middleware,
});
export const persistor = persistStore(store);
