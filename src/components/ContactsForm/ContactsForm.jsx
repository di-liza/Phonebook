import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from 'redux/contacts/operation';

import { toast } from 'react-toastify';
import { contactsSelector } from 'redux/contacts/selectors';
import { FormStyled, InputStyled } from './ContactsForm.styled';
import { TiTimes } from 'react-icons/ti';
import { FiUser, FiPhone } from 'react-icons/fi';
import { Formik, ErrorMessage } from 'formik';
import { contactSchema } from 'components/schemas';

const initialValues = {
  name: '',
  number: '(123)',
};

function ContactsForm({ closeModal }) {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);

  const handleFormSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isContactExists) {
      return toast.error(`"${newContact.name}" is already in contacts 😣`, {
        position: 'top-center',
      });
    }

    dispatch(createContact(newContact));
    closeModal();
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={contactSchema}
    >
      <FormStyled>
        <button
          title="Close modal"
          className="closeModalBtn"
          type="button"
          onClick={closeModal}
        >
          <TiTimes size={20} />
        </button>
        <h3 className="title">Add new contact</h3>
        <label className="styled-label">
          <span>
            <FiUser size={15} /> Name
          </span>
          <ErrorMessage
            name="name"
            render={message => <p className="errorMessage">{message}</p>}
          />
          <InputStyled
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name"
            required
          />
        </label>
        <label className="styled-label">
          <span>
            <FiPhone size={15} />
            Number
          </span>
          <ErrorMessage
            name="number"
            render={message => <p className="errorMessage">{message}</p>}
          />
          <InputStyled
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter phone number"
            required
          />
        </label>
        <button className="addBtn" type="submit">
          Add
        </button>
      </FormStyled>
    </Formik>
  );
}

export default ContactsForm;
