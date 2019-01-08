import React, {useState, useEffect } from 'react'
import axios from "axios";

const ResourceList = ({ resource }) => {
    // have access to the initial state resources on const resources
    // can be changed using setResources()
    // initial value of empty array
    const [resources, setResources] = useState([]); 

    const fetchResource = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

        setResources(response.data);
    }

    // get access to life-cycle methods with useEffect()
    useEffect(() => {
        fetchResource(resource);        
    }, [])
    
    return (
        // Test number of resources fetched
        <div>{resources.length}</div>
    )
}

export default ResourceList;