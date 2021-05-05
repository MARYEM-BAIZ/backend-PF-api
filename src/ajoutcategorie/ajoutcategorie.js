
import './ajoutcategorie.css'

import Axios from 'axios';
import {Link, Route} from "react-router-dom";
import React , { Component } from 'react';


class Ajoutcategorie extends Component {

  constructor(props){
    super(props);

    this.state ={
       nom:""

    }

}



inputhandler  = (event) => {

  this.setState({

      nom: event.target.value

     });
  
}



      ajouter  = (event) => {
        event.preventDefault();

      const new_categorie ={nom:this.state.nom };
      
      Axios.post("http://localhost:8000/api/categories",new_categorie)
    .then(response => {
         console.log(response);


    })
    .catch(error=> {
     console.log(error);
 });

     } 




  render() {





    return (
        <div className="Ajoutcategorie">

<h4 className="classclass">Ajout du catégorie</h4>
             <div   style={{border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px"}} >
            
           <form action=""  >
     <label  >Nom du catégorie :
     <input style={{width:"80%"}} onChange={this.inputhandler}   type="text" name="nom" /> 
     </label>
    
     <input className="inputsubmitform" onClick={this.ajouter} style={{border:"none",padding:"7px 15px",color:"white",backgroundColor:"rgb(182, 212, 52)",display:"block",marginRight:"auto",marginLeft:"auto"}} type="submit" value="ajouter"/>
   </form>

   </div>
        </div>
    )};
}




export default Ajoutcategorie;
