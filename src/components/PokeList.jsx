import axios from "axios";

import { useEffect, useState } from "react";
import PokeListItem from "./PokeListItem";


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
        return <PokeListItem key={data.indexOf(element) + 1} id={data.indexOf(element) + 1} name={element.name} />
    });



    return (
        <>
            <h1 >Select a Pokémon</h1>
            <div className="list-container">{res}</div>
        </>
    )
}

export default PokeList