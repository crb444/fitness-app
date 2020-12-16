import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import { useContext } from 'react';
import { ExercisesInWorkoutContext } from './context/exercisesInWorkoutContext';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'

const AddWorkoutDialog = ({exId, exName}) => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [exInWorkout, setExInWorkout] = useContext(ExercisesInWorkoutContext); 

  const [sets, setSets] = useState([{setNum: '', reps:'', weight:''}])

  const handleAddSet = () => {
    setSets([...sets, {setNum: '', reps:'', weight:''}])
  }

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    let newExInWorkout = {id: exId, name:exName, sets}  
    setExInWorkout([...exInWorkout, newExInWorkout])
    console.log(exInWorkout);
    setOpen(false); 
  }

  const handleChange =(e,index) => {
    const {name, value} = e.target;
    const list = [...sets];
    list[index][name] = value; 
    setSets(list); 
  }

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen('paper')}><AddIcon/>Add to workout</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth={'md'}
        fullWidth={'md'}
  
      >
        <DialogTitle id="scroll-dialog-title">Add to workout</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
           
            {sets.map((set,index) => { 
                return (  <Grid container spacing={3}>
                  <Grid item xs={4}>
             <TextField id="outlined-basic" label="Outlined" variant="outlined" name="setNum" onChange={e => handleChange(e,index)} value={set.setNum}/>
             </Grid>
             <Grid item xs={4}>
             <TextField id="outlined-basic" label="Outlined" variant="outlined" name="reps" onChange={e => handleChange(e,index)} value={set.reps}/>
             </Grid>
             <Grid item xs={4}>
             <TextField id="outlined-basic" label="Outlined" variant="outlined"  name="weight" onChange={e => handleChange(e,index)} value={set.weight}/>
             </Grid>
              </Grid>)})}
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddSet} color="primary">
            Add Set
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddWorkoutDialog;  