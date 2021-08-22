import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/phonebook/contacts-actions';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
    <label className={styles.label}>
        Find contacts by name
        <input className={styles.input} type="text" value={value} onChange={onChange}/>
    </label>
);
Filter.propTypes = {
    value: PropTypes.string,
}

const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});
const mapStateToProps = state => ({
    value: state.filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);