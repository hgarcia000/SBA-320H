import axios from "axios";

import { useEffect, useState } from "react";
import PokeListItem from "./PokeListItem";
import { Link, useParams } from "react-router-dom";
import region from "../Region.js";


function PokeList() {
    const params = useParams();
    const id = params.id;

    const {name, limit, offset} = region(id)

    const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    const [data, setData] = useState([{
        name: "",
        url: ""
    }]);

    const getData = async () => {
        try {
            const listData = await axios.get(URL);

            const result = listData.data.results;

            console.log(limit, offset);

            setData(result);

        } catch (error) {

            console.log("ERROR:", error);

        }
    }

    useEffect(() => { getData(); }, []);

    const res = data.map(element => {
        return <PokeListItem key={data.indexOf(element) + 1} id={data.indexOf(element) + offset + 1} name={element.name} />
    });



    return (
        <>
        <Link to={'/'}>
        <p>Go Back</p>
        </Link>
        <h2>{name} Region</h2>
            <h1 >Select a Pokémon</h1>
            <div className="list-container">{res}</div>
        <Link to={'/'}>
        <p>Go Back</p>
        </Link>
        </>
    )
}

export default PokeList