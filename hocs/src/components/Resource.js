import React from 'react';

/**
 * Here just will render the information, nothing about the logic
 */
const Resource = ({ resource, ...props }) => {
    const {colorName} = props;

    return (
        <div style={{background: colorName}} >
            <h3>Name: {resource.name} </h3>
            <h3>Username: {resource.username}</h3>
            <h4>Email: {resource.email}</h4>
        </div>
    );
}

export default Resource;