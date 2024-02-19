import React from 'react';
import {DropdownMenu} from './App'
import { OrbitalVisualization, styles } from './Timeline';

function ContactMe() {
  
  return (

    <div style={styles.app}>
    <h1>Contact Me</h1>

      <div style={styles.canvasContainer}>
      <OrbitalVisualization/>

      </div>
      <div className='App' >
      <DropdownMenu/>
        </div>
    
    </div>
    
    )
}

export default ContactMe;