import { useState, useEffect } from "react";
import { getgif } from "../helpers/getGif";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => { 
        getgif(category)
        .then(imgs =>{
            setState({
                data: imgs,
                loading: false
            })
        }) 
    }, [category])


    return state; 
}
