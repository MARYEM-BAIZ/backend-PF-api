
import './main.css'

import Contact from '../contact/contact';

import Categoriearticles from '../categoriearticles/categoriearticles';
import Detail from '../detail/detail';
import Admin from '../admin/admin';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  


function Main(){
    return (
        <div className="Main">
          
    <Switch>
    <Route path="/accueil" exact >
    
     </Route> 


    <Route path="/categoriearticles/:id" exact>
        <Categoriearticles />
    </Route>


    <Route path="/contact" exact>
        <Contact />
    </Route>

    <Route path="/detail" exact>
        <Detail />
    </Route>

    <Route path="/admin" exact>
        <Admin />
    </Route>

    <Route path="/detail/:id" exact>
        <Detail />
    </Route>

    </Switch>
        </div>
    )
}




export default Main;
