import React, {useState, useEffect } from 'react'
import axios from "axios";

const ResourceList = ({ resource }) => {
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
    
    
    return (
        // Test number of resources fetched
        <div>{resources.length}</div>
    )
}

export default ResourceList;