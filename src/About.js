import React from 'react';
import useScrollPosition from './useScrollPosition';
import {DropdownMenu} from './App'
import { OrbitalVisualization } from './Timeline';
import { styles } from './Timeline';


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
        <div>
        <div style={styles.app}>
        <h1>
            About Me
        </h1>
            <div style={styles.canvasContainer}>
            <OrbitalVisualization/>
            </div>
        
        <DropdownMenu/>
        </div>
           
        </div>


    )
}

// TimeLine 


export default About;