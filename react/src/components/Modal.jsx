import React from 'react';

const Modal = ({ closeModal }) => {
    return (
        <div className='fixed top-0 left-0 w-full h-full  bg-black bg-opacity-50 '>
            <div className='w-[40vw] h-[100vh] bg-green-200 p-4 rounded-md'>
                <div>
                    <p>Modal Content</p>
                    <button onClick={closeModal} className='bg-blue-500 text-white px-3 py-1 rounded-md mt-2'>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
