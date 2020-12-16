import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {ContactInfo, Database, Favorite, Run, Analytics} from 'grommet-icons'
import { AddAPhoto } from '@material-ui/icons';
import ExerciseDatabase from './ExerciseDatabase';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function NewAppDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            
              <ListItem>
               
                <ListItemIcon><ContactInfo /></ListItemIcon>
                <Link to="/dashboard"><Button>Details</Button></Link>
              </ListItem> 
              <Divider />
              <ListItem>
                <ListItemIcon><Database /></ListItemIcon>
                <Link to="/exercisedatabase"><Button>Database</Button></Link>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon><Favorite /></ListItemIcon>
                <Link to="/favourites"><Button>Favourites</Button></Link>
                
              </ListItem>
              <Divider />
              <ListItem>
              <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <Run style={{marginRight:15}} /> <Typography className={classes.heading}>Workouts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
        <ListItem>
        
                <Link to="/workoutcreator"><Button>Workouts Creator</Button></Link>
          </ListItem>
          <Divider />
          <ListItem>
          <ListItemText>View Workouts</ListItemText>
          </ListItem>
        
          </List>
          
        </AccordionDetails>
      </Accordion>
              </ListItem>
              <ListItem>
                <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <Analytics style={{marginRight:15}} /> <Typography className={classes.heading}>Progress</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
        <ListItem>
          <ListItemText>Measurements</ListItemText>
          </ListItem>
          <ListItem>
          <ListItemText>Exercise Progress</ListItemText>
          </ListItem>
          <ListItem>
          <ListItemText>Weight</ListItemText>
          </ListItem>
          </List>
          
        </AccordionDetails>
      </Accordion>
     
              </ListItem>
            
          </List>
          <Divider />
        </div>
      </Drawer>
     
    </div>
  );
}


