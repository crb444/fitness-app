import React, {useEffect, useState, createContext} from 'react';
import axios from 'axios'; 

export const MuscleContext = createContext();

export const MuscleProvider = (props) => {
   
    const [muscles, setMuscles] = useState([]);

    const fetchData = async() => {
     

        await axios.get('https://wger.de/api/v2/muscle').then((res) => {
            updateMuscles(res.data.results); 
        })
    
    
    };

    const updateMuscles = async (muscles) => {
        setMuscles(muscles); 
        
    }

  

    useEffect(() => {
        fetchData(); 
    }, []);

    return (
        <MuscleContext.Provider value={muscles}>
            {props.children}
        </MuscleContext.Provider>
    )
}

