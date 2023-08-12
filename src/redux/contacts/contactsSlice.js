import { createSlice } from '@reduxjs/toolkit';
// import { initialState } from './initialState';
import {
  addContact,
  deleteContacts,
  fetchContacts,
} from './thunks';
import {
  handleFulfilled,
  handleFulfilledAddContact,
  handleFulfilledContacts,
  handleFulfilledDelete,
  handlePending,
  handleRejected,
} from './handlers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        fetchContacts.fulfilled,
        handleFulfilledContacts
      )
      .addCase(
        addContact.fulfilled,
        handleFulfilledAddContact
      )
      .addCase(
        deleteContacts.fulfilled,
        handleFulfilledDelete
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      )
      .addMatcher(
        action => action.type.endsWith('/pending'),
        handlePending
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
