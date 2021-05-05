
import './detail.css';
import imgtest from './test.jpg';
import imgtestcopy from './test-copy.jpg';
import React , {useState,useEffect} from 'react';

import Axios from 'axios';
import {Link,useParams,useLocation,useHistory} from "react-router-dom";



function Detail() {

  const [nom, setNom] = useState("") ;
  const [email, setEmail] = useState("") ;
  const [contenucommentaire, setContenucommentaire] = useState("") ;

  const inputhandlernom  = (event) => {

    setNom(event.target.value);
 
}

const inputhandleremail  = (event) => {

  setEmail(event.target.value);

}

const inputhandlercontenucommentaire  = (event) => {

  setContenucommentaire(event.target.value);

}






const ajouter  = (event) => {
  event.preventDefault();

const new_commentaire ={
  contenucommentaire:contenucommentaire,
  nom:nom,
  email:email
 };

  //  #######################
Axios.post("http://localhost:8000/api/articles/" +para.id +"/commentaires" ,new_commentaire)
.then(response => {
   console.log(response);


})
.catch(error=> {
console.log(error);
});

} 







  const [article, setArticle] = useState({}) ;

  const para = useParams();
    console.log(para);
    const url= 'http://localhost:8000/api/articles/' +para.id  ;
    useEffect( () =>{
  
        Axios.get(url).then(response => {
          setArticle(response.data);
        console.log(response.data);
           });
  
    } ,[url]) ;



    return (
      <div className="Detail">
     

     <div style={{width:"65%",marginLeft:"auto",marginRight:"auto",marginTop:"50px",marginBottom:"50px",border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px"}}>

    <h2 style={{color:"gray",marginBottom:"20px"}}>{article.titre}</h2>
            <h6 style={{color:"gray",marginBottom:"20px"}}><small>Posté le : </small> <small style={{color:"black"}}> 3/12/2020</small></h6>

            <div className="container">
            <div className="row">
            <div className="col-12">
            <img  style={{width:"100%",height:"300px",border:"none"}} src={imgtest} alt="image"></img>
            </div>
            <div className="col-12"> 
         
            <p style={{marginTop:"60px",lineHeight:"2"}}> {article.contenu} </p>
           
            
            </div>

            </div>
            </div>

     </div>




     <div style={{width:"65%",marginLeft:"auto",marginRight:"auto",marginBottom:"50px",border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px",backgroundColor:"rgb(182, 212, 52)"}} >

    

     <div className="container">
  <div className="row"> 
 
    <div className="col-2"> <img style={{borderRadius:"50%",width:"100px",height:"100px",border:"none"}} src={imgtestcopy} alt="image"></img></div>
   
    <div className="col-10"><p>Maryem a publier : Merci pour l'information</p> </div>
  </div>
</div>

     </div>




     <div style={{width:"65%",marginLeft:"auto",marginRight:"auto",marginBottom:"50px",border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px",backgroundColor:"rgb(242,242,242)"}} >
     <h4 >Laissez un commentaire</h4>
     <form >
     <label style={{width:"100%",marginBottom:"20px"}} >commentaire : 
     < input style={{width:"100%",display:"block",marginBottom:"10px"}} onChange={inputhandlercontenucommentaire} type="text"   name="commentaire" placeholder="écrire votre commentaire" />
     </label>
     
     <label style={{width:"50%",marginBottom:"20px"}} >Nom :
     <input style={{width:"80%",padding:"10px",marginLeft:"10px"}} onChange={inputhandlernom}   type="text" name="nom" placeholder="écrire votre nom"/> 
     </label>
    
     <label style={{width:"50%",marginBottom:"20px"}}  >Email :
     <input style={{width:"80%",padding:"10px",marginLeft:"10px"}} onChange={inputhandleremail}  type="email" placeholder="écrire votre email"/>
     </label>
    
     <input className="inputsubmitform" onClick={ajouter} style={{border:"none",padding:"10px 15px",color:"white",backgroundColor:"rgb(182, 212, 52)",display:"block",marginRight:"auto",marginLeft:"auto"}} type="submit" value="Laissez un commentaire"/>
   </form>
     
     </div>
       
     

      </div>
    );
  }
  
  export default Detail;
  