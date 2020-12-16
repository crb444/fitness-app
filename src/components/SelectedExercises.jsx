import React, {useContext} from 'react'
import { ExercisesInWorkoutContext } from './context/exercisesInWorkoutContext';
import {Grid, Paper} from '@material-ui/core'
import ExerciseInWorkoutCard from './ExerciseInWorkoutCard'
import {ExerciseContext} from './context/exercisesContext'

const SelectedExercises = () => {
    const [exInWorkout, setExinWorkout] = useContext(ExercisesInWorkoutContext); 
    const final = useContext(ExerciseContext); 
    const exercises = final.dataEx.exer; 
    const filteredEx = exInWorkout.filter((ex) => { return check(ex.id)}); 
     
    function check(id) {
        let result = exercises.filter((ex) => { return ex.id === id})
        if(result.length === 1) {
            return true; 
        } else {
            return false; 
        }
    }
  
      return (
          <div>
         
           
           <Paper style={{maxHeight: 1200, overflow: 'auto'}} >
            
            {
              filteredEx.map(ex => {
                return <Grid item xs={12} key={ex.id}><ExerciseInWorkoutCard key={ex.id} id={ex.id} sets={ex.sets} name={ex.name} /></Grid>
            })} 
            </Paper>
     
        </div>
      )
}

export default SelectedExercises; 
