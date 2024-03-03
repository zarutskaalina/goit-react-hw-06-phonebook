import { contactsReducer } from './contacts/contacts.reducer';
import { contactsFormReducer } from './contacts/contactForm.reducer';
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

const contactsConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'], // масив ключів, які треба пропускати в локальне сховище
  //blacklist: масив ключів, які не треба пропускати в локальне сховище
};

export const store = configureStore({
  reducer: {
    contactsStore: persistReducer(contactsConfig, contactsReducer),
    contactsFormStore: contactsFormReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
