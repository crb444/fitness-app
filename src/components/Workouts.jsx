import { Work } from '@material-ui/icons'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppHeader from './AppHeader'
import NewAppDrawer from './NewAppDrawer'
import WorkoutSelector from './WorkoutSelector'
import SelectedExercises from './SelectedExercises'
import { Typography } from '@material-ui/core'

const Workouts = () => {
    return (
        <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>  <AppHeader/></Grid>
      
          <Grid item xs={3}> <NewAppDrawer/> </Grid>
          <Grid item xs={9} container spacing={4}> 
         <Grid item xs={1}/>
          <Grid item xs={5}>
         <Typography variant="h2" style={{paddingBottom: 30}}> Your Favourite Exercises</Typography>
        </Grid>
        <Grid item xs={5}>
         <Typography variant="h2" align="center" style={{paddingBottom: 30}}> New Workout</Typography>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={1}/>
        <Grid item xs={5}>
         <WorkoutSelector/> 
         </Grid>
         <Grid item xs={5}>
    <SelectedExercises/> 
          </Grid>
          <Grid item xs={1}/>
        </Grid>
        </Grid>
       
        
   
      </div>
    )
}

export default Workouts; 