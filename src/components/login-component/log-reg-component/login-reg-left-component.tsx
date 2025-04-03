import React, { useState, useEffect } from 'react';
import './/login-reg-left-component.css';

const LeftLogRegComponent: React.FC = () => {

    const quotesAuthor = [
        'Nelson Mandela',
        'Malcolm X',
        'Albert Einstein',
        'Benjamin Franklin',
        'Aristotle',
    ];

    const quotes = [
        'Education is the most powerful weapon which you can use to change the world.',
        'Education is the passport to the future, for tomorrow belongs to those who prepare for it today.',
        'Education is not the learning of facts, but the training of the mind to think.',
        'An investment in knowledge pays the best interest.',
        'The roots of education are bitter, but the fruit is sweet.',
    ];

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentQuoteIndex((prevIndex) =>
                prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);
        return () => clearInterval(intervalId);
    }, [quotes.length]);

    return (
        <div className="left-login-component padding-20 margin-auto text-align-center dark-font max-width-400">
            <p className="font-22 quote-animation">"{quotes[currentQuoteIndex]}"</p>
            <p className="font-18 italic author-animation">– {quotesAuthor[currentQuoteIndex]}</p>
        </div>
    );
};

export default LeftLogRegComponent;
