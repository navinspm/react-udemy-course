import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';


const App = props =>  {
  const [personsState,setPersonsState] = useState({
   persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Suvin', age: 28}
    ]
  });

  const [otherState,setOtherState] = useState('some Other Value');

  const switchNameHandler = () => {
    // console.log('was cliecked')
    //dont do this.persons[0].name = 'Maxmiliean';
    setPersonsState({
    persons: [
      {name: 'MaxMiliean', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Suvin', age: 27}
     ],
     otherState: 'some other value'
    });
  };



  console.log(personsState,otherState);

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>  
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age} 
        />
        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}> My Hoppies: racing
        </Person>
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age}/>
      </div>
    );
    //return React.createElement('div',{className: 'App]'},React.createElement('h1',null, 'Does this work now?'));
  
}

export default App;

  
