import React, { useState } from 'react';
import { CiStar } from "react-icons/ci";

const StarRating = () => {
    const [selectedRating, setSelectedRating] = useState(null);

    const rating = [
        { value: 1, label: "Super bad" },
        { value: 2, label: "Bad" },
        { value: 3, label: "Average" },
        { value: 4, label: "Good" },
        { value: 5, label: "Very good" },
    ];

    const handleClick = (value) => {
        setSelectedRating(value);
    };

    return (
        <div>
            <div className='flex gap-4 text-3xl'>
                {rating.map((item) => (
                    <CiStar
                        key={item.value}
                        onClick={() => handleClick(item.value)}
                        className={`cursor-pointer ${selectedRating >= item.value ? 'text-yellow-500' : 'text-gray-400'}`}
                    />
                ))}
            </div>
            {selectedRating && (
                <div>
                    {rating.find(r => r.value === selectedRating).label}
                </div>
            )}
        </div>
    );
};

export default StarRating;
