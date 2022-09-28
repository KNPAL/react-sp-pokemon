import './ApplicationHeader.css';

function ApplicationHeader(props) {
    return (
        <div className='py-3'>
             <label className='px-3 col-xs-12 title'>{props.title}</label>
             <div className='vr d-none d-sm-inline-block'></div>
             <hr className='hr d-block d-sm-none'/>
             <label className='px-3 description'>{props.description}</label>
        </div>
        );
}

export default ApplicationHeader; 