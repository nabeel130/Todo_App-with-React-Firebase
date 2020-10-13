import React from 'react'
import { Button, List , ListItem , ListItemAvatar, ListItemText } from '@material-ui/core';
import db from './firebase';

function Todo(props) {
    return (
        <List>
        <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary="Dummy reminder🥁"/>
        </ListItem>
        <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>❌ DELETE ME</Button>
        </List>
        
    )
}

export default Todo
