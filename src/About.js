import React from 'react';
import useScrollPosition from './useScrollPosition';
import {DropdownMenu} from './App'


const About = ({ isDarkMode }) => {
    const spin = useScrollPosition()
    return (
        <div style={{ height: '652vh' }}>
            <div><h1 style={{ color: isDarkMode ? 'white' : 'black' }}>Diya Dhyani</h1></div>

            {/* <p style={{ color: isDarkMode ? 'white' : 'black' }}>Scroll! </p> */}

            
        </div>

    )
}
export function AboutMe({isDarkMode}){
    const spin = useScrollPosition()
    return (
        <div style={{ height: '652vh' }}>


        <DropdownMenu/>
            <div className='App'><h1 style={{ color: isDarkMode ? 'white' : 'black' }}>I love Dharsan so much</h1></div>

         

            
        </div>

    )
}

// TimeLine 


export default About;