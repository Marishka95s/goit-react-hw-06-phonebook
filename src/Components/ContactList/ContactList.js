import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFiltredContacts } from '../../redux/phonebook/contacts-selectors';
import contactsActions from '../../redux/phonebook/contacts-actions';
import styles from './ContactList.module.css';

export default function ContactList() { 
    const contacts = useSelector(getFiltredContacts);
    const dispatch = useDispatch();

    return(
    <ul className={styles.list}>
        {contacts.map( ({ id, name, number }) => (
            <li key={id} className={styles.item}>
                <p className={styles.name}>{name}: <span>{number}</span></p>
                <button type="button" className={styles.btn} onClick={() => dispatch(contactsActions.deleteContact(id))}>Delete</button>
            </li>
        ) )
        }
    </ul>
)};
ContactList.propTypes = {
    id: PropTypes.any,
    name: PropTypes.string,
    number: PropTypes.string,
}


