import region from "../Region.js";
import RegionListItem from "./RegionListItem";


function RegionList() {

    const regionIndecies = ['0', '1', '2', '3', '4', '5', '6'];

    const regionListItems = regionIndecies.map(element => {
        return <RegionListItem key={regionIndecies.indexOf(element)} id={element} name={region(element).name} range={region(element).range} />
    })

    return (
        <>
            <h1>Select a Region</h1>
            {regionListItems}
        </>
    )
}

export default RegionList