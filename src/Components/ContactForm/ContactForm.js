// import React, { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

export default function ContactForm({ onAddContact }) {
    const [name, setName] = useLocalStorage('name', '');
    const [number, setNumber] = useLocalStorage('number', '');  

    const handleChange = event => {
        const { name, value } = event.target;
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

    const handleSubmit = event => {
        event.preventDefault();
        onAddContact(name, number);
        setName('');
        setNumber('');
    }

    return(
        <form className={styles.form} >
            <label className={styles.label}>Name: 
                <input type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п." 
                className={styles.input}
                value={name}
                onChange={handleChange}
                required />
            </label>
            <label className={styles.label}>Number: 
                <input type="tel" name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +" 
                className={styles.input} value={number} onChange={handleChange} required />
            </label>
            <button type="button" 
            className={styles.btn} onClick={handleSubmit}>
                Add contact
            </button>
        </form>
    )
}
ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
  };
