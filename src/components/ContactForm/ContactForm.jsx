import { useState } from 'react';
//import { Formik, ErrorMessage } from 'formik';
import { StForm } from './ContactForm.styled';
import { StLabel } from './ContactForm.styled';
import { FieldName } from './ContactForm.styled';
import { FieldNumber } from './ContactForm.styled';
import { FormButton } from './ContactForm.styled';
import PropTypes from 'prop-types';

// const valuesForm = {
//   name: '',
//   number: '',
// };
const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
      const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };
  return (
    //<Formik initialValues={valuesForm} onSubmit={handleSubmit} >
    <StForm autocpmplete="off" onSubmit={handleSubmit}>
      <StLabel htmlFor="name">
        Name
        <FieldName
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </StLabel>
      <StLabel>
        Number
        <FieldNumber
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </StLabel>

      <FormButton type="submit">
        Add contact
      </FormButton>
    </StForm>
    //</Formik>
  );
};


ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default ContactForm;