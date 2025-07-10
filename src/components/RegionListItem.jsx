import { Link } from "react-router-dom";


function RegionListItem({ id, name, range }) {

    return (
        <Link to={`/pokelist/${id}`}>
            <div className="list-item"> {name} <span className="index">{range}</span> </div>
        </Link>
    );
}

export default RegionListItem;