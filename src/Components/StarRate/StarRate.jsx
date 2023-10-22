import React, { useState } from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './starRate.css'
const StarRate = () => {
    const [rating, setRating] = useState(0);

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };

    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((index) => {
                const isSelected = index <= rating;
                const isHalfStar = index === Math.ceil(rating) && rating % 1 !== 0;

                return (
                    <span
                        key={index}
                        className={`star-icon ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleStarClick(index)} style={{backgroundColor:"transparent"}}
                    >
                        {isHalfStar ? (
                            <FaStarHalfAlt />
                        ) : (
                            <FaStar />
                        )}
                    </span>
                );
            })}
        </div>
    );
}
export default StarRate
