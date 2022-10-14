import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import './Etudiant.css';
import {Link, useParams} from 'react-router-dom';

export default function Etudiant() {
  const{id} = useParams()
  const [data, setData] = useState ([]);

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('SamplePDF.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'SamplePDF.pdf';
            alink.click();
        })
    })
  };

  useEffect (() => {
    axios.get(`http://127.0.0.1:8000/api/note/${id}`, {id}).then((res)=>{
      setData(res.data) 
      console.log(res)
    })
  },[]);
  
  return (
    <div className="scrollable-div">
    <h1> Les notes de l'étudiant {id}: </h1>
    {data.map((note)=>{
      return(
        <div>
        <h1>
          {note.nom} {note.prenom}
        </h1>
        <table>
          <thead>
          <tr>
            <th className='th3'>Code</th>
            <th className='th3'>Matière</th>
            <th className='th3'>Coeff</th>
            <th className='th3'>Note</th>
            <th className='th3'>Note pondérée</th>
          </tr>
        </thead>
        <tbody>
          {note.notes.map((notes)=>{
            return(
            <tr  key={notes.id}>
              <td> {notes.module.code} </td>
              <td> {notes.module.nom_module} </td>
              <td> {notes.module.coeff} </td>
              <td> {notes.note} </td>
              <td> {notes.module.coeff*notes.note} </td>
            </tr>)
          })}
          <td>
          <button onClick={onButtonClick} className='butn'> Export to pdf</button>  
          <button className='butn'> Modifier</button>
          </td>       
        </tbody>
        
    </table>
    </div>)
  })}
    </div>
  )
}
