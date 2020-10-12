import React , {useState} from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from "./Todo";

function App() {

  const [todos , setTodos] = useState(['coding' , 'playing football' , 'sleeping lot']);
  const [input , setInput] = useState("");
  console.log(input);

  const addTodo = (event) => {

    event.preventDefault(); //will stop the REFRESH
    console.log("its working...")
    setTodos([...todos , input]);
    console.log(todos);
    setInput(""); //Clear up teh input after clicking the submit button
  }

  return (
    <div className="App">
      <h1>hai react framework lowers {1+2}</h1>
      <form>

         <FormControl>
           <InputLabel>✅ write a todo here</InputLabel>
           <Input value={input} onChange={event => setInput(event.target.value)}/>
         </FormControl>
         <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
         Add todo
         </Button>

      </form>
      
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
