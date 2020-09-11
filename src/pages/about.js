import React,{useContext} from 'react';
import { UserContext } from '../context/UserContext';




const About = () => {

    const msg = useContext(UserContext)
    return(
        <div>
            <h1>About</h1>
            <>{msg}</>

        </div>
    )
}

export default About;