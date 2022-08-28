// import { configureStore } from "@reduxjs/toolkit";
// import employeeSlice from "../feature/employeeSlice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../feature/employeeSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}


const reducers = combineReducers({
    employee: employeeReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})
export const persistor = persistStore(store)

// import storage from 'redux-persist/lib/storage'
// import {
//     persistReducer,
//     persistStore,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist'
// import { combineReducers } from "redux";


// const reducers = combineReducers({
//     employee: employeeSlice,
// });

// const persistConfig = {
//     key: 'root',
//     storage
// };

// const persistedReducer = persistReducer(persistConfig, reducers);


// export const store = configureStore({
//     reducer: persistedReducer,
//     devTools: process.env.NODE_ENV !== 'production',
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         })
// })

// export const persistor = persistStore(store);

