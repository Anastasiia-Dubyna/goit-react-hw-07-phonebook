import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64ee1ffb1f87218271425860.mockapi.io/items';

export const fetchContact = createAsyncThunk(
  'contact/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('', contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
