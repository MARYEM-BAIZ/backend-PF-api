
import './ajoutarticle.css'

import Axios , { post } from 'axios';
import {Link} from "react-router-dom";

import React , { Component } from 'react';


class Ajoutarticle extends Component{


  constructor(props){
    super(props);

    this.state ={
       titre:"",
       description:"",
       contenu:"",
       image: null,
       categorie_id:"",
       categories:[]

    }
    

   

}



 componentDidMount(){
  const url= 'http://localhost:8000/api/categories' ;
    Axios.get(url).then(response => {
     // console.log(response.data);
    this.setState({
      categories:response.data
    })
  });

}






inputhandlertitre  = (event) => {
  //console.log(event.target.value);
  this.setState({

      titre: event.target.value

     });
  
}




inputhandlerdescription  = (event) => {
  //console.log(event.target.value);
  this.setState({

      description: event.target.value

     });
  
}




inputhandlercontenu  = (event) => {
  //console.log(event.target.value);
  this.setState({

      contenu: event.target.value

     });
  
}





onChangeimage = event => {
  this.setState({ image: event.target.files[0] })
}












inputhandlercategorie_id  = (event) => {
 //console.log(event.target.options.selectedIndex);
   this.setState({

       categorie_id: event.target.options.selectedIndex

      });
  
}

// fileUpload(image){
//   const url = 'http://localhost:8000/api/fileupload';
//   const formData = {file: this.state.image}
//   return  post(url, formData)
//           .then(response => console.log(response))
// }




ajouter  = (event) => {
  event.preventDefault();

const url = "http://localhost:8000/api/categories/" + this.state.categorie_id + "/articles";
const article  ={ 
  titre: this.state.titre,
  description: this.state.description,
  contenu: this.state.contenu,
   image: this.state.image.name ,
  categorie_id: this.state.categorie_id
};





console.log(this.state.image);
console.log(this.state.titre);
console.log(this.state.description);
console.log(this.state.contenu);
console.log(this.state.categorie_id);

Axios.post(url ,article)
.then(response => {
   console.log(response);
   console.log(response.data);

})
.catch(error=> {
console.log(error);
});

}




  render() {

    let categories= this.state.categories.map( categorie => {
      
       return ( 
      <option   key={categorie.id} value={categorie.id} >{categorie.nom}</option>
      )
    });
    return (
        <div className="Ajoutarticle">
     
     <h4 className="classclass">Ajout d'un article</h4>
             <div   style={{border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px"}} >
            
           <form   >
     <label  >titre d'article :
     <input onChange={this.inputhandlertitre} style={{width:"80%"}}   type="text" name="titre" /> 
     </label>

     <label  >description d'article :
     <input onChange={this.inputhandlerdescription} style={{width:"80%"}}   type="text" name="description" /> 
     </label>

     <label  >contenu d'article :
     <input onChange={this.inputhandlercontenu} style={{width:"80%"}}   type="text" name="contenu" /> 
     </label>

     <label  >uploader une image :
     <input  style={{width:"80%"}}   type="file"  onChange={this.onChangeimage} name="image" /> 
     </label>

     <select onChange={this.inputhandlercategorie_id}  name="categorie_id">
     { categories}
    </select>
    
     <input className="inputsubmitform" onClick={this.ajouter} style={{border:"none",padding:"7px 15px",color:"white",backgroundColor:"rgb(182, 212, 52)",display:"block",marginRight:"auto",marginLeft:"auto"}} type="submit" value="ajouter"/>
   </form>

   </div>

        </div>
    );}
}




export default Ajoutarticle;
