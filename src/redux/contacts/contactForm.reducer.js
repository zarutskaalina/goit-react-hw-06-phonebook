import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  number: '',
};

const contactsFormSlice = createSlice({
  // Ім'я слайсу
  name: 'form',
  // Початковий стан редюсера слайсу
  initialState,

  // Об'єкт редюсерів
  reducers: {
    inputNameChange(state, { payload }) {
      state.name = payload;
    },
    inputNumberChange(state, { payload }) {
      state.number = payload;
    },
    clearForm(state, { payload }) {
      state.name = payload;
      state.number = payload;
    },
  },
});

// Генератори екшен кріейторів
export const { inputNameChange, inputNumberChange, clearForm } =
  contactsFormSlice.actions;
// Редюсер слайсу
export const contactsFormReducer = contactsFormSlice.reducer;
