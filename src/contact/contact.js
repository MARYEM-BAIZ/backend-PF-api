
import './contact.css';

import Axios from 'axios';
import {Link} from "react-router-dom";

import React , { Component } from 'react';

class Contact extends Component{

    constructor(props){
        super(props);
    
        this.state ={
           message:"",
           email:"",
           sujet:""
    
        }
    
    }

    inputhandlersujet  = (event) => {
        //console.log(event.target.value);
          this.setState({
       
              sujet: event.target.value
       
             });
         
       }


       inputhandlermessage  = (event) => {
        //console.log(event.target.value);
          this.setState({
       
              message: event.target.value
       
             });
         
       }



       inputhandleremail  = (event) => {
        //console.log(event.target.value);
          this.setState({
       
              email: event.target.value
       
             });
         
       }



       ajouter  = (event) => {
        event.preventDefault();
      
      const url = "http://localhost:8000/api/messagescontact" ;
      const contact  ={ 
        message: this.state.message,
        email: this.state.email,
        sujet: this.state.sujet
      };
      
      
      Axios.post(url ,contact)
      .then(response => {
         console.log(response);
      
      
      })
      .catch(error=> {
      console.log(error);
      });
      
      }



    


    render(){
    return (
        <div  className="Contact">
            <div   style={{width:"65%",marginLeft:"auto",marginRight:"auto",marginTop:"50px",marginBottom:"50px",border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px"}} >
            <form style={{display:"flex",flexDirection:"column"}} action="">
  <input onChange={this.inputhandlermessage} className="inputformcontact" style={{width:"65%",marginLeft:"auto",marginRight:"auto",border:"1px solid gray",borderRadius:"100px",textAlign:"center",color:"gray",marginTop:"30px",padding:"10px 0"}} type="text" name="message" placeholder="Message"></input>
  <input onChange={this.inputhandleremail} className="inputformcontact" style={{width:"65%",marginLeft:"auto",marginRight:"auto",border:"1px solid gray",borderRadius:"100px",textAlign:"center",color:"gray",marginTop:"30px",padding:"10px 0"}} type="email" name="email" placeholder="Email"></input>
  <input onChange={this.inputhandlersujet} className="inputformcontact" style={{width:"65%",marginLeft:"auto",marginRight:"auto",border:"1px solid gray",borderRadius:"100px",textAlign:"center",color:"gray",marginTop:"30px",padding:"10px 0"}} type="text" name="sujet" placeholder="Sujet"></input>
  <input onClick={this.ajouter} className="inputformcontact" style={{width:"65%",marginLeft:"auto",marginRight:"auto",color:"rgb(182, 212, 52)",border:"1px solid white",borderRadius:"100px",backgroundColor:"rgb(51,51,51)",marginTop:"30px",marginBottom:"50px",padding:"10px 0"}} type="submit"></input>
</form>
</div>
        </div>
    )}
}




export default Contact;
