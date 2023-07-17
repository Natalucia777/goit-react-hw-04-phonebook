import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import shortid from 'shortid';
import { AllContacts } from './App.styled';
import { TitleContacts } from './App.styled';

//   const defaultContacts = [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
// ];
const LS_KEY = 'contacts'; 
function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
useEffect(() => {
      if (localStorage.getItem(LS_KEY) !== null) {
      const parsedContacts = JSON.parse(localStorage.getItem(LS_KEY));
      setContacts(parsedContacts);
      return;
    }}, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const normalizedName = name.toLowerCase();
      let isAdded = false;
    contacts.forEach(e => {
      if (e.name.toLowerCase() === normalizedName) {
        alert(`${name} is already in contacts`);
        isAdded = true;
      }
    });
      if (isAdded) {
      return;
    }
        const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    setContacts(prevContacts => [contact, ...prevContacts]);
  }

const filterChange = e => {
    return setFilter(e.target.value.trim());
  };
    
const visiblContacts = (filter, contacts) => {
   // const { filter, contacts } = this.state;
  if (filter) {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    } else {
        return contacts;
      }
  };

const removeContact = todoId => {
  setContacts(prevState => prevState.filter(contact => contact.id !== todoId));
  };
//    const { filter, contacts } = this.state;
  //const filterContact = visiblContacts();
    return (
    <div>
        <h1>
          Phonebook
        </h1>
        <ContactForm onSubmit={addContact} />
        <TitleContacts>
          Contacts
        </TitleContacts>
        <AllContacts>
          All contacts: {contacts.length}
        </AllContacts>
        <Filter value={filter} onFilterChange={filterChange} />
          {contacts.length ? (
            <ContactList
              contacts={visiblContacts}
              onDelete={removeContact} />
          ) : (
            <TitleContacts>
              No contacts added yet
            </TitleContacts>
        )}
    </div>
  );
}

export default App;