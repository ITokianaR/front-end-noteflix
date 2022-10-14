import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"
import '../Resultat/resultat.css';
import './Details.css';

export default function Detail() {
    const {id} = useParams()
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/details/${id}`).then((res)=>{
            setData(res.data)
        })
    })

    return(
        <>
        
            <h1> Vous pouvez attribuez des notes à tous les élèves</h1>
            <div class='prem'>
            <h2> Module n°{id}</h2>
            {data.map((module)=>{
              return(
            <>
                <h3 className='hh3'> Code : {module.code} </h3>
                <h3 className='hh3'> Nom module : {module.nom_module} </h3>
                <h3 className='hh3'> Crédit : {module.coeff} </h3>
                <h3 className='hh3'> UE : {module.ue} </h3>
                <h3 className='hh3'> NIveau_id : {module.niveau_id} </h3>
            </>
            )
            })}
        </div>
        </>
    )
}