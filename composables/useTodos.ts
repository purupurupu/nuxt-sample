import type { Todo } from "../types/todo.interface";

export const useTodos = () => {
  const todos = useState<Todo[]>("todos", () => [
    { id: 1, title: "Learn Vue 3", completed: false },
    { id: 2, title: "Learn TypeScript", completed: false },
    { id: 3, title: "Learn Vite", completed: false },
  ]);

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
