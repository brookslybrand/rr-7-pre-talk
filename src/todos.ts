export interface Todos {
  [key: string]: string;
}

// In-memory storage
let todosStorage: Todos = {};

export const uuid = () => Math.random().toString(36).substr(2, 9);

export function saveTodos(todos: Todos): void {
  todosStorage = { ...todos };
}

function initializeTodos(): Todos {
  let todos: Todos = new Array(10)
    .fill(null)
    .reduce(
      (acc, _, index) =>
        Object.assign(acc, { [uuid()]: `Seeded Todo #${index + 1}` }),
      {}
    );
  saveTodos(todos);
  return todos;
}

export function getTodos(): Todos {
  if (Object.keys(todosStorage).length === 0) {
    return initializeTodos();
  }
  return { ...todosStorage };
}

export function addTodo(todo: string): void {
  let newTodos = { ...getTodos() };
  newTodos[uuid()] = todo;
  saveTodos(newTodos);
}

export function deleteTodo(id: string): void {
  let newTodos = { ...getTodos() };
  delete newTodos[id];
  saveTodos(newTodos);
}

export function resetTodos(): void {
  todosStorage = {};
  initializeTodos();
}
