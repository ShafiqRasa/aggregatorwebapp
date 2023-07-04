import { configureStore } from "@reduxjs/toolkit";
import { loggerMiddleware } from "./middleware/logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();
const persistCinfiguration = {
  key: "root",
  storage,
  whitelist: ["user", "preferences"],
};
const persistedReducer = persistReducer(persistCinfiguration, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [loggerMiddleware, sagaMiddleware],
  // middleware: [
  //   process.env.NODE_ENV !== "production" && loggerMiddleware,
  //   sagaMiddleware,
  // ],
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type rootState = ReturnType<typeof store.getState>;
