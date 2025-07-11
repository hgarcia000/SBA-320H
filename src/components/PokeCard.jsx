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
        { imgSrc: null, monName: '', genus: '', typeNames: [], height: '', weight: '', description: '', latest: null, stats: [{ base_stat: 0 }, { base_stat: 0 }, { base_stat: 0 }, { base_stat: 0 }, { base_stat: 0 }, { base_stat: 0 }] }
    );

    const URLs = [`https://pokeapi.co/api/v2/pokemon/${id}`, `https://pokeapi.co/api/v2/pokemon-species/${id}`]

    const getMon = async () => {
        try {
            const monData1 = await axios.get(URLs[0]);
            const monData2 = await axios.get(URLs[1]);

            const imgSrc = monData1.data.sprites.other['official-artwork'].front_default;
            const monName = monData2.data.name.charAt(0).toLocaleUpperCase() + monData2.data.name.slice(1);
            const { genus } = monData2.data.genera.find((e) => { return e.language.name === "en" });
            const { types, height, weight, stats } = monData1.data;
            const typeNames = types.map(e => { return e.type.name })
            const description = monData2.data.flavor_text_entries.find((e) => { return e.language.name === "en" && e.version.name === 'omega-ruby' }).flavor_text;
            const { latest } = monData1.data.cries;


            setData({ imgSrc, monName, genus, typeNames, description, latest, height, weight, stats });

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
    }, [id]);

    const types = data.typeNames.map(element => {
        return <div key={data.typeNames.indexOf(element) + 1} className="type" id={element}>{element.charAt(0).toLocaleUpperCase() + element.slice(1)}</div>
    })

    return (
        <>
            <div className="wrapper">
                {id !== '1' ? <Link to={`/pokemon/${Number(id) - 1}`}><p className="card-container">← Previous</p></Link> : null}
                <div className="card-container">
                    <img className="card-img" src={data.imgSrc} alt={data.monName} onClick={handleCry} />
                    <div className="card-content">
                        <p className="index">{'# ' + id}</p>
                        <h1>{data.monName}</h1>
                        <h3>{data.genus}</h3>
                        <div className="type-container">{types}</div>
                        <div><strong>Height: </strong>{data.height / 10} m</div>
                        <div><strong>Weight: </strong>{data.weight / 10} kg</div>
                        <div>{data.description}</div>
                        <div className="stats" >
                            <div><div>HP</div><div>Attack</div><div>Defense</div><div>Special Atk</div><div>Special Def</div><div>Speed</div></div>
                            <div><div className="stat-bar" style={{ width: `${data.stats[0].base_stat}px` }} >{data.stats[0].base_stat}</div>
                                <div className="stat-bar" style={{ width: `${data.stats[1].base_stat}px` }} >{data.stats[1].base_stat}</div>
                                <div className="stat-bar" style={{ width: `${data.stats[2].base_stat}px` }} >{data.stats[2].base_stat}</div>
                                <div className="stat-bar" style={{ width: `${data.stats[3].base_stat}px` }} >{data.stats[3].base_stat}</div>
                                <div className="stat-bar" style={{ width: `${data.stats[4].base_stat}px` }} >{data.stats[4].base_stat}</div>
                                <div className="stat-bar" style={{ width: `${data.stats[5].base_stat}px` }} >{data.stats[5].base_stat}</div></div>
                        </div>
                    </div>
                    <audio ref={audioRef} src={data.latest} />
                </div>
                {id !== '721' ? <Link to={`/pokemon/${Number(id) + 1}`}><p className="card-container">Next →</p></Link> : null}
            </div>
            <Link to={`/pokelist/${regionId(id)}`}><div>Go Back to Region's Pokémon List</div></Link>
            <Link to={`/pokelist/0`}><div>Go Back to All Pokémon List</div></Link>
        </>
    )
}

export default PokeCard