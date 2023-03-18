import { Component } from "react";
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import css from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount = () => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({ contacts: savedContacts });
  }
  
  addContact = (newContact) => {
    this.setState((prevState) => {
      const newContacts = [...prevState.contacts, newContact];

      localStorage.setItem("contacts", JSON.stringify(newContacts));

      return {contacts: newContacts}
    })
  }

  deleteContact = (id) => {
    this.setState((prevState) => {
      const updatedContacts = prevState.contacts.filter(contact => contact.id !== id);

      localStorage.setItem("contacts", JSON.stringify(updatedContacts));

      return { contacts:  updatedContacts}; 
    })
  }

  updateFilter = (value) => {
    this.setState({filter: value})
  }
    
  getFilterValue = () => {
    return this.state.filter;
  }

  filterContacts = () => {  
    const { contacts, filter } = this.state; 
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return filter === "" ?  contacts : filteredContacts;
  }

  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form contacts={this.state.contacts} addContact={this.addContact}  />
        {this.state.contacts.length !== 0 && <div><h2>Contacts</h2>
          <Filter getFilterValue={this.getFilterValue} updateFilter={ this.updateFilter} />
          <Contacts deleteContact={this.deleteContact} contacts={this.filterContacts()} /></div>}
      </div>
    )
  }
}
