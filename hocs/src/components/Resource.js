import React, { useEffect, useState } from 'react';

const Resource = (props) => {
    const [flagProps, setFlagProps] = useState(true);
    const { resource } = props;

    useEffect(() => {
        setFlagProps(resource.hasOwnProperty("name"));
    });

    return(
        flagProps ?
            (
                <>
                    <h3>Name: {resource.name} </h3>
                    <h3>Username: {resource.username}</h3>
                    <h4>Email: {resource.email}</h4>
                </>
            )
            :
            (
                <>
                    <span>{resource.error}</span>
                </>
            )
    );
}

export default Resource;