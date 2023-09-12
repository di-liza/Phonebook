import { ContactList, Container } from 'components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/operation';

function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactList />
    </Container>
  );
}

export default Contacts;
