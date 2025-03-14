import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "../../entities/Note/model/slice/noteSlice";

const store = configureStore({
  reducer: {
    notesList: noteReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
