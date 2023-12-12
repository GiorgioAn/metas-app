import PropTypes from 'prop-types';
function Modal({ children }) {
    return (
        <div className="flex items-center fixed inset-0 bg-gray-500 bg-opacity-75">
            <div className="mx-auto">{children}</div>
        </div>
    );
}

export default Modal;

Modal.propTypes = {
    children: PropTypes.node, // Validación para la prop 'children'
  };