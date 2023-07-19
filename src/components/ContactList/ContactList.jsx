//import React from 'react';
import PropTypes from 'prop-types';
import { AddList } from './ContactList.styled';
import { Record } from './ContactList.styled';
import { ContactUser } from './ContactList.styled';

const ContactList = ({ flContacts, onDelete }) => {
  if (!flContacts || flContacts.length === 0) {
    return <div>No such contact!</div>;
  }
  return (
    <AddList>
      {flContacts.map(contact => (
        <Record key={contact.id}>
          <ContactUser>
            {contact.name} - {contact.number}
          </ContactUser>
          <button onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </Record>
      ))}
    </AddList>
  );
};

ContactList.propTypes = {
  flContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
