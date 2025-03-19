import React, { createContext, useReducer, useState } from 'react';
import One from './One'; // Component con

// Tạo context để sử dụng global state
export const AppContext = createContext();

const initialState = { count: 0 };

// Reducer để cập nhật state
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Parent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');

  return (
    <AppContext.Provider value={{ state, dispatch, text, setText }}>
      <h1>Parent Component</h1>
      <One /> {/* Truyền dữ liệu cho component con */}
    </AppContext.Provider>
  );
};

export default Parent;
