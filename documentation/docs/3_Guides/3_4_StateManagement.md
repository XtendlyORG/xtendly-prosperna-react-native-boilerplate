---
slug: /StateManagement
title: State Management 🗃️
---

This boilerplate use [`Redux-Toolkit`](https://redux-toolkit.js.org/introduction/getting-started)
and [`Redux-Persist`](https://github.com/rt2zz/redux-persist)
to deal with business side.
We use them because they are often used by the community, very trendy and easy to debug.

[`Redux-Persist`](https://github.com/rt2zz/redux-persist) a library that allows saving a Redux store in the local storage of an application.
**So we using it for saving all redux states in to local storage.**

[`Redux-Toolkit`](https://redux-toolkit.js.org/introduction/getting-started) is intended to be the standard way to write Redux logic.
**So we using it for synchronous operations.**

## Why Redux-Toolkit❓

Common issues when configuring a bare Redux

- Configuring a Redux store (where the entire state tree of the application is held) becomes too complicated.

- To use Redux we need to add a lot of additional packages which can be quite a headache for beginners.

- Redux requires too much boilerplate code.

- Cloning before updating the state.

So that's why the the Redux team implemented and released Redux Toolkit: an improved version of Redux that enables state management with less code. It is intended to be the standard way to write Redux logic, and we strongly recommend that you use it.

## Why Redux-Persist❓

When we close a react native application that using a redux, the state always resets back to the initial values which in not a good thing when you try to build some large mobile application like e-commerce.

We can manually do the state persistent using the [`React Native Async Storage`](https://github.com/react-native-async-storage/async-storage#readme) method but honestly we will have to write everything from start and we have to maintain the structure of the state.

So here the redux-persist comes into play, with support for redux toolkit, that helps us to persist the state after application closed.

:::info
You can check the boilerplate state management sample in the boilerplate it self! You can try or play with it your choice!
:::

## How is it used in this boilerplate ❓

On the redux-persist side, it already configured and ready to use you can check the configuration in `configureStore.ts`.

Now all you have to do is to manage your stores, actions and reducers using redux-toolkit.

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

## Create a Slices 🍕

We will use [`createSlice`](https://redux-toolkit.js.org/api/createslice) from Redux-Toolkit for implementing action and reducers.

For example, we will create a login function with state management.

First navigate to `src/redux/slices` and create a new file. File name should be like this `nameofthesliceSlices.ts`.

For this sample we will name it `authenticationSlices.ts`, from there create the initial template of createSlice like the name and initialState of that slice.

```typescript title="src/redux/slices/Authentication/authenticationSlices.ts"
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  loading: Loading;
  loggedIn: boolean;
  token: string;
}

const { actions, reducer } = createSlice({
  name: "authentication",
  initialState: {
    loading: "idle",
    token: "",
    loggedIn: false,
  } as AuthState,
  reducers: {},
});

export const authenticationActions = {
  ...actions,
};

export const authenticationReducer = reducer;
```

## Create Redux Action ⚡️

Next will be implimenting the action. For this one we will use [`createAsyncThunk`](https://redux-toolkit.js.org/api/createAsyncThunk).

createAsyncThunk returns a standard Redux thunk action creator. The thunk action creator function will have plain action creators for the pending , fulfilled , and rejected cases attached as nested fields. We will use those pending , fulfilled , and rejected cases in our reducers later.

From the same file we will create a `loginThunk` using createAsyncThunk, basically the loginThunk action is where the login API call happening.

```typescript title="src/redux/slices/Authentication/authenticationSlices.ts"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "@services"; // loginApi is a http request using axios.

interface AuthState {
  loading: Loading;
  loggedIn: boolean;
  token: string;
}

interface Login {
  username: string;
  password: string;
}

interface LoginResponse {
  title: string;
  message: string;
  token?: string;
  status: number;
}

// loginThunk is a function or action that will call the loginApi
const loginThunk = createAsyncThunk(
  "Authentication/loginThunk",
  async (body: Login, { rejectWithValue }) => {
    try {
      const response: { data: LoginResponse } = await loginApi(body);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

const { actions, reducer } = createSlice({
  name: "authentication",
  initialState: {
    loading: "idle",
    token: "",
    loggedIn: false,
  } as AuthState,
  reducers: {},
});

export const authenticationActions = {
  ...actions,
  loginThunk, // Export the action so you can use it anywhere
};

export const authenticationReducer = reducer;
```

## Create a Redux Reducer 📦

We will now create the reducers. For this one we will use [`extraReducers`](https://redux-toolkit.js.org/api/createslice#extrareducers) from createSlice.

`extraReducers` allows `createSlice` to respond to other action types besides the types it has generated.
You would use `extraReducers` when you are dealing with an action that you have already defined somewhere else. Which is we already have using `createAsyncThunk`.

As discussed in Create a Redux Action `createAsyncThunk` have a pending , fulfilled , and rejected cases and we will use it to our `extraReducers`.

```typescript title="src/redux/slices/Authentication/authenticationSlices.ts"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "@services";

interface AuthState {
  loading: Loading;
  loggedIn: boolean;
  token: string;
}

interface Login {
  username: string;
  password: string;
}

interface LoginResponse {
  title: string;
  message: string;
  token?: string;
  status: number;
}

const loginThunk = createAsyncThunk(
  "Authentication/loginThunk",
  async (body: Login, { rejectWithValue }) => {
    try {
      const response: { data: LoginResponse } = await loginApi(body);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

const { actions, reducer } = createSlice({
  name: "authentication",
  initialState: {
    loading: "idle",
    token: "",
    loggedIn: false,
  } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        // If loginThunk is fulfilled then we will set the states to
        state.loading = "succeeded";
        state.loggedIn = true;
        state.token = action.payload.token; // value from the action(loginThunk)
      })
      .addCase(loginThunk.rejected, (state) => {
        // If loginThunk is rejected then we will set the states to
        state.loading = "failed";
        state.loggedIn = false;
        state.token = "";
      })
      .addCase(loginThunk.pending, (state) => {
        // If loginThunk is pending then we will set the states to
        state.loading = "pending";
      });
  },
});

export const authenticationActions = {
  ...actions,
  loginThunk,
};

export const authenticationReducer = reducer;
```

## Combine Reducers 📦 📦

We've successfully created a actions and reducer.

Now how can we save the states of those slices in our redux store?

As discussed configure store is already implemented in `configureStore.ts`, all you have to do is to import your reducers in that file. But as your app grows more complex, you'll want to split your reducing function into separate functions that's why we will use [`combineReducers`](https://redux.js.org/api/combinereducers).

The `combineReducers` helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

In the redux folder we have a file called `rootReducer.ts` from there import the reducers you created in the slices.

Assign it with name and your good to go!

```typescript title="src/redux/rootReducer.ts"
import { combineReducers } from "redux";
import { authenticationReducer } from "./slices";

export default combineReducers({
  authentication: authenticationReducer,
});
```

## How to trigger the Action in Slice ❓

You have now created your slice action with reducers, but how can you trigger it?

`import` the slice action from `@redux` and dispatch it using the `useAppDispatch` from configure store and thats it easy as that!

```tsx title="src/screen/Authentication/LoginScreen.tsx"
import React from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import { Formik } from "formik";
import { batch } from "react-redux";
import {
  authenticationActions, // import the action
  useAppDispatch, // import the action
  navigationActions,
} from "@redux";
import { DASHSTACK, DASHBOARDSCREEN } from "@constants";

import Toast from "react-native-toast-message";
import { Colors, Images, TextStyles, Button, Input } from "@core";
import { LoginValidation } from "@constants";
import { Login } from "@types";

export const LoginScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  // This function will trigger the loginThunk we created in authentication slices
  const onLogin = ({ username, password }: Login) => {
    batch(async () => {
      const { payload }: any = await dispatch(
        authenticationActions.loginThunk({ username, password })
      );
      console.log("loginThunk returned value", payload);
    });
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => onLogin(values)}
        validationSchema={LoginValidation}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <Input
              onChangeText={handleChange("username")}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="username"
              icon="user"
              placeholder="Username"
              value={values.username}
              error={errors.username}
              touched={touched.username}
            />
            <Input
              onChangeText={handleChange("password")}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="password"
              secureTextEntry={true}
              icon="key"
              placeholder="Password"
              value={values.password}
              error={errors.password}
              touched={touched.password}
            />
            <Button
              style={styles.button}
              onPress={handleSubmit}
              label="Login"
            />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    padding: 25,
    paddingTop: Platform.OS === "ios" ? 50 : 10,
  },
  button: { marginTop: 20 },
});
```

## Get the state from slice 💎

If the `Action` is triggered `Reducer` will do their job automaticaly! That's how redux works.

We all know that `Reducer` is the one who changes the state of the slice, but how can we get or select those state and use it in the entire application?

We can do that by creating a `useSelector`!

`useSelector` is a function that takes the current state as an argument and returns whatever data you want from it and it allows you to store the return values inside a variable within the scope of you functional components instead of passing down as props.

In `redux/selectors` folder we will create our own selector for the slice we've created (authenticationSlice).

For example we will name it `authentication.ts` we will match it in the combine reducer we've created earlier.

In the file you can create selectors as many as you want, like selecting a specific state or maybe select a filtered state and more!! You can do that using [`createSelector`](https://redux-toolkit.js.org/api/createSelector).

```typescript title="src/redux/selectors/authentication.ts"
import { createSelector } from "@reduxjs/toolkit";
import rootReducer from "../rootReducer";

type RootState = ReturnType<typeof rootReducer>;

const authentication = (state: RootState) => state.authentication; // state of authentication

export const selectAuthentication = createSelector(
  authentication,
  (state) => state
);

export const selectAuthenticationLoading = createSelector(
  authentication,
  (state) => state.loading
);
```

Now that you've create your own selectors you can now use it anywhere using `useSelector`.

These selectors will be automaticaly updated if the action and reducers have been triggered!

```tsx title="src/screens/Dashboard/DashboardScreen.tsx"
import React from "react";

import { useSelector } from "react-redux";
import { selectAuthentication } from "@redux";

export const DashboardScreen: React.FC = () => {
  const authentication = useSelector(selectAuthentication);

  return (
    <View>
      <Text>{authentication.loading}</Text>
      <Text>{authentication.loggedIn}</Text>
      <Text>{authentication.token}</Text>
    </View>
  );
};
```
