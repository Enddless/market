import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './slice/products';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['products']
};

export const reducer = combineReducers({
  products: productsSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Игнорируем действия, которые не являются сериализуемыми
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    })
});

export const persistor = persistStore(store);
