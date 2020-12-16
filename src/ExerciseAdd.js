import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class ExerciseAdd extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      exerciseName: '',
      targetArea: ''
    }
  }

  handleExerciseNameChange = (event) => {
    this.setState({exerciseName: event.target.value})
    
  }

  handleTargetAreaChange = (event) => {
    this.setState({targetArea: event.target.value})
    
  }

  handleSubmit = (event) => {
 
    axios.post('http://localhost:3000/', { 
      name: this.state.exerciseName,
      targetArea: this.state.targetArea}).then(res => {
      console.log(res); 
    })
  }

  render() {
  return (
    <div>
      <form>
        <br/>
        <label>Exercise Name</label>
        <input type="text" name="exerciseName" value={this.state.exerciseName} onChange={this.handleExerciseNameChange}/>
        <br/>
        <label>Target Area </label>
        <input type="text" name="targetArea" value={this.state.targetArea} onChange={this.handleTargetAreaChange} />
        <br/>
        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
      </form>
    </div>
  );
}
}

export default ExerciseAdd;
