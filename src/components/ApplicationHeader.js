import './ApplicationHeader.css';

function ApplicationHeader(props) {
    return (
        <div className='py-3'>
             <label className='px-3 title'>{props.title}</label>
             <div className='vr'></div>
             <label className='px-3 description'>{props.description}</label>
        </div>
        );
}

export default ApplicationHeader; 