export function allTodos(state) {
  let todoIds = Object.keys(state.todos);
  return todoIds.map(todoId => state.todos[todoId]);
}
