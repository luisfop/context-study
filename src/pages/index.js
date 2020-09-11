import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';


const Index = () => {

    // const msg = useContext(UserContext);
    const {value} = useContext(UserContext);

    return(
        <div>
            <h1>Index</h1>
            <>{value}</>
        </div>
    )
}

export default Index;