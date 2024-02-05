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
        <div className="card" style={{width:"500px"}}>
            {/* Card header */}
            <div className="card-header" role="button" aria-expanded={expanded} onClick={toggleExpansion}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        toggleExpansion();
                    }
                }}
                tabIndex="0" >
               {params.ItemName} 
                {/* Dropdown icon */}
                <span className="dropdown-icon">
                    <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} />
                </span>
            </div>
            {/* Card content (conditionally rendered based on expanded state) */}
            {expanded && (
                <div className="card-content" style={{position:"relative", display:"flex", flexDirection:"column"}}>
                   {params.ItemName} - ₹{params.ItemCost}
                    <br/>
                    {params.ItemDescription}
                    <br/>
                    {/* <div style={{display:"flex", alignItems:"center"}}> */}
                      <img src={IMAGE_LINK_CLODINARY+params.imageId} style={{width:"120px",height:"100px", display:"flex", justifyContent:"center", borderRadius:"3px" }}>
                      </img> 
                    <div/>
                </div>
            )}
        </div>
    );
}

export default Card;
