import React from 'react';
import axios from 'axios';

import {useState, useEffect} from 'react';

import './EtudiantList.css'; 
import {Link} from 'react-router-dom';

export default function EtudiantList() {
    const [data, setData] = useState ([]);

    useEffect (() => {
        axios.get(`http://127.0.0.1:8000/api/liste`).then((res)=>{
          setData(res.data) 
          console.log(res)
        })
    },[]);

    return(
        <div className='scrollable-div'>
            <h1> Voici la liste des étudiants à l'ESTI </h1>
            <ul>
            {data.map((etudiant) => {
                return(
                <li èkey={etudiant.id}> <div className="etudiant"> <Link to ={`/Etudiant/Etudiant/${etudiant.id}`} class='link'> {etudiant.nom} {etudiant.prenom} </Link> </div> </li>
                )
            })}
            </ul>
            
        </div>)
  }