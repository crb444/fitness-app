import React, {useState, useContext} from 'react'
import AppHeader from './AppHeader'; 
import {ExerciseContext, ExerciseProvider} from './context/exercisesContext'; 
import {Box,Main} from 'grommet';
import ExerciseCard from './exerciseCard'
import Grid from '@material-ui/core/Grid'

import AppDrawer from './AppDrawer'
import NewAppDrawer from './NewAppDrawer';
import UserDetails from './UserDetails'


const Dashboard = () => {


    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>  <AppHeader/></Grid>
      
          <Grid item xs={3}> <NewAppDrawer/> </Grid>
          <Grid item xs={9}> <UserDetails/></Grid>
  


        </Grid>
   
      </div>
    )
}

export default Dashboard; 
