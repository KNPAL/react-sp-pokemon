import './Card.css';

function Card(props) {
    return (
        <div className="card card-border align-items-center justify-content-center" >
            <img src={props.img} className="card-img-top img-size" alt="..." />
            <div className="card-body">
                <p className="text-center m-0 fw-bold">{props.name}</p>
                <p className="text-center m-0">{props.id}</p>
            </div>
        </div>

    )
}

export default Card;
