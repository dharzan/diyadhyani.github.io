import React from 'react';
import useScrollPosition from './useScrollPosition';


const About = ({ isDarkMode }) => {
    const spin = useScrollPosition()
    return (
        <div style={{ height: '652vh' }}>
            <div><h1 style={{ color: isDarkMode ? 'white' : 'black' }}>Diya Dhyani</h1></div>

            {/* <p style={{ color: isDarkMode ? 'white' : 'black' }}>Scroll! </p> */}

            
        </div>

    )
}

// TimeLine 
export function Timeline({ isDarkMode })
{
    return(<div >
                <h1 style={{color: isDarkMode? 'white' : "black"}}>Timeline begins</h1>

                    <p style={{color: isDarkMode? 'white' : "black"}}> Undergraduate Research Assistant</p>
                    <p style={{color: isDarkMode? 'white' : "black"}}>Resident Assistant</p>
                    <p style={{color: isDarkMode? 'white' : "black"}}>Kids Camp Counselor</p>
                    <p style={{color: isDarkMode? 'white' : "black"}}></p>
                    <p style={{color: isDarkMode? 'white' : "black"}}></p>
                    
                
            </div>

                
        
    );

 


}

export default About;