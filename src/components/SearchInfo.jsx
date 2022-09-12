import { useParams } from "react-router";
import React, {useState, useEffect} from "react";
import axios from "axios";

const SearchInfo = () => {
    const{ search, id } = useParams();
    const[ info, setInfo ] = useState({})

    

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${search}/${id}`)
            .then(response => {
                setInfo(response.data)
            })
            .catch(err => {
                console.log("These aren't the droids you're looking for.", err)
            })
    },[id, search])




    return(
        <div>
            {
                search === 'people' ?
                <>
                <h1>{info.name}</h1>
                <p>Height: {info.height} cm</p>
                <p>Mass: {info.mass} kg</p>
                <p>Hair Color: {info.hair_color}</p>
                <p>Skin Color: {info.skin_color}</p>
                </> : search === 'planets' ?
                <>
                <h1>{info.name}</h1>
                <p>Climate: {info.climate}</p>
                <p>Terrain: {info.terrain}</p>
                <p>Surface Water: {info.surface_water}</p>
                <p>Population: {info.population}</p>
                </> : null
            }
        </div>
    )
}

export default SearchInfo;