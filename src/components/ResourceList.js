import React, { Component } from 'react'
import axios from "axios";

class ResourceList extends Component {
    // se state to fetch all the resources from the API
    state = { resources: [] };

    async componentDidMount() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

        this.setState({ resources: response.data}); // data is an axios object
    }

    render() {
        return (
            // Test number of resources fetched
            <div>{this.state.resources.length}</div>
        )
    }
}

export default ResourceList;