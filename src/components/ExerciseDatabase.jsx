import React, {useContext} from 'react'
import ExerciseCard from './exerciseCard'
import Grid from '@material-ui/core/Grid'
import AppHeader from './AppHeader';
import NewAppDrawer from './NewAppDrawer';
import ExerciseCategoryCard from './exerciseCategoryCard'
import {MuscleContext} from './context/musclesContext'; 
import { ExerciseContext } from './context/exercisesContext';

const ExerciseDatabase = () => {
   // const muscles = useContext(MuscleContext); 
    const final = useContext(ExerciseContext);
  //  const muscles = final.dataMusc.musc; 
  const categories = final.exCat.cat; 
   
   
  

    return (
        <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>  <AppHeader/></Grid>
      
          <Grid item xs={2}> <NewAppDrawer/> </Grid>
          <Grid item xs={9} container spacing={4}> 
          
          {
            categories.map(cat => {
              return <Grid item xs={4} key={cat.id}><ExerciseCategoryCard key={cat.id} categoryName={cat.name} categoryId={cat.id}/></Grid>
          })}
    
 

          </Grid>
  


        </Grid>
   
      </div>
    )
}

export default ExerciseDatabase; 