import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
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
};
const store = configureStore({
  reducer: {
    contacts: {
      items: [],
      filter: '',
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: middleware,
  },
});
const persistor = persistStore(store);
export default { store, persistor };
