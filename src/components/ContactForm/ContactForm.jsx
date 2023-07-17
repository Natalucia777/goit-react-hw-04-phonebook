import React, { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { StForm } from './ContactForm.styled';
import { StLabel } from './ContactForm.styled';
import { FieldName } from './ContactForm.styled';
import { FieldNumber } from './ContactForm.styled';
import { FormButton } from './ContactForm.styled';

import PropTypes from 'prop-types';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

handleSubmit = (values, action) => {
    this.props.onSubmit(values);
    action.resetForm();
  };

  render() {
  const { name, number } = this.state;
    return (
    <Formik initialValues={{ name, number }} onSubmit={this.handleSubmit} >
      <StForm autocpmplete="off">
        <StLabel htmlFor="name">
          Name
          <FieldName
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
        </StLabel>
        <StLabel>
          Number
          <FieldNumber
            type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
          />
          <ErrorMessage name="number" component="div" />
        </StLabel>

        <FormButton type="submit">
          Add contact
        </FormButton>
        </StForm>
        </Formik>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default ContactForm;