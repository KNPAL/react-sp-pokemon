function ApplicationHeader(props) {
    return (
        <div className='py-3'>
             <label className='px-3'>{props.title}</label>|
             <label className='px-3'>{props.description}</label>
        </div>
        );
}

export default ApplicationHeader; 