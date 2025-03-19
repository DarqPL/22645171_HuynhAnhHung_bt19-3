import React, { useState, useRef } from 'react';

const Two = () => {
  // State để lưu danh sách todo
  const [todos, setTodos] = useState([]);
  // State để lưu giá trị input khi chỉnh sửa
  const [editIndex, setEditIndex] = useState(null);
  const inputRef = useRef(); // sử dụng useRef để lấy giá trị input

  // Hàm thêm todo mới
  const addTodo = () => {
    const todoValue = inputRef.current.value;
    if (todoValue) {
      setTodos([...todos, { text: todoValue, id: Date.now() }]);
      inputRef.current.value = ''; // Xóa input sau khi thêm
    }
  };

  // Hàm xóa todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Hàm chỉnh sửa todo
  const editTodo = (id) => {
    const todo = todos.find(todo => todo.id === id);
    inputRef.current.value = todo.text;
    setEditIndex(id); // Lưu lại index của todo đang chỉnh sửa
  };

  // Hàm lưu todo sau khi chỉnh sửa
  const saveEditTodo = () => {
    const updatedText = inputRef.current.value;
    setTodos(todos.map(todo => 
      todo.id === editIndex ? { ...todo, text: updatedText } : todo
    ));
    inputRef.current.value = ''; // Xóa input sau khi chỉnh sửa
    setEditIndex(null); // Đặt lại trạng thái editIndex
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo App</h2>
      <div>
        <input ref={inputRef} type="text" placeholder="Enter a todo" />
        {editIndex !== null ? (
          <button onClick={saveEditTodo}>Save Edit</button>
        ) : (
          <button onClick={addTodo}>Add Todo</button>
        )}
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            {todo.text}
            <button onClick={() => editTodo(todo.id)} style={{ marginLeft: '10px' }}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Two;
