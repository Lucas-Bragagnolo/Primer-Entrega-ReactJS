
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function CartWidget() {
  return (
    <button className='btn btn-primary'>
      <FontAwesomeIcon icon={faCartShopping} /> 2
    </button>
  );
};