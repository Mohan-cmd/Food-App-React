import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { IMAGE_LINK_CLODINARY } from '../utils/constants';

function Card(params) {
    // State to manage the expansion state of the card
    const [expanded, setExpanded] = useState(false);

    // Function to toggle the expansion state
    const toggleExpansion = () => {
        setExpanded(prevExpanded => !prevExpanded);
    };

    return (
        <div className="flex-col justify-center items-center m-auto" style={{width:"500px"}}>
            {/* Card header */}
            <div className="font-bold" role="button" aria-expanded={expanded} onClick={toggleExpansion}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        toggleExpansion();
                    }
                }}
                tabIndex="0" >
               {params.ItemName} 
                {/* Dropdown icon */}
                <span className="m-2">
                    <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} />
                </span>
            </div>
            {/* Card content (conditionally rendered based on expanded state) */}
            {expanded && (
                <div className="p-2 border border-black hover:bg-[#ffa07a]" style={{position:"relative", display:"flex", flexDirection:"column"}}>
                  <div className="font-bold"> {params.ItemName} - ₹{params.ItemCost} </div>
                    <br/>
                    {params.ItemDescription}
                    <br/>
                    {/* <div style={{display:"flex", alignItems:"center"}}> */}
                      <img className="m-auto" src={IMAGE_LINK_CLODINARY+params.imageId} style={{width:"120px",height:"100px", display:"flex", justifyContent:"center", borderRadius:"3px" }}>
                      </img> 
                    <div/>
                </div>
            )}
        </div>
    );
}

export default Card;
