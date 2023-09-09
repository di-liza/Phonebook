import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from 'redux/contacts/operation';

import { toast } from 'react-toastify';
import { contactsSelector } from 'redux/contacts/selectors';
import { Formik } from 'formik';
import { contactSchema } from 'components/schemas';
import { FormTemplate } from 'components';
import contactsFormData from './contactsFormData';

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
    resetForm();
    closeModal();
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={contactsFormData.initialValues}
      validationSchema={contactSchema}
    >
      <FormTemplate
        title={'Add new contact'}
        inputs={contactsFormData.contactInputs}
        addBtnText={'Add'}
        closeModal={closeModal}
      />
    </Formik>
  );
}

export default ContactsForm;
