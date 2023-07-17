import React from 'react';
import PropTypes from 'prop-types';
import { AddList } from './ContactList.styled';
import { Record } from './ContactList.styled';
import { ContactUser } from './ContactList.styled';

function ContactList({ contacts, onDelete }) {
  return (
    <AddList>
      {contacts.map(({ id, name, number }) => (
        <Record key={id}>
          <ContactUser>
            {name} - {number}
          </ContactUser>
          <button onClick={() => onDelete(id)}>
            Delete
          </button>
        </Record>
      ))}
    </AddList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
