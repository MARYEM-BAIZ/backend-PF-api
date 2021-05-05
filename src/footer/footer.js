
import './footer.css';
import React , {useState,useEffect} from 'react';

import Axios from 'axios';
import {Link,useParams,useLocation,useHistory} from "react-router-dom";



function Footer() {


  const [name, setName] = useState("") ;
  const [email, setEmail] = useState("") ;
  const [password, setPassword] = useState("") ;


 const inputhandlername  = (event) => {

  setName(event.target.value);
}

const inputhandleremail  = (event) => {

  setEmail(event.target.value);
}

const inputhandlerpassword  = (event) => {

  setPassword(event.target.value);
}


  const ajouter  = (event) => {
    event.preventDefault();

    const new_user ={
      name:name,
      email:email,
      password:password

     };
  console.log(new_user);
  Axios.post("http://localhost:8000/api/users",new_user)
.then(response => {
     console.log(response);


})
.catch(error=> {
 console.log(error);
});

 } 

  return (
    <div className="Footer">
       <div className="div1footer">
       <form action="" method="post">
       <input  onChange={inputhandlername} style={{border:"none", borderRadius:"100px",padding:"10px", textAlign:"center"}} type="text" name="name" placeholder="écrire votre nom" />
       <input  onChange={inputhandleremail} style={{border:"none", borderRadius:"100px",padding:"10px", textAlign:"center"}} type="text" name="email" placeholder="écrire votre email" />
       <input  onChange={inputhandlerpassword} style={{border:"none", borderRadius:"100px",padding:"10px", textAlign:"center"}} type="text" name="password" placeholder="écrire un mot de passe" />
       <input className="style" onClick={ajouter} style={{border:"none", borderRadius:"100px",padding:"10px", textAlign:"center", color:"white" ,backgroundColor:"rgb(51,51,51)"}} type="submit" name="" value="s'inscrire" />
       </form>
     </div>

     <div className="div2footer">
     <div>
     <p className="style" style={{color:"white"}}>SUIVEZ-NOUS</p>
     <div>
     <i style={{color:"white",marginRight:"5px",borderRadius:"50%",border:"2px solid gray",padding:"10px"}} class="fa fa-facebook" aria-hidden="true"></i>
     <i style={{color:"white",marginRight:"5px",borderRadius:"50%",border:"2px solid gray",padding:"10px"}} class="fa fa-instagram" aria-hidden="true"></i>
     <i style={{color:"white",borderRadius:"50%",border:"2px solid gray",padding:"10px"}} class="fa fa-linkedin-square" aria-hidden="true"></i>
     </div>
     </div>

     
     <div>
     <p style={{color:"gray",marginTop:"50px"}}>Copyright 2020 ©<strong>Vera Cosmétique</strong></p>
     </div>


     </div>


    </div>
  );
}

export default Footer;
