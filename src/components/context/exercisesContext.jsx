import React, {useEffect, useState, createContext} from 'react';
import axios from 'axios'; 
import { FullStackedChartIcon } from 'evergreen-ui';

export const ExerciseContext = createContext();

export const ExerciseProvider = (props) => {
    const [favourites, setFavourites] = useState([]);
    const [dataMusc, setMusc] = useState({
      musc: [],
      //exer:[],
    })  
    const [dataEx, setEx] = useState({
        
        exer:[],
      })  

    const [exCat, setExCat] = useState({
        cat:[]
    }); 
   
    
    const fetchExCat = async() => {
        await axios.get('https://wger.de/api/v2/exercisecategory/').then((res) => {
            updateCategories(res.data.results); 
            
        })
    }

    const fetchExData =  async() => {
        await axios.get('https://wger.de/api/v2/exercise/?limit=10000&language=2').then((res) => {
            updateExercises(res.data.results); 

        });
    };

    const fetchMuscData = async() => {
        await axios.get('https://wger.de/api/v2/muscle').then((res) => {
            updateMuscles(res.data.results); 
        })
    
    };

    const updateExercises = async (exercises) => {

        setEx({...dataEx, exer:exercises}); 
        
    }

    const updateMuscles = async (muscles) => {
  
        setMusc({...dataMusc, musc:muscles}); 
      
    }

    const updateCategories = async(categories) => {
        setExCat({...exCat, cat:categories})
    }
  
    const fetchAllData = async() => {
        fetchExData(); 
        fetchMuscData();
        fetchExCat();
    }

    useEffect(() => {
        fetchAllData();
      
  
    }, []);

    return (
        <ExerciseContext.Provider value={{dataEx, dataMusc,exCat}}>
            {props.children}
        </ExerciseContext.Provider>
    )
}

