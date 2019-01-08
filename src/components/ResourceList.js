import React, {useState, useEffect } from 'react'
import axios from "axios";

// Code reuse - useResources function can be re-used anywhere in the project
const useResources = (resource) => {
     // have access to the initial state resources on const resources
    // can be changed using setResources()
    // initial value of empty array
    const [resources, setResources] = useState([]); 

    // get access to life-cycle methods with useEffect()
    useEffect(() => { 
        (async (resource) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            
            setResources(response.data);
        })(resource);
        }, [resource]
    );

    return resources;
}


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