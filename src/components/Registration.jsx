import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Box, Button } from "grommet";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Slider from "@material-ui/core/Slider";
import {TextInput} from 'grommet'


const Registration = () => {
  const [value, setValue] = React.useState({
    firstName: "",
    lastName: "",
    gender: "",
    height: "",
    weight: "",
  });

  const setHeight = (e, incoming) => {
    setValue({ ...value, height: incoming });
  };

  const setWeight = (e, incoming) => {
    setValue({ ...value, weight: incoming });
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = () => {
    console.log(value.firstName);
    console.log(value.lastName);
    console.log(value.age);
    console.log(value.gender);
    console.log(value.height);
    console.log(value.weight);
  };

  return (
    <div>
      
          <div style={{ marginLeft: 10, marginTop: 40 }}>
            <TextInput
              name="firstName"
              placeholder="First Name"
              
              onChange={handleChange}
            />
          </div>
          <div style={{ marginLeft: 10, marginTop: 40 }}>
            <TextInput
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>
          <div style={{ marginLeft: 10, marginTop: 40 }}>
            <TextInput
              
              placeholder="Age"
              name="age"
              onChange={handleChange}
            />
          </div>
          <div style={{ marginLeft: 10, marginTop: 60 }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                value={value.gender}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div style={{ marginLeft: 10, marginTop: 60 }}>
            <FormLabel component="legend">Height(cm)</FormLabel>
            <Slider
              defaultValue={170}
              //getAriaValueText={valuetext}
              onChange={setHeight}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={130}
              max={250}
              valueLabelDisplay="auto"
            />
          </div>
          <div style={{ marginLeft: 10, marginTop: 60 }}>
            <FormLabel component="legend">Weight (kg)</FormLabel>
            <Slider
              defaultValue={80}
              onChange={setWeight}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={40}
              max={150}
              valueLabelDisplay="auto"
            />
          </div>
          <div style={{paddingTop: 50}}>
         
            <Button primary label="Submit" onClick={onSubmitHandler} />
     
          </div>
    
    </div>
  );
}

export default Registration; 
