import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({text: action.payload, id: Date.now()});
    },
    remove: (state, action) => state.filter(e => e.id !== action.payload),
  },
});

export const { add, remove } = toDos.actions;

const store = configureStore({reducer: toDos.reducer});

export default store;
