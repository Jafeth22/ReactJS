import React, { useEffect, useState } from 'react';
import axios from 'axios'

/**
 * This is the way that we use to transfor the original (wrappedComponent)
 * to another new component.
 * 
 * @param {T} WrappedComponent Name of the component
 * @returns To another new component
 */
const withResourceId = (WrappedComponent) => {
    //Destruct according to the props we need, the other will be send to the wrappedComponent
    return ({ resourceName, resourceId, ...props }) => {
        const [resource, setResource] = useState(null);

        useEffect(() => {
            axios.get(`http://jsonplaceholder.typicode.com/${resourceName}/${resourceId}`)
                .then(res => setResource(res.data))
        }, []);

        if (!resource) return "Loading..."


        return <WrappedComponent resource={resource} {...props} />
    }
}

export default withResourceId;