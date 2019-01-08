import React, { useState } from 'react';

const App = () => {
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