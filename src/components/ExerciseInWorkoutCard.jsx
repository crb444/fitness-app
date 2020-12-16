import React, {useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import { ExerciseContext } from './context/exercisesContext';
import Grid from '@material-ui/core/Grid'

import ExercisesWorkoutDetails from './ExerciseWorkoutDetails';

const ExerciseInWorkoutCard = ({id, sets, name}) => {

  const final = useContext(ExerciseContext);


 


    return (
        <Card >
      <CardHeader
       
        title={name}
       
      />
    
      <CardContent>
      <Grid container spacing={2}>
        
        <Grid item xs={12}>
        
          <ExercisesWorkoutDetails sets={sets} />
        </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      <Grid container spacing={1}>
      <Grid item xs={11}/>
      <Grid item xs={1}>
      
      
      </Grid>
      </Grid>
        </CardActions>
    </Card>
    
    )
}

export default ExerciseInWorkoutCard; 