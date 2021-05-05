
import './header.css';
import imglogo from './biovera.PNG';
import React , {  Component } from 'react';
import Axios from 'axios';


import Admin from '../admin/admin';
import Contact from '../contact/contact';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class  Header extends  Component {

   constructor(props){
    super(props);
    this.state={
       categories:[]
    };

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

  render() {
    
    let categories= this.state.categories.map( categorie => {
      // to={"/" + categorie.id}
      return ( <Link key={categorie.id} className="categorie" style={{color:"gray" , textDecoration:"none", marginTop:"20px"}} to={"/categoriearticles/" + categorie.id} >{categorie.nom}</Link>)
    });
    
  return (
    <div className="Header">
    
    <div className="container">
    <div className="row">
    <div className="col-8">
    
    <div className="div1header">
    <Link to="/accueil" ><img src={imglogo} alt="image"></img></Link>

     { categories}
    {/* <Link className="categorie" style={{color:"gray" , textDecoration:"none", marginTop:"20px"}} to="/cheuveux" >cheuveux</Link> */}

    {/* <Link className="categorie" style={{color:"gray" , textDecoration:"none", marginTop:"20px"}} to="/visage" >visage</Link>
    <Link className="categorie" style={{color:"gray" , textDecoration:"none", marginTop:"20px"}} to="/santé" >santé</Link> */}
    </div>
  
    </div>

    <div className="col-2"></div>
    <div className="col-2"><i style={{color:"gray",marginRight:"5px", marginTop:"40px"}} class="fa fa-facebook" aria-hidden="true"></i>
    <i style={{color:"gray",marginRight:"5px", marginTop:"40px"}} class="fa fa-instagram" aria-hidden="true"></i>
    <i style={{color:"gray", marginTop:"40px"}} class="fa fa-linkedin-square" aria-hidden="true"></i>
    </div>
    
    </div>
    </div>

    <div className="div2header">
    
    <Link className="contact" style={{color:"white",textDecoration:"none"}} to="/contact" ><i class="fa fa-envelope-o mr-3" aria-hidden="true"></i>Contact</Link>
    <Link className="contact" style={{color:"white",textDecoration:"none",marginLeft:"500px"}} to="/admin" >admin</Link>
    </div>
    </div>
  )};
}


export default Header;


