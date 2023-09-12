import { Contact, Filter, Loader, Modal } from 'components';
import { useState } from 'react';
import { TiUserAdd } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { contactsSelector, selectIsLoading } from 'redux/contacts/selectors';
import { selectFiter } from 'redux/filter';
import { ContactsWrapper } from './ContactList.styled';

function ContactList() {
  const contacts = useSelector(contactsSelector);
  const isLoading = useSelector(selectIsLoading);

  const filter = useSelector(selectFiter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ContactsWrapper>
      {open && <Modal closeModal={handleClose} />}
      <div className="headerWrap">
        <h2 className="title">Contacts</h2>
        <button
          title="Add contact"
          className="addContactBtn"
          type="button"
          onClick={handleOpen}
        >
          <TiUserAdd className="addIcon" />
        </button>
      </div>
      <Filter />
      {isLoading ? (
        <Loader height={80} width={80} top={50} />
      ) : (
        <ul className="contactList">
          {filteredContacts.length !== 0 &&
            filteredContacts.map(contact => {
              return <Contact key={contact.id} contact={contact} />;
            })}
        </ul>
      )}
    </ContactsWrapper>
  );
}

export default ContactList;
