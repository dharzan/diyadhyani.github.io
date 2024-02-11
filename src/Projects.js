import React from "react";
import {DropdownMenu} from './App'
import { styles } from "./Timeline";
import { OrbitalVisualization } from "./Timeline";


export default function Projects({isDarkMode}){
    return (
        <body >

            <div style={styles.app}>
            <h1 >Projects</h1>
                <div style={styles.canvasContainer}>
                    <OrbitalVisualization/>
                </div>

           
                <div className='App' >
                <DropdownMenu/>
                </div>

            </div>

        </body>
        
        )
}