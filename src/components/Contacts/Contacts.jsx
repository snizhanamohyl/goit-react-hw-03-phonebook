import { Component } from "react";
import PropTypes from 'prop-types'; 
import css from './Contacts.module.css'

export default class Contacts extends Component {
  onClick = ({ target }) => {
    const { deleteContact } = this.props;

    const id = target.parentElement.getAttribute('data-key');
    deleteContact(id);
  }

  render() {
    const { contacts } = this.props;

    return <ul>
      {contacts.map((contact) => { return <li key={contact.id} data-key={contact.id } className={css.item}>{contact.name}: { contact.number} <button className={css.btn} onClick={this.onClick}>Delete</button></li>})}
    </ul>
  }
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
     number: PropTypes.string.isRequired,
  })),
  deleteContact: PropTypes.func.isRequired,
};