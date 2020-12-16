import React, {useContext} from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'; 
import Grid from '@material-ui/core/Grid'
import {ExerciseContext} from './context/exercisesContext'
import {ExercisesInWorkoutContext} from './context/exercisesInWorkoutContext'
import {RiRepeatLine} from 'react-icons/ri'; 
import {CgGym} from 'react-icons/cg'; 

const ExercisesWorkoutDetails = ({sets}) => {
//   const final = useContext(ExerciseContext);
//   const exercises = final.dataEx.exer; 
//   const specificExercise = exercises.filter((ex) => ex.id === exId)
const [exInWorkout, setExInWorkout] = useContext(ExercisesInWorkoutContext); 

let exNumber=0;

const getSet =() => {
  exNumber+=1

    return exNumber; 
}


    return (
        <div>
     
        {sets.map(s => {
          return (
            <Accordion>
               <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Set {getSet()}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
           
          <Grid item xs={6}>
          <RiRepeatLine/>
            </Grid>
          <Grid item xs={6}>
          <Typography>
            {s.reps} 
          </Typography>
          </Grid>
          <Grid item xs={6}>
            <CgGym/>
            </Grid>
          <Grid item xs={6}>
          <Typography>
            {s.weight} 
          </Typography>
          </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
          )
        })}
      </div>
    )
}

export default ExercisesWorkoutDetails; 