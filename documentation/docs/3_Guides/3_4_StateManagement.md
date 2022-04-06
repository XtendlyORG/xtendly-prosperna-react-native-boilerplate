---
slug: /StateManagement
title: State Management 🗃️
---

This boilerplate use [`Redux-Toolkit`](https://redux-toolkit.js.org/introduction/getting-started)
and [`RTKQuery`](https://redux-toolkit.js.org/rtk-query/overview)
to deal with business side.
We use them because they are often used by the community, very trendy and easy to debug.

[`RTKQuery`](https://redux-toolkit.js.org/rtk-query/overview) is a powerful data fetching and caching tool.
**So we using it for asynchronous api calls.**

[`Redux-Toolkit`](https://redux-toolkit.js.org/introduction/getting-started) is intended to be the standard way to write Redux logic.
**So we using it for synchronous operations.**

## How is it used in this boilerplate ❓

🚧 It's a Work In Progress section 🚧

```typescript title="src/redux/configureStore.ts"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    if (__DEV__) {
      const createDebugger = require("redux-flipper").default;
      middlewares.push(createDebugger());
    }

    return middlewares;
  },
});

const persistor = persistStore(store);

export const configureAppStore = () => ({ store, persistor });

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
```
