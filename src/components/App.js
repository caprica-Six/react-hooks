import React, { useState } from 'react';
import ResourceList from "./ResourceList";

const App = () => {
    // array destructuring
    // resource can be any name, contains the present value of the piece of this.state.
    // setResource is a setter functtion - equivalent to setState, called when we want ot update the state and re-render
    const [resource, setResource] = useState('posts');

    return (
        <div className="ui container masthead">
            <h1 className="ui header">React Hooks</h1>
            <div>
                <button 
                    onClick={() => setResource('posts')}
                    className="ui primary button">
                    Posts
                </button>
                <button 
                    onClick={() => setResource('todos')}
                    className="ui primary button">
                    Todos
                </button>
            </div>
            
            <ResourceList resource={resource} />
        </div>
    )
}

export default App;