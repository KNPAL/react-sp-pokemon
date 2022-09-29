import './Card.css';
import ModalBox from './ModalBox';
import { useState } from 'react';
function Card(props) {

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)} className="card card-border align-items-center justify-content-center" >
                <img src={props.img} className="card-img-top img-size" alt="..." />
                <div className="card-body">
                    <p className="text-center m-0 fw-bold">{props.name}</p>
                    <p className="text-center m-0">{props.id}</p>
                </div>
            </div>
            <ModalBox name={props.name} id={props.id} show={modalShow} onHide={() => setModalShow(false)} />
        </>

    )
}

export default Card;
