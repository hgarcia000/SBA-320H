import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../Types.css';


function PokeCard() {

    const { id } = useParams();

    const regionId = (id) => {
        if (Number(id) <= 151) {
            return 1;
        }
        if (Number(id) <= 251) {
            return 2;
        }
        if (Number(id) <= 386) {
            return 3;
        }
        if (Number(id) <= 493) {
            return 4;
        }
        if (Number(id) <= 649) {
            return 5;
        }
        
        return 6;

    }

    const audioRef = useRef();

    const [data, setData] = useState(
        {imgSrc: null, monName: '', genus: '', typeNames: [], description: '', latest: null}
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

            console.log(latest);

            setData({imgSrc, monName, genus, typeNames, description, latest});

        } catch (error) {

            console.log("ERROR:", error);

        }
    }

    const handleCry = () => {
        
        audioRef.current.volume = 0.12;
        audioRef.current.play()

    }

    useEffect(() => { 
        getMon();
        audioRef.current.volume = 0.12;
        audioRef.current.play()
     }, []);

    const types = data.typeNames.map(element => {
        return <div key={data.typeNames.indexOf(element) + 1 } className="type" id={element}>{element.charAt(0).toLocaleUpperCase() + element.slice(1)}</div>
    })

    return(
        <>
        <div className="card-container">
            <img className="card-img" src={data.imgSrc} alt={data.monName} onClick={handleCry}/>
            <div className="card-content">
            <h1>{data.monName}</h1>
            <h3>{data.genus}</h3>
            <div className="type-container">{types}</div>
            <div>{data.description}</div>
            </div>
            <audio ref={audioRef} src={data.latest} />
        </div>
        <Link to={`/pokelist/${regionId(id)}`}><div>Go Back to Region's Pokémon List</div></Link>
        <Link to={`/pokelist/0`}><div>Go Back to All Pokémon List</div></Link>
        </>
    )
}

export default PokeCard