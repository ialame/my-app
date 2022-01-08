import React from "react";
import TeamMember from "./TeamMember";
function Team(){
    return(
        <div className="row">
            <TeamMember 
                info = {
                    {
                        img:'/images/01.jpg',
                        name:'Walter White',
                        position:'Bryan Cranston',
                        phone:'+49 12345678',
                        email:'walter@b-bad.com',
                        website:'walterwhite.com',
                    }
                }
            />
            
        </div>
        
    );
}
export default Team;