
import './visage.css'
import imgtest from './test.jpg';

import {Link} from "react-router-dom";


function Visage(){
    return (
        <div className="Visage">
            <div  style={{width:"65%",marginLeft:"auto",marginRight:"auto",marginTop:"50px",marginBottom:"50px",border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px"}} >
            
            <h2 style={{color:"gray",marginBottom:"20px"}}>premier article</h2>
            <h6 style={{color:"gray",marginBottom:"20px"}}><small>Posté le : </small> <small style={{color:"black"}}> 3/12/2020</small></h6>
            <div className="container">
            <div className="row">
            <div className="col-6">
            <img  style={{width:"100%",height:"300px",border:"none"}} src={imgtest} alt="image"></img>
            </div>
            <div className="col-6"> <p style={{lineHeight:"2"}}>description description description description description description description description description description description description description description description description description description description description description description description description description description description description description</p>
            <Link  style={{textDecoration:"none"}} to="/detail" ><button style={{color:"rgb(182, 212, 52)",padding:"7px 10px",border:"2px solid rgb(182, 212, 52)",backgroundColor:"white"}}>Continuer la lecture</button></Link>
            
            </div>

            </div>
            </div>


        </div>

        <div  style={{width:"65%",marginLeft:"auto",marginRight:"auto",marginBottom:"50px",border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px"}} >
            
            <h2 style={{color:"gray",marginBottom:"20px"}}>deuxiéme article</h2>
            <h6 style={{color:"gray",marginBottom:"20px"}}><small>Posté le : </small> <small style={{color:"black"}}> 3/12/2020</small></h6>
            <div className="container">
            <div className="row">
            <div className="col-6">
            <img  style={{width:"100%",height:"300px",border:"none"}} src={imgtest} alt="image"></img>
            </div>
            <div className="col-6"> <p style={{lineHeight:"2"}} >description description description description description description description description description description description description description description description description description description description description description description description description description description description description description</p>
            <Link  style={{textDecoration:"none"}} to="/detail" ><button style={{color:"rgb(182, 212, 52)",padding:"7px 10px",border:"2px solid rgb(182, 212, 52)",backgroundColor:"white"}}>Continuer la lecture</button></Link>
            
            </div>

            </div>
            </div>
            </div>
        </div>
    )
}




export default Visage;
