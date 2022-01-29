import React from "react";
import TeamMember from "./TeamMember";
function Team(){
    const info = [
        {id:5,img:'images/01.jpg', name:'Walter White', position:'Bryan Cranston', phone:'+49 12345678', email:'walter@b-bad.com', website:'walterwhite.com'},
        {id:3,img:'images/03.jpg', name:'Skyler White', position:'Anna Gunn', phone:'+49 12345678', email:'skyler@b-bad.com', website:'walterwhite.com'}
    ];
    
    const members = info.map(function(member){
        return <TeamMember 
        key={member.id}
        img={member.img}
        name ={member.name}
        position={member.position}
        phone = {member.phone}
        email = {member.email}
        website = {member.website}
               />
    });
    return(
        <div className="row">
            {members}
        </div>
        
    );
}
export default Team;