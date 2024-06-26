import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Interface define the structure of an object: 
interface Todo {
  id: number;
  title: string; 
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log(`
   The todo with ID: ${id}
   Has a title of ${title}
   And is it completed: ${completed}
  `)
});