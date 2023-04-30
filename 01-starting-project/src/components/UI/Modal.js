import React from 'react'
import classes from './Modal.module.css'
import { createPortal } from 'react-dom'

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClick} />
}

const ModalOverlay = props => {
  return <div className={classes.modal}>{props.children}</div>
}

const Modal = props => {
  return (
    <>
      {createPortal(
        <Backdrop onClick={props.onHideCart} />,
        document.getElementById(`overlay`)
      )}

      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById(`overlay`)
      )}
    </>
  )
}

export default Modal
