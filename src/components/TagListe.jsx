import React from 'react';
import './search.css'

const tagList = [ 'airport', 'area', 'bay', 'beach', 'building', 'camping', 'city', 'coast', 'forest', 'golf', 'harbor', 'resort', 'island', 'lake', 'marketplace', 'mountain', 'other', 'landscape', 'park', 'pool', 'indoor', 'meteo', 'sportarea', 'square', 'traffic', 'underwater', 'water']

function TagList({  tagUpdate, manageModale }) {
    return(
        <ul className="tagList">
            {tagList.map((tag) => 
                <li>
                    <button type='button' onClick={() => manageModale}>{tag}</button>
                </li>)}
        
        </ul>
    )
}

export default TagList;
