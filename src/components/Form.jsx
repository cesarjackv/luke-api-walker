import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();
    const[search, setSearch] = useState("people")
    const[id, setID] = useState("")

    const SearchSubmit = (e) => {
        e.preventDefault()
        navigate(`/${search}/${id}`)
    }



    return(
        <div>
            <form onSubmit={(e) => SearchSubmit(e)}>
                <span>
                    <label>Search for:  </label>
                    <select onChange={(e) => {setSearch(e.target.value)}}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>

                    <label>   ID:  </label>
                    <input type="number" onChange={(e) => {setID(e.target.value)}}/>

                    <input type="submit" value="Search"/>
                </span>
            </form>
        </div>
    )
}

export default Form;