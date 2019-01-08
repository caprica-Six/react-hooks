import React from 'react'
import useResources from "./useResources";

const ResourceList = ({ resource }) => {
   const resources = useResources(resource);
    
    return (
        // Display list
        <div className="ui list">
            {resources.map(record => (
                <div className="item" key={record.id}>{record.title}</div>
            ))}
        </div>
    )
}

export default ResourceList;