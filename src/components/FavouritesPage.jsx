import React, {useContext} from 'react'
import ExerciseCard from './exerciseCard'
import Grid from '@material-ui/core/Grid'
import AppHeader from './AppHeader';
import NewAppDrawer from './NewAppDrawer';
import ExerciseCategoryCard from './exerciseCategoryCard'
import {MuscleContext} from './context/musclesContext'; 
import { ExerciseContext } from './context/exercisesContext';
import { FavouriteContext } from './context/favouriteContext';
import Paper from '@material-ui/core/Paper'

const FavouritesPage = () => {
  const [favourites, setFavourites] = useContext(FavouriteContext); 
  const final = useContext(ExerciseContext); 
  const exercises = final.dataEx.exer; 
  const filteredEx = exercises.filter((ex) => { return favourites.includes(ex.id)}); 
   
  

    return (
        <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>  <AppHeader/></Grid>
      
          <Grid item xs={2}> <NewAppDrawer/> </Grid>
          <Grid item xs={9} container spacing={4}> 
         
         <Paper style={{maxHeight: 1000, overflow: 'auto'}} >
        
          {
            filteredEx.map(ex => {
              return <Grid item xs={12} key={ex.id}><ExerciseCard key={ex.id} exId={ex.id} exName={ex.name} primary={ex.muscles} secondary={ex.muscles_secondary} favourite={favourites.includes(ex.id)} /></Grid>
          })} 
          </Paper>
 

          </Grid>
  


        </Grid>
   
      </div>
    )
}

export default FavouritesPage; 