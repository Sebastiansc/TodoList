export const fetchTodos = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/todos',
    success,
    error
  });
};

export const deleteTodo = (todoId, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `api/todos/${todoId}`,
    success,
    error
  });
};

export const postTodo = (todo, success, error) => {
  $.ajax({
    method: "POST",
    url: `api/todos/`,
    data: {todo},
    success,
    error
  });
};
