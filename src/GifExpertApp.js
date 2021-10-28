import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { Gifgrid } from './components/Gifgrid';

const App = () =>{
    
    //const categorias = ['Demon Slayer', 'Evangelion', 'Naruto']
    const [categorias, setCategorias]= useState(['Evangelion'])    
    //cconst handleadd = ()=>{
    //c    return setCategorias(['Boruto', ...categorias])
    //}
    
    return (
        <>
            <h2>Gif expert App</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr/>
            
            <ol>
                {
                    categorias.map(cateria =>(
                        <Gifgrid 
                        key={cateria}
                        category={cateria} />
                    ))
                }
            </ol>
        </>
    )


}


export default App;