import './App.css';

import {Route,Routes, useParams} from "react-router-dom";

import Home from './component/Home/Home';
import Resultat from './component/Resultat/Resultat';
import Login from './component/Login/Login';
import Etudiant from './component/Etudiant/Etudiant';
import Navbar from './component/Navbar/Navbar';
import Matiere from './component/Matiere/Matiere';
import New from './component/Matiere/New';
import Detail from './component/Matiere/Detail';
import Result from './component/Resultat/Result';
import EtudiantList from './component/Etudiant/EtudiantList';

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Login />}> </Route>
    </Routes>

    <Navbar/>

    <Routes>
      
      <Route path='/Home' element={<Home />}> </Route>
      <Route path='/Resultat' element={<Resultat />}></Route>
      <Route path='/Resultat/Result/:level/:id' element={<Result />}></Route>
      <Route path='/Etudiant/Etudiant/:id' element={<Etudiant />}></Route>
      <Route path='/Etudiant/EtudiantList' element={<EtudiantList />}></Route>
      <Route path='/Matiere' element={<Matiere />}></Route>
      <Route path='/Matiere/New' element={<New />}></Route>
      <Route path='/Matiere/Detail/:id' element={<Detail />}></Route>

    </Routes>

    </>
  );
}

export default App;
