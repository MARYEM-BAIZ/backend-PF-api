
import './changercategorie.css';

import React , {useState,useEffect} from 'react';

import Axios from 'axios';
import {Link,useParams,useLocation,useHistory} from "react-router-dom";





const Modifiercategorie = ()  =>{

  const [nom, setNom] = useState("") ;
  const [categorie, setCategorie] = useState({}) ;

  const para = useParams();
    console.log(para);
  const url= 'http://localhost:8000/api/categories/' +para.id ;
  useEffect( () =>{

      Axios.get(url).then(response => {
        setCategorie(response.data);
     // console.log(response.data);
         });

  } ,[url]) ;

    

    

    
    const inputhandler  = (event) => {

         setNom(event.target.value);
      
    }


   const modifier  = (event) => {
        event.preventDefault();

      const new_categorie ={nom:nom };
      
        //  #######################
      Axios.put("http://localhost:8000/api/categories/" +para.id ,new_categorie)
    .then(response => {
         console.log(response);


    })
    .catch(error=> {
     console.log(error);
 });

     } 

   console.log(categorie);

    return (

      <div className="Modifiercategorie">
     <h4 className="classclass">Modifier le nom du categorie</h4>
<div   style={{border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px"}} >
            
            <form action=""  >
      <label  >Nouveu nom du catégorie :
      <input style={{width:"80%"}} onChange={inputhandler}   type="text" name="nom" value={categorie.nom} /> 
      </label>
     
      <input className="inputsubmitform" onClick={modifier} style={{border:"none",padding:"7px 15px",color:"white",backgroundColor:"rgb(182, 212, 52)",display:"block",marginRight:"auto",marginLeft:"auto"}} type="submit" value="modifier"/>
    </form>
 
    </div>

       </div>

    );
  }




export default Modifiercategorie;
