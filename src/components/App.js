import React, { useState } from 'react';

const App = () => {
    // array destructuring
    // resource can be any name, contains the present value of the piece of this.state.
    // setResource is a setter functtion - equivalent to setState, called when we want ot update the state and re-render
    const [resource, setResource] = useState('posts');

    return (
        <div>
            <p>React Hooks</p>
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('totos')}>Todos</button>
            </div>
            
            {resource}
        </div>
    )
}

export default App;