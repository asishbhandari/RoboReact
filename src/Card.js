import React from "react";

const card= ({id, name, email})=>{
    return(
        <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 w-20">
            <img src={`https://robohash.org/${id}.png?set=set2`} alt=""/>
            <div>
                <h2 className="f4 lh-copy">{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default card;