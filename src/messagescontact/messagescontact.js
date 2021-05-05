
import './messagescontact.css'

import React , {  Component } from 'react';
import Axios from 'axios';
import {Link} from "react-router-dom";


class Messagescontact extends Component{


  constructor(props){
    super(props);
    this.state={
       messagescontact:[]
    };

   }


  
   componentDidMount(){
    const url= 'http://localhost:8000/api/messagescontact' ;
      Axios.get(url).then(response => {
        console.log(response.data);
      this.setState({
        messagescontact:response.data
      })
    });

  }


  supprimer = (id) => {


    Axios.delete("http://localhost:8000/api/messagescontact/" +id )
    .then(response => {
         console.log(response);

    })
    .catch(error=> {
     console.log(error);
 });


  }

  render() {
    return (
        <div className="Messagescontact">
       <h4 className="classclass">Messages contact</h4>
             <div   style={{border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px"}} >
         <div className="container">
        

        <div className="row">
    <div className="col-1"><strong>id</strong></div>
    <div className="col-1"><strong>sujet</strong></div>
    <div className="col-3"><strong>message</strong></div>
    <div className="col-3"><strong>email</strong></div>
    <div className="col-2"><strong>répondre</strong></div>
    <div classN="col-2"><strong>supprimer</strong></div>
  </div>

  {    this.state.messagescontact.map( (message) => {  
          return(
            <div>
  <div className="row">
          <div className="col-1">{message.id}</div>
    <div className="col-1">{message.sujet}</div>
    <div className="col-3">{message.message}</div>
    <div className="col-3">{message.email}</div>
    <div className="col-2"> <button className="btn btn-primary">répondre</button> </div>
    <div onClick={ () =>{ this.supprimer(message.id)}} classN="col-2"><button className="btn btn-danger">supprimer</button></div>
  </div>

  
  </div>
          );
        }) }

</div>
</div>
        </div>
    );}
  }




export default Messagescontact;
