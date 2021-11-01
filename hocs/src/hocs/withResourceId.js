import React, { useEffect, useState } from 'react';
import axios from 'axios'

/**
 * This is the way that we use to transfor the original (wrappedComponent)
 * to another new component.
 * 
 * Here there will be only the logic
 * 
 * @param {T} WrappedComponent Name of the component
 * @returns To another new component
 */
const withResourceId = (WrappedComponent) => {
    //Destruct according to the props we need, the other will be send to the wrappedComponent
    return ({ resourceName, resourceId, ...props }) => {
        const [resource, setResource] = useState(null);

        useEffect(() => {
            getResourceValues();
        }, []);

        const getResourceValues = async () => {
            try {
                const url = `http://jsonplaceholder.typicode.com/${resourceName}/${resourceId}`
                const response = await axios.get(url);
                setResource(response.data);
            } catch (error) {
                const errorMsg = {error: "Something happened, please, check you URL and try again, please"}
                setResource({...resource, error: errorMsg})
            }
        };

        if (!resource) return "Loading...";
        if (resource.error) return "Error Message"; 

        return <WrappedComponent resource={resource} {...props} />
    }
}

export default withResourceId;