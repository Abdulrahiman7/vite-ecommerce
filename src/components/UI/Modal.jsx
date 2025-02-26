import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.modal}>
          <button className={classes.closeButton} onClick={props.onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className={classes.content}>{props.children}</div>
        </div>,
        portalElement
      )}
    </>
  );
};

export default Modal;
