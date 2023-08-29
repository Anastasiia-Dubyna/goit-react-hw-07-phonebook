import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { fetchContact } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <section className={css.section}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      {isLoading && <p className={css.text}>Loading...</p>}
      <h2 className={css.secondTitle}>Contacts</h2>
      <Filter />
      {error ? <p className={css.text}>{error}</p> : <ContactList />}
    </section>
  );
};
