import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function PokeCard() {

    const { id } = useParams();

    const [data, setData] = useState(
        {imgSrc: null, monName: '', genus: '', typeNames: '', description: '', latest: ''}
    );

    const URLs = [`https://pokeapi.co/api/v2/pokemon/${id}`, `https://pokeapi.co/api/v2/pokemon-species/${id}`]
    
    const getMon = async () => {
        try {
            const monData1 = await axios.get(URLs[0]);
            const monData2 = await axios.get(URLs[1]);

            const imgSrc = monData1.data.sprites.other['official-artwork'].front_default;
            const monName = monData2.data.name.charAt(0).toLocaleUpperCase() + monData2.data.name.slice(1);
            const {genus} = monData2.data.genera.find((e) => {return e.language.name === "en"});
            const {types}= monData1.data;
            const typeNames = types.map(e => {return e.type.name})
            const description = monData2.data.flavor_text_entries.find((e) => {return e.language.name === "en" && e.version.name === 'omega-ruby'}).flavor_text;
            const {latest} = monData1.data.cries;

            console.log(typeNames);

            setData({imgSrc, monName, genus, typeNames, description, latest});

        } catch (error) {

            console.log("ERROR:", error);

        }
    }

    useEffect(() => { getMon(); }, [])

    return(
        <div>
            <img src={data.imgSrc} alt={data.monName} />
            <div>{data.monName}</div>
            <div>{data.genus}</div>
            <div>{data.typeNames}</div>
            <div>{data.description}</div>
            <div>Battle Cry</div>
        </div>
    )
}

export default PokeCard