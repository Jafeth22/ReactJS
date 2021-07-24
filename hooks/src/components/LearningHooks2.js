import React from 'react'

import './LearningHooks2.css'

function LearningHooks2(props) {
    const { name, email, address } = props.userInfo;
    const { indice } = props;
    
    return (
        <div className="user-container">
            <p className="left">
                {indice} - Nombre usuario: {name}
                <br/>
                Email: {email}
                <br/>
                Ubicacion: {address.city}, {address.suite}, {address.street}
            </p>
        </div>
    );
}

export default LearningHooks2;