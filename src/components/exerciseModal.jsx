import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import {ExerciseContext, ExerciseProvider} from './context/exercisesContext'
import ExerciseCard from './exerciseCard';
import Grid from '@material-ui/core/Grid'
import { FavouriteContext } from './context/favouriteContext';

const ExerciseModal = ({selectedCategory}) => {
  const final = useContext(ExerciseContext); 
  const exercises = final.dataEx.exer; 
  const filteredEx = exercises.filter((ex) => ex.category === selectedCategory )
  const [favourites, setFavourites] = useContext(FavouriteContext); 
  

  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  }; 



  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        See Exercises
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Exercise </DialogTitle>
        <DialogContent  >
        <Grid container spacing={3}>
            {filteredEx.map(ex => {
                return <Grid item xs={12}><ExerciseCard key={ex.id} exId={ex.id} exName={ex.name} primary={ex.muscles} secondary={ex.muscles_secondary} favourite={favourites.includes(ex.id)} /></Grid>
            })}
        </Grid>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default  ExerciseModal; 