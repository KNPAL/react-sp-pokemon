import './Card.css';
import ModalBox from './ModalBox';
import { useState } from 'react';
function Card(props) {

    const [modalShow, setModalShow] = useState(false);

    const onCardClickHandler = () =>{
        setModalShow(true)
    }

    const onCloseClickHandler = ()=>{
        setModalShow(false);
    }

    return (
        <>
            <div onClick={onCardClickHandler} className="card card-border align-items-center justify-content-center" >
                <img src={props.img} className="card-img-top img-size" alt="..." />
                <div className="card-body">
                    <p className="text-center m-0 fw-bold">{props.name}</p>
                    <p className="text-center m-0">{props.id}</p>
                </div>
            </div>
           {modalShow && <ModalBox name={props.name} id={props.id} onModalClose={onCloseClickHandler}   />} 
        </>

    )
}

export default Card;
