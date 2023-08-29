import PropTypes from 'prop-types';
import { ContactStyle, ButtonStyle } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export function Contacts({ contact }) {
  const { name, number, id } = contact;
  const dispatch = useDispatch();
  return (
    <ContactStyle>
      <p>
        {name} : {number}
      </p>
      <ButtonStyle type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </ButtonStyle>
    </ContactStyle>
  );
}

Contacts.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
};
