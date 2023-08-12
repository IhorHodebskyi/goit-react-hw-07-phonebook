import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/API';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkApi) => {
    try {
      const data = await API.getContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkApi) => {
    try {
      const { data } = await API.addContact(contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkApi) => {
    try {
      const { data } = await API.deleteContact(id);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
