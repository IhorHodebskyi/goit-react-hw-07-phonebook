// import React, { useEffect } from 'react';
import { List, Item, Button } from './ContacstList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterContacts } from 'redux/contacts/selectors';
import { deleteContacts } from 'redux/contacts/thunks';
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilterContacts);
  console.log(contacts);

  const onRemoveContact = id => {
    console.log(id);
    dispatch(deleteContacts(id));
  };

  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <Item key={id}>
          {name + ' : ' + number}
          {
            <Button
              type="button"
              name="delete"
              onClick={() => onRemoveContact(id)}
            >
              delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
