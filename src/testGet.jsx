import React from 'react'
import axios from 'axios'
import {Button} from 'grommet'

let results = []; 

class TestGet extends React.Component{
    state = {
        results: "", 
        finished: false
    }

   
    componentDidMount() {
        this.getExercises(); 
       
        console.log("done");
    }

    async getExercises() {
        
        console.log("Gest"); 
        await axios.get('https://wger.de/api/v2/exercise/?limit=387').then((res) => {
            results = res.data.results 
        });
        console.log(results);
        console.log(results.filter(res => res.language == 2))
        this.setState({finished: true})

    }

    render() {
        return (
            <div>
            <Button onClick={this.getExercises}>
                Click here!
            </Button>
            {this.state.finished && <div>
                {results.map(res => <p key={res.id}>{res.name}</p>)}
            </div>}
            </div>
        )
    }
}

export default TestGet; 