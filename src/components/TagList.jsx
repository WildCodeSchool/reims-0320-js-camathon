import React from 'react';
import './search.css'

const tagList = [ 'airport', 'area', 'bay', 'beach', 'building', 'camping', 'city', 'coast', 'forest', 'golf', 'harbor', 'resort', 'island', 'lake', 'marketplace', 'mountain', 'other', 'landscape', 'park', 'pool', 'indoor', 'meteo', 'sportarea', 'square', 'traffic', 'underwater', 'water']

function TagList({ onClick }) {
    return(
        <div className="tagList">
            {tagList.map((tag) =><button className="tagButton" type="button" onClick={()=>onClick(tag)}>{tag}</button>)}
        </div>
        )
    }
export default TagList;
