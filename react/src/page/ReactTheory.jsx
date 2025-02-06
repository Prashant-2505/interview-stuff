import React from 'react';
import ReactQuestion from '../assets/reactQuestion.json';

const ReactTheory = () => {
    const qStyleP = 'bg-red-200';
    const qStyleS = 'bg-red-300 px-4';


    return (
        <div>
            {ReactQuestion.map((question, index) => (
                <div key={index}>
                    <p className={qStyleP}>
                        Q{index + 1}. <span className={qStyleS}>{question}</span>
                    </p>

                </div>
            ))}
        </div>
    );
}

export default ReactTheory;
