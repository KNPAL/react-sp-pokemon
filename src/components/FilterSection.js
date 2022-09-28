import './FilterSection.css';

function FilterSection() {
    return (
        <div className="row m-0">
            <div className="col-md-6">
                <label className="filter-label">Search By</label>
                <input className="form-control fc-height control-bg-color" placeholder="Name or Number" />
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
        </div>);
}

export default FilterSection; 