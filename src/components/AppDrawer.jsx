import React from 'react'
import {Sidebar, Box, Text, Nav} from 'grommet'
import {ContactInfo, Database, Favorite, Run, Analytics} from 'grommet-icons'
import ExerciseDatabase from './ExerciseDatabase'
import {Link} from 'react-router-dom'; 

const AppDrawer = () => {
    return (
      <Sidebar style={{marginTop:100, marginLeft:20}}background="brand" round="small" width="200px" height="800px" elevation="large"
      header={
        <Box alignContent="center">
       
        <Text alignSelf="center" size="large"  wordBreak="keep-all">Your Name</Text>
        </Box>
      }
    >
      <Nav direction="column" background="brand" gap="xlarge" align="center">
      <div><ContactInfo size="medium" style={{paddingRight: 30, paddingTop: 20}}/><Text alignSelf="center"  size="large" wordBreak="keep-all">Details</Text></div>
      <div><Database size="medium" style={{paddingRight: 30, paddingTop: 20}}/>
        <Link to="/exercisedatabase" component={ExerciseDatabase}>Database</Link></div>
      <div><Favorite size="medium" style={{paddingRight: 30, paddingTop: 20}}/><Text alignSelf="center" size="large" wordBreak="keep-all">Favourites</Text></div>
      <div><Run size="medium" style={{paddingRight: 30, paddingTop: 20}}/><Text alignSelf="center" size="large" wordBreak="keep-all">Workouts</Text></div>
      <div><Analytics size="medium" style={{paddingRight: 30, paddingTop: 20}}/><Text alignSelf="center" size="large"  wordBreak="keep-all">Progress</Text></div>


</Nav>
    </Sidebar>
    )
}

export default AppDrawer; 