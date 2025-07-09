

function RegionListItem({ id, name, range, limit, offset }) {

    return (
        <div className="list-item"> {name} <span className="index">{range}</span> </div>
    );
}

export default RegionListItem;