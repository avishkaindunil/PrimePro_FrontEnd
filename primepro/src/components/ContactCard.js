import React from "react";

function ContactCard({contactCard}){
    return(
    <div className="grid justify-between items-start">
        <div>
            <h3 className="text-base mt-15 mb-2">{contactCard.text}</h3>
           {contactCard.telno && <p className="text-gray-600 text-xs mt-2 mb-2">{contactCard.telno}</p>}
           </div>
           <div>
           {contactCard.email && <p className="text-blue-600 text-xs mt-2 mb-2">{contactCard.email}</p>}
        </div>
    </div>
        
    );
};



export default ContactCard;


