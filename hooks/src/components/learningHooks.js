import React, { useEffect, useState } from 'react'
import {LearningHooks2} from './'

function LearningHooks () {
    const [usersInfo, setUsersInfo] = useState([]);

    useEffect (() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await data.json();
        setUsersInfo(users);
    }
    
    return(
        <div>
            Hola mundooooo
            { (usersInfo !== null) && (
                    usersInfo.map((user, index) => (
                        <LearningHooks2 key={index} userInfo={user} indice={index+1} />
                    ))
                )
            }
        </div>
    );
}

export default LearningHooks;