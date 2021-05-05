
import './categoriearticles.css'
import imgtest from './test.jpg';
import React , {useState,useEffect} from 'react';

import Axios from 'axios';
import {Link,useParams,useLocation,useHistory} from "react-router-dom";




function Categoriearticles(){

    const [article, setArticle] = useState({}) ;

    const para = useParams();
      console.log(para);
    const url= 'http://localhost:8000/api/categories/' +para.id +"/articles" ;
    useEffect( () =>{
  
        Axios.get(url).then(response => {
          setArticle(response.data[0]);
        console.log(response.data[0]);
           });
  
    } ,[url]) ;

    console.log(article);

    
    
    return (
        <div className="Categoriearticles">
            <div  style={{width:"65%",marginLeft:"auto",marginRight:"auto",marginTop:"50px",marginBottom:"50px",border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px"}} >
            
    <h2 style={{color:"gray",marginBottom:"20px"}}>{article.titre}</h2>
            <h6 style={{color:"gray",marginBottom:"20px"}}><small>Posté le : </small> <small style={{color:"black"}}> 3/12/2020</small></h6>
            <div className="container">
            <div className="row">
            <div className="col-6">
            <img  style={{width:"100%",height:"300px",border:"none"}} src={imgtest} alt="image"></img>
            </div>
            <div className="col-6"> <p style={{lineHeight:"2"}}>{article.description}</p>
            <Link style={{color:"rgb(182, 212, 52)",padding:"7px 10px",border:"2px solid rgb(182, 212, 52)",backgroundColor:"white",textDecoration:"none"}} to={"/detail/" +article.id} >Continuer la lecture</Link>
            
            </div>

            </div>
            </div>


        </div>

      
        </div>
    )
}




export default Categoriearticles;
