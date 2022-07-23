import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
// import storage from 'redux-persist/lib/storage';
// import contactsReducer from './contacts-reducer';
import { contactsAPI } from 'services/contactsAPI';

import { filter } from './contacts-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];
// const contactPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
    filter: filter,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsAPI.middleware,
  ],
});
// export const persistor = persistStore(store);
