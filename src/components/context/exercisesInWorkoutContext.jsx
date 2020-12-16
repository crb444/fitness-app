import React, {useEffect, useState, createContext} from 'react';
import axios from 'axios'; 

export const ExercisesInWorkoutContext = createContext();

export const ExercisesInWorkoutProvider = (props) => {
   
    const [exInWorkout, setExInWorkout] = useState([]);


    return (
        <ExercisesInWorkoutContext.Provider value={[exInWorkout, setExInWorkout]}>
            {props.children}
        </ExercisesInWorkoutContext.Provider>
    )
}

