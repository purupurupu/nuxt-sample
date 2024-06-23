import type { Todo } from "../types/todo.interface";

export const useTodos = () => {
  const todos = useState<Todo[]>("todos", () => []);

  const addTodo = (title: string) => {
    todos.value.push({
      id: todos.value.length + 1,
      title,
      completed: false,
    });
  };

  const toggleTodo = (id: number) => {
    const todo = todos.value.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  };

  const deleteTodo = (id: number) => {
    todos.value = todos.value.filter(todo => todo.id !== id);
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};
