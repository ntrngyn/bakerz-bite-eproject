// /src/components/FeedbackForm.jsx

import React, { useState } from 'react';
import './FeedbackForm.css'; // Import file CSS

// Component StarRating đã được nâng cấp
const StarRating = ({ rating, onRating }) => {
  // State để theo dõi giá trị khi người dùng di chuột qua
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="star-rating"
      // Khi chuột rời khỏi toàn bộ khu vực, reset hover
      onMouseLeave={() => setHoverRating(0)} 
      >
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => onRating(ratingValue)}
            />
            <span
              className={`star ${ratingValue <= (hoverRating || rating) ? 'on' : 'off'}`}
              // Khi chuột đi vào một ngôi sao, cập nhật hoverRating
              onMouseEnter={() => setHoverRating(ratingValue)}
            >
              ★
            </span>
          </label>
        );
      })}
    </div>
  );
};


const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRating = (rate) => {
    setRating(rate);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn form tải lại trang
    
    // Đơn giản là hiển thị thông báo thành công
    // Trong thực tế, bạn sẽ gửi dữ liệu này đến một API
    console.log('Feedback Submitted:', { ...formData, rating });
    setSubmitted(true);

    // Reset form sau 3 giây
    setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setRating(0);
        setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="feedback-success">
        <h3>Thank You!</h3>
        <p>Your feedback has been received.</p>
      </div>
    );
  }

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='John Smith'
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='abc@gmail.com'
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <div className="form-label">Your Rating</div>
        <StarRating rating={rating} onRating={handleRating} />
      </div>
      <div className="form-group">
        <label htmlFor="message">Your Feedback</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder='Write your feedback here...'
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="button">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;