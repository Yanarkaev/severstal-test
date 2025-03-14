import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote, NoteSchema } from "../types/noteSchema";

const initialState: NoteSchema = {
  list: [...JSON.parse(localStorage.getItem("notes") || "[]")],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<INote>) => {
      state.list.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(state.list));
    },

    deleteNote: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((el) => el._id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(state.list));
    },

    editNote: (state, action: PayloadAction<{ _id: number; text: string }>) => {
      state.list.forEach((el) => {
        if (el._id === action.payload._id) {
          return (el.text = action.payload.text);
        }
      });
      localStorage.setItem("notes", JSON.stringify(state.list));
    },

    changeNoteColors: (state, action: PayloadAction<Omit<INote, "text">>) => {
      state.list = state.list.map((el) => {
        if (el._id === action.payload._id) {
          return {
            ...el,
            textColor: action.payload.textColor,
            backgroundColor: action.payload.backgroundColor,
          };
        }
        return el;
      });

      localStorage.setItem("notes", JSON.stringify(state.list));
    },
  },
});

export const { actions: noteActions, reducer: noteReducer } = noteSlice;
