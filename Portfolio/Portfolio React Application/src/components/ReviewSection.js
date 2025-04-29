import React, { forwardRef, useState } from 'react';

const ReviewSection = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    username: '',
    comment: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    // Validation
    if (!formData.username.trim()) {
      newErrors.username = 'Please enter your name';
    }
    
    if (!formData.comment.trim()) {
      newErrors.comment = 'Please enter your review';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Form is valid, submit or process data
    alert('Thank you for your review!');
    setFormData({ username: '', comment: '' });
  };

  return (
    <div className="bento-item review-section" ref={ref}>
      <div className="item-header">
        <i className="review-icon">💬</i>
        <h2>Reviews</h2>
      </div>

      <p>Feel free to leave a review about my portfolio. Your feedback is important to me!</p>

      <form className="review-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Your Name"
            value={formData.username}
            onChange={handleChange}
            className={errors.username ? 'invalid' : ''}
          />
          {errors.username && <div className="form-error">{errors.username}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="comment">Share Your Review</label>
          <textarea
            id="comment"
            name="comment"
            placeholder="Write your comment..."
            value={formData.comment}
            onChange={handleChange}
            className={errors.comment ? 'invalid' : ''}
          />
          {errors.comment && <div className="form-error">{errors.comment}</div>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
});

export default ReviewSection;
