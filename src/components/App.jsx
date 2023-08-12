// import { nanoid } from 'nanoid';
import { ContactsForm } from './contactsForm/ContactsForm';
import ContactList from './contacts/ContactsList';
import Filter from './Filter/Filter';
import {
  Container,
  Wrapper,
  Title,
  SubTitle,
} from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/thunks';
import Error from './Error/Error';
import IsLoading from './IsLoading/IsLoading';
// import { selectContacts } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const { items, isLoading, error } =
    useSelector(selectContacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactsForm />
      <SubTitle>Contacts</SubTitle>
      {items.length > 0 ? (
        <Filter />
      ) : (
        <Wrapper>
          Your phonebook is empty. Add first contact!
        </Wrapper>
      )}
      {isLoading && <IsLoading />}
      {error && <Error />}
      {items.length > 0 && <ContactList />}
    </Container>
  );
};

export default App;
