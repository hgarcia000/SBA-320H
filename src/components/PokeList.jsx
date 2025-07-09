import axios from "axios";

import { useEffect, useState } from "react";


function PokeList() {

    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

    const [data, setData] = useState([{
        name: "",
        url: ""
    }]);

    const getData = async () => {
        try {
            const listData = await axios.get(URL);

            const result = listData.data.results;

            console.log(result);

            setData(result);

        } catch (error) {

            console.log("ERROR:", error);

        }
    }

    useEffect(() => { getData(); }, []);

    const res = data.map(element => {
        return <div key={data.indexOf(element) + 1} name={element.name}>{element.name.charAt(0).toLocaleUpperCase() + element.name.slice(1)}</div>
    });



    return (
        <div>{res}</div>
    )
}

export default PokeList