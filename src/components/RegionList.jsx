import RegionListItem from "./RegionListItem";


function RegionList() {

    const regionData = [{
                        name:'Kanto',
                        range: '001 - 151',
                        limit: 151,
                        offset: 0
                    },
                    {
                        name:'Johto',
                        range: '152 - 251',
                        limit: 100,
                        offset: 151
                    },
                    {
                        name:'Hoenn',
                        range: '252 - 386',
                        limit: 135,
                        offset: 251
                    },
                    {
                        name:'Sinnoh',
                        range: '387 - 493',
                        limit: 107,
                        offset: 386
                    },
                    {
                        name:'Unova',
                        range: '494 - 649',
                        limit: 156,
                        offset: 493
                    },
                    {
                        name:'Kalos',
                        range: '650 - 721',
                        limit: 72,
                        offset: 649
                    }];

                    const regions = regionData.map(element => {
                        return <RegionListItem key={regionData.indexOf(element) + 1} id={regionData.indexOf(element) + 1} name={element.name} range={element.range} limit={element.limit} offset={element.offset}/>
                    })

    return (
        <>
            <h1>Select a Region</h1>
            {regions}
        </>
    )
}

export default RegionList