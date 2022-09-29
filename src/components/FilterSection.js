import './FilterSection.css';
import { useState } from 'react';

function FilterSection(props) {

    const [searchText, setSearchText] = useState('');

    const inputHandler = ($event) => {
        if ($event.keyCode === 13) {
            console.log(searchText)
            props.onFilter(searchText);
        }
    }

    return (
        <div className="row m-0">
            <div className="col-md-6">
                <label className="filter-label">Search By</label>
                <input value={searchText} onInput={e => setSearchText(e.target.value)} onKeyDown={inputHandler} className="form-control fc-height control-bg-color" placeholder="Name or Number" />
            </div>
            <div className="col-md-2">
                <label className="filter-label">Type</label>
                <input className="form-control fc-height control-bg-color" />
            </div>
            <div className="col-md-2">
                <label className="filter-label">Gender</label>
                <input className="form-control fc-height control-bg-color" />
            </div>
            <div className="col-md-2">
                <label className="filter-label">Stats</label>
                <input className="form-control fc-height control-bg-color" />
            </div>
        </div>
    );
}

export default FilterSection; 