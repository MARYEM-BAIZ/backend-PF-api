
import './admin.css'
// import imgtest from './test.jpg';
import Ajoutcategorie from  '../ajoutcategorie/ajoutcategorie';
import Ajoutarticle from  '../ajoutarticle/ajoutarticle';
import Listecategories from  '../listecategories/listecategories';
import Listeproduits from  '../listeproduits/listeproduits';
import Listeutilisateurs from  '../listeutilisateurs/listeutilisateurs';
import Messagescontact  from  '../messagescontact/messagescontact';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";




function Admin(){
    return (
        <div className="Admin">
        <Router>  
       <div style={{margin:"50px 0"}} className="container">
  <div className="row">
    <div className="col-4">

    <div className="container">
  <div className="row">
    <div style={{borderBottom:"1px solid gray",backgroundColor:"rgb(182, 212, 52)",padding:"15px 0"}} className="col-12"> <Link  style={{color:"white",textDecoration:"none" }} to="/ajoutcategorie" >Ajouter categorie</Link></div>
    <div style={{borderBottom:"1px solid gray",backgroundColor:"rgb(182, 212, 52)",padding:"15px 0"}} className="col-12"><Link  style={{color:"white",textDecoration:"none"}} to="/ajoutarticle" >Ajouter article</Link></div>
    <div style={{borderBottom:"1px solid gray",backgroundColor:"rgb(182, 212, 52)",padding:"15px 0"}} className="col-12"><Link  style={{color:"white",textDecoration:"none"}} to="/listecategories" >Liste des categories</Link></div>
    <div style={{borderBottom:"1px solid gray",backgroundColor:"rgb(182, 212, 52)",padding:"15px 0"}} className="col-12"><Link  style={{color:"white",textDecoration:"none"}} to="/listeproduits" >Liste des produits</Link></div>
    <div style={{borderBottom:"1px solid gray",backgroundColor:"rgb(182, 212, 52)",padding:"15px 0"}} className="col-12"><Link  style={{color:"white",textDecoration:"none"}} to="/listeutilisateurs" >Liste utilisateurs</Link></div>
    <div style={{backgroundColor:"rgb(182, 212, 52)",padding:"15px 0"}} className="col-12"><Link  style={{color:"white",textDecoration:"none"}} to="/messagescontact" >Messages contact</Link></div>
  </div>
</div>

    </div>






    <div className="col-8">

    
    <Switch>
    <Route path="/listeproduits" exact >
    <Listeproduits />
     </Route> 

    <Route path="/listecategories">
    <Listecategories />
    </Route>

    <Route path="/listeutilisateurs">
    <Listeutilisateurs />
    </Route>

    <Route path="/messagescontact">
    <Messagescontact />
    </Route>

    <Route path="/ajoutcategorie">
    <Ajoutcategorie />
    </Route>

    <Route path="/ajoutarticle">
    <Ajoutarticle />
    </Route>


    

    </Switch>
  
    </div>
  </div>
</div>

</Router>
        </div>
    )
}




export default Admin;
