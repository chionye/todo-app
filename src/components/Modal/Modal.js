/** @format */

import "./Modal.css";

export const Modal = ({ children, show, close }) => {
  return show === true ? (
    <div
      className='modal'
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}>
      <div
        className='modal-content'
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}>
        {children}
      </div>
    </div>
  ) : null;
};
