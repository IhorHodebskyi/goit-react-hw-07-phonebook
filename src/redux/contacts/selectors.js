import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter;

export const selectFilterContacts = createSelector(
  selectFilter,
  selectContacts,
  (filter, contacts) => {
    return contacts.items?.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(filter.toLowerCase())
    );
  }
);
