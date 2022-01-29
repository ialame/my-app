import React from "react";

function TeamMember(props){
    return(
        <div className="col-md-4 col-sm-6 border"> 
             <div className='card'>
                 <div className="card-header">
                    <img style={{maxWidth:'100%'}} src={props.img} alt={props.name}/>
                 </div>
                 <div className='card-body' style={{backgroundColor: props.website? 'white':'black'}}>
                     <h2>{props.name}</h2>
                     <h5>{props.position}</h5>
                     <div>{props.phone}</div>
                     <div>{props.email}</div>
                     <div>{props.website}</div>
                 </div>
             </div>
        </div>
        
    )
}
export default TeamMember;