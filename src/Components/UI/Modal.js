import React from "react";
import Classes from './Modal.module.css';
import ReactDOM from "react-dom";

const Backdrop = props => {
    return <div className={Classes.backdrop}></div>
}

const ModalOverlay = props => {
    return (
        <div className={Classes.modal}>
            <div className={Classes.content}>{props.children}</div>
        </div>
    )
}

const Modal = (props) => {
    const portalElement = document.getElementById('overlays')
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />,portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , portalElement)}
        </React.Fragment>
    )
}

export default Modal;