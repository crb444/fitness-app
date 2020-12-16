import { Transfer, Button } from 'antd';
import React, {useContext} from 'react'
import {Grid,Paper} from '@material-ui/core'
import {FavouriteContext} from './context/favouriteContext'
import {ExerciseContext} from './context/exercisesContext'

import WorkoutDesignCard from './WorkoutDesignCard'


const WorkoutSelector = () => {
    const [favourites, setFavourites] = useContext(FavouriteContext); 
    const final = useContext(ExerciseContext); 
    const exercises = final.dataEx.exer; 
    const filteredEx = exercises.filter((ex) => { return favourites.includes(ex.id)}); 

    // have a list of exercises for the workout 
    let exercisesForWorkout = []; 
     
    return (
        <div>
       
         
         <Paper style={{maxHeight: 1200, overflow: 'auto'}} >
        
          {
            filteredEx.map(ex => {
              return <Grid item xs={12} key={ex.id}><WorkoutDesignCard key={ex.id} exId={ex.id} exName={ex.name} primary={ex.muscles} secondary={ex.muscles_secondary} favourite={favourites.includes(ex.id)} /></Grid>
          })} 
          </Paper>
 

     
   
      </div>
    )
}
export default WorkoutSelector; 