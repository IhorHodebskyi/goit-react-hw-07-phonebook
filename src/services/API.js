import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64d4e4a9b592423e4694d81a.mockapi.io/',
});

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');

  return data;
};

export const addContact = async contact => {
  const postData = await instance.post(
    '/contacts',
    contact
  );

  return postData;
};

export const deleteContact = async id => {
  const deleteData = await instance.delete(
    `/contacts/${id}`
  );

  return deleteData;
};
