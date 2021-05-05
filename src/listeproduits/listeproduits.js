
import './listeproduits.css'
import imgtest from './test.jpg';
import React , {  Component } from 'react';
import Axios from 'axios';
import Modifierproduit from '../changerproduit/changerproduit';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




class Listeproduits extends Component{

  constructor(props){
    super(props);
    this.state={
       articles:[]
    };

   }


  
   componentDidMount(){
    const url= 'http://localhost:8000/api/articles' ;
      Axios.get(url).then(response => {
       // console.log(response.data);
      this.setState({
        articles:response.data
      })
    });

  }



  supprimer = (id) => {


    Axios.delete("http://localhost:8000/api/articles/" +id )
    .then(response => {
         console.log(response);

    })
    .catch(error=> {
     console.log(error);
 });


  }

  render() {
    return (
        <div className="Listeproduits">
            <Router>
            <h4 className="classclass">Liste des articles</h4>
             <div   style={{border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px"}} >
         <div className="container">
        

        <div className="row">
    <div className="col-1"><strong>id</strong></div>
    <div className="col-1"><strong>titre</strong></div>
    <div className="col-2"><strong>description</strong></div>
    <div className="col-2"><strong>contenu</strong></div>
    <div className="col-2"><strong>image</strong></div>
    <div className="col-2"><strong>modifier</strong></div>
    <div className="col-2"><strong>supprimer</strong></div>
  </div>
  {    this.state.articles.map( (article) => {  
          return(
            <div>
  <div className="row">
          <div className="col-1">{article.id}</div>
    <div className="col-1">{article.titre}</div>
    <div className="col-2">{article.description}</div>
    <div className="col-2">{article.contenu}</div>
    <div className="col-2"> <img  style={{width:"100%",height:"100px",border:"none"}} src={imgtest} alt="image"></img></div>
    <div className="col-2"><Link key={article.id}  to={"/changerarticle/" + article.id} >modifier</Link></div>
    <div  classN="col-2"><button onClick={ () =>{ this.supprimer(article.id)}} className="btn btn-danger">supprimer</button></div>
  </div>

  </div>
          );
        }) }


</div>
</div>



<Switch>
   
<Route path="/changerarticle/:id"  >
    <Modifierproduit />
    </Route>
    </Switch>
</Router>
        </div>
    );}
}




export default Listeproduits;
