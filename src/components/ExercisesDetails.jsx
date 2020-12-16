import React, {useContext} from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'; 
import Chip from '@material-ui/core/Chip'
import {ExerciseContext} from './context/exercisesContext'

const ExercisesDetails = ({primaryMuscles, secondaryMuscles, exId}) => {
  const final = useContext(ExerciseContext);
  const exercises = final.dataEx.exer; 
  const specificExercise = exercises.filter((ex) => ex.id === exId)

    return (
        <div>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Primary Muscles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {primaryMuscles.map(m => {
        return <Chip color="primary" label={m.name} />})}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography >Secondary Muscles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {secondaryMuscles.map(m => {
        return <Chip color="secondary" label={m.name} />})}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography >Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {specificExercise[0].description}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
   
      </div>
    )
}

export default ExercisesDetails; 