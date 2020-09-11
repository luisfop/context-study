import React,{useContext} from 'react';
import { UserContext } from '../context/UserContext';




const About = () => {

    // const msg = useContext(UserContext)
     const { user } = useContext(UserContext)
    return(
        <div>
            <h1>About</h1>
            <p>{JSON.stringify(user,null,2)}</p>


        </div>
    )
}

export default About;