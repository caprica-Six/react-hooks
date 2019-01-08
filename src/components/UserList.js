import React from 'react';
import useResources from "./useResources";

const UserList = () => {
    const users = useResources('users');

    return (
        <div className="ui segment">
            <div className="ui list">
                <p className="ui header">User list:</p>
                {users.map(user => (
                    <div 
                        key={user.id}
                        className="item">
                        {user.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserList;