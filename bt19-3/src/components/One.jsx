import React, { useEffect, useRef, useState, useContext } from 'react';
import { AppContext } from './OneParent'; // Nhận context từ Parent

const One = () => {
  const { state, dispatch, text, setText } = useContext(AppContext); // Sử dụng context
  const inputRef = useRef();

  const [photos, setPhotos] = useState([]); // Lưu trữ danh sách ảnh
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState(null); // Lưu trữ lỗi nếu có

  // useEffect để giả lập việc lấy dữ liệu từ API
  useEffect(() => {
    // Đặt loading là true trước khi gọi API
    setLoading(true);

    // Gọi API
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Có lỗi xảy ra khi lấy dữ liệu');
        }
        return response.json();
      })
      .then((data) => {
        setPhotos(data); // Cập nhật dữ liệu vào state
        setLoading(false); // Đặt loading thành false sau khi lấy dữ liệu
      })
      .catch((error) => {
        setError(error.message); // Lưu thông báo lỗi nếu có
        setLoading(false); // Dù có lỗi hay không cũng cần tắt loading
      });
  }, []); // Chỉ gọi API khi component được mount (lần đầu tiên)

  // Các hàm xử lý tăng/giảm
  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const handleInputChange = () => {
    setText(inputRef.current.value);
  };

  return (
    <div>
      <h2>One Component (Child)</h2>
      <div>
        <button onClick={handleIncrement}>+</button>
        <span> {state.count} </span>
        <button onClick={handleDecrement}>-</button>
      </div>
      <div>
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Nhập văn bản"
        />
      </div>
      <p>{text}</p>

      {/* Hiển thị dữ liệu từ API */}
      <h3>Danh sách ảnh</h3>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {photos.slice(0, 10).map((photo) => (
          <div key={photo.id} style={{ margin: '10px', textAlign: 'center' }}>
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default One;
