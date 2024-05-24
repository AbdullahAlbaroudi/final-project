import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';



function Review() {
  const [reviews, setReviews] = useState([]);

  const [newReview, setNewReview] = useState({
    name: '',
    text: '',
    rating: 5,
    role: '',
   
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', text: '', rating: 5, role: '' });
  };

  return (
    <section className="review" id="review">
      <h1 className="heading">reviews</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="box">
              <i className="fas fa-quote-left"></i>
              <i className="fas fa-quote-right"></i>
              <img src={review.image} alt="" />
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p>{review.text}</p>
              <h3>{review.name}</h3>
              <span>{review.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <form className="review-form" onSubmit={handleSubmit}>
        <h2>Write a Review</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newReview.name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="text"
          placeholder="Your Review"
          value={newReview.text}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Your Role (e.g., satisfied client)"
          value={newReview.role}
          onChange={handleInputChange}
          required
        />
        <label>
          <select name="rating" value={newReview.rating} onChange={handleInputChange}>
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>{rating}</option>
            ))}
          </select>
          
        </label>
        <button type="submit">Submit Review</button>
      </form>
    </section>
  );
}

export default Review;
