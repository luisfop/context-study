import React,{useContext} from 'react';
import { UserContext } from '../context/UserContext';




const About = () => {

    // const msg = useContext(UserContext)
     const { value, setValue } = useContext(UserContext)
    return(
        <div>
            <h1>About</h1>
            <>{value}</>
            <button onClick={() => setValue('Troqueii!!  =) ! ')}>Change Value</button>

        </div>
    )
}

export default About;