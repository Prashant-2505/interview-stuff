import React, { useState } from 'react';

const Carousel = () => {
    const data = [
        { id: 1, name: "john", email: "john@example.com" },
        { id: 2, name: "tom", email: "tom@example.com" },
        { id: 3, name: "sonus", email: "sonus@example.com" },
        { id: 4, name: "popa", email: "popa@example.com" },
        { id: 5, name: "lisa", email: "lisa@example.com" },
        { id: 6, name: "mike", email: "mike@example.com" },
        { id: 7, name: "anna", email: "anna@example.com" },
        { id: 8, name: "jane", email: "jane@example.com" },
        { id: 9, name: "paul", email: "paul@example.com" },
        { id: 10, name: "emma", email: "emma@example.com" },
        { id: 11, name: "jack", email: "jack@example.com" },
        { id: 12, name: "dave", email: "dave@example.com" },
        { id: 13, name: "sara", email: "sara@example.com" },
        { id: 14, name: "nina", email: "nina@example.com" }
    ];

    const [curIndex, setCurIndex] = useState(0);

    const handleLeft = () => {
        setCurIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    const handleRight = () => {
        setCurIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            <div className='w-3/4 m-auto '>
                <div className='mt-20 w-full flex overflow-hidden '>
                    <div
                        className='flex w-full justify-evenly gap-4'

                    >
                        {data.map((item) => (
                            <div
                                key={item.id}
                                className='bg-pink-100 w-[50%] h-[250px] rounded-xl flex-shrink-0 flex items-center justify-center  transition-all duration-300 relative'

                                style={{
                                    transform: `translateX(calc(${-curIndex * 100}% - 2rem ))`
                                }}
                            >
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='absolute w-full  flex justify-between px-4'>
                <button onClick={handleLeft} className='bg-gray-200 p-2 rounded'>Left</button>
                <button onClick={handleRight} className='bg-gray-200 p-2 rounded'>Right</button>
            </div>
        </>
    );
};

export default Carousel;
