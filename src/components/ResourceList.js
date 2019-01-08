import React, { Component } from 'react'
import axios from "axios";

class ResourceList extends Component {
    // se state to fetch all the resources from the API
    state = { resources: [] };

    async componentDidMount() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

        this.setState({ resources: response.data}); // data is an axios object
    }

    // to render todos, we have to add anothe rlife-cycle hook
    // componentDidMount() gets called anytime the component re-renders because of a current component or setState() inside this class-based comp.
    // anytime the componentDidUpdate() updates, will be called with prevProps
    async componentDidUpdate(prevProps) {
        // console.log(prevProps);
        //check if the resource type has changed, then we have to make another request!
        
        if(prevProps.resource !== this.props.resource) {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/${this.props.resource}`
            );

            this.setState({ resources: response.data });
        }
    }

    render() {
        return (
            // Test number of resources fetched
            <div>{this.state.resources.length}</div>
        )
    }
}

export default ResourceList;