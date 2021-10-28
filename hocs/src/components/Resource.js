import React from 'react';

const Resource = ({resource}) => {
    return(
        <>
            <h3>Name: {resource.name} </h3>
            <h3>Username: {resource.username}</h3>
            <h4>Email: {resource.email}</h4>
        </>
    )
}

export default Resource;