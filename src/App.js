import React , {useEffect, useState} from 'react';
import { Button, FormControl, Input, InputLabel , FieldValue } from '@material-ui/core';
import './App.css';
import Todo from "./Todo";
import db from './firebase';
import firebase from 'firebase';


function App() {

  const [todos , setTodos] = useState([]);
  const [input , setInput] = useState("");
  console.log(input);
  


  //when app loads , we need to isten database and  fetch new todo 
  useEffect(() => {
    
    db.collection('todos').orderBy('timestamp' , 'desc').onSnapshot(snapshot => {
      // console.log(setTodos(snapshot.docs.map(doc => doc.data())))
      setTodos(snapshot.docs.map(doc => doc.data().todo));
    });
  }, []);

  const addTodo = (event) => {

    event.preventDefault(); //will stop the REFRESH
    
    db.collection('todos').add({
      todo : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    });
    setTodos([...todos , input]);
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
