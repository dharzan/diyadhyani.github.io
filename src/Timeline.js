import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // For the close button
import { DropdownMenu } from './App';
import { Star } from './App';
import { Cube } from './App';
import { SkullModel } from './About';



export function Event({ position, id, setSelectedEvent, selectedEventId }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Toggle showing event details
  const toggleEventDetails = () => {
    if (selectedEventId === id) {
      setSelectedEvent(null); // Close if the same event is clicked again
    } else {
      setSelectedEvent(id); // Show new event details
    }
  };

  useFrame(() => {
    meshRef.current.scale.set(hovered ? 1.2 : 1, hovered ? 1.2 : 1, hovered ? 1.2 : 1);
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={toggleEventDetails}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'white'} />
    </mesh>
  );
}



export function OrbitalVisualization()
{

   // Stars background
   const stars = useMemo(() => {
    return new Array(600).fill().map((_, i) => <Star key={i} />);
  }, []);


  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Cube/>
      {stars}
    </Canvas>
  );



}

function TimelineVisualization({ setSelectedEvent, selectedEventId }) {
  const events = useMemo(() => [
    { id: 1, position: [-2, 0, 0], title: 'Event 1' },
    // Add additional events as needed
  ], []);

  // Stars background
  const stars = useMemo(() => {
    return new Array(600).fill().map((_, i) => <Star key={i} />);
  }, []);


  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Cube/>
      
      {stars}

      {events.map((event) => (
        <Event
          key={event.id}
          id={event.id}
          position={event.position}
          setSelectedEvent={setSelectedEvent}
          selectedEventId={selectedEventId}
        />
      ))}
    </Canvas>
  );
}

function Timeline() {
  const [selectedEventId, setSelectedEventId] = useState(null);

  return (
    <div style={styles.app}>
      
      <DropdownMenu />
      <h1>Diya Dhyani</h1>
      <div style={styles.canvasContainer}>
        <TimelineVisualization setSelectedEvent={setSelectedEventId} selectedEventId={selectedEventId} />
      </div>
      {selectedEventId && (
        <div style={styles.eventDetails} className='App'>
           <p2>Welcome To My Galaxy</p2>
          {/* <button onClick={() => setSelectedEventId(null)} style={styles.closeButton}>
            
          </button> */}
        </div>
      )}
    </div>
  );
}

// Update styles accordingly
export const styles = {
  app: {
    position:'relative',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black', // Ensure space theme is always dark
    color: 'white',
    overflow: 'hidden',
  },
  canvasContainer: {
    width: '100%',
    height: '75%',
  },
  eventDetails: {
    display:'flex',
    justifyContent:'center',
    top: '20px',
    left: '20px',
    position: 'absolute',
   
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    
    color: 'white',
    zIndex: 10,
  },
  closeButton: {
    marginTop: '10px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Timeline;
