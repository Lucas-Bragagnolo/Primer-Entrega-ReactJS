
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function CartWidget() {
  return (
    <button className='btn btn-outline-secondary'>
      <FontAwesomeIcon icon={faCartShopping} /> <span className='badge bg-danger'>0</span>
    </button>
  );
};