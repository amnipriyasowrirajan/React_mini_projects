import { Button, List, ListItem, ListItemText } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config";

function Todo({ todoItem, setCurrentEditedTodoID, setInputValue, authInfo }) {
  function handleDelete(getCurrentTodoID) {
    deleteDoc(doc(db, "todos", getCurrentTodoID));
  }

  return (
    <List>
      <ListItem>
        <ListItemText primary={todoItem?.todoItem?.todo} />
      </ListItem>

      <Button
        onClick={() => handleDelete(todoItem.id)}
        variant="contained"
        color="secondary"
      >
        Delete
      </Button>

      <Button
        onClick={() => {
          setInputValue(todoItem.todoItem.todo);
          setCurrentEditedTodoID(todoItem.id);
        }}
        variant="contained"
        color="info"
      >
        Edit
      </Button>
    </List>
  );
}

export default Todo;
