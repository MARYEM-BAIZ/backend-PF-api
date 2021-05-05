
import './changerproduit.css';

import React , {useState,useEffect} from 'react';

import Axios from 'axios';
import {Link,useParams,useLocation,useHistory} from "react-router-dom";





const Modifierproduit = ()  =>{

  // const [titre, setTitre] = useState("") ;
  // const [description, setDescription] = useState("") ;
  // const [contenu, setContenu] = useState("") ;
  // const [image, setImage] = useState("") ;
  const [article, setArticle] = useState({}) ;

  const para = useParams();
    console.log(para);
  const url= 'http://localhost:8000/api/articles/' +para.id ;
  useEffect( () =>{

      Axios.get(url).then(response => {
        setArticle(response.data);
      console.log(response.data);
         });

  } ,[url]) ;

    

    

    
//     const inputhandlertitre  = (event) => {

//          setTitre(event.target.value);
      
//     }

//     const inputhandlerdescription  = (event) => {

//         setDescription(event.target.value);
     
//    }

//    const inputhandlercontenu  = (event) => {

//     setContenu(event.target.value);
 
// }

// const inputhandlerimage  = (event) => {

//     setImage(event.target.value);
 
// }


const handlerinput  = (event) => {
    
  const name=event.target.name;
  const value=event.target.value;
    setArticle({
         ...article,[name]:value
    });

}
     


   const modifier  = (event) => {
        event.preventDefault();

    //   const new_article ={
    //       titre:titre,
    //       description:description,
    //       contenu:contenu,
    //       image:image
    //  };
      console.log(article);
        //  #######################
      Axios.put("http://localhost:8000/api/articles/" +para.id ,article)
    .then(response => {
         console.log(response);


    })
    .catch(error=> {
     console.log(error);
 });

     } 

  

    return (

      <div className="Modifierproduit">
     <h4 className="classclass">Modifier produit</h4>
<div   style={{border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px"}} >
            
            <form action=""  >
      <label  >Nouveu titre du produit :
      <input style={{width:"80%"}} onChange={handlerinput}   type="text" name="titre" value={article.titre} /> 
      </label>

      <label  >Nouveu description du produit :
      <input style={{width:"80%"}} onChange={handlerinput}   type="text" name="description" value={article.description} /> 
      </label>

      <label  >Nouveu contenu du produit :
      <input style={{width:"80%"}} onChange={handlerinput}   type="text" name="contenu" value={article.contenu} /> 
      </label>

      <label  >Nouveu image du produit :
      <input style={{width:"80%"}} onChange={handlerinput}   type="text" name="image" value={article.image} /> 
      </label>
     
      <input className="inputsubmitform" onClick={modifier} style={{border:"none",padding:"7px 15px",color:"white",backgroundColor:"rgb(182, 212, 52)",display:"block",marginRight:"auto",marginLeft:"auto"}} type="submit" value="modifier"/>
    </form>
 
    </div>

       </div>

    );
  }




export default Modifierproduit;
