import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import './intro.scss';

const Intro = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Designer', 'Developer', 'Engineer' ] 
        })
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='imgContainer'>
                    <img src='assets/photo.jpeg' alt='' />
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi there, I'm</h2>
                    <h1>Full Name</h1>
                    <h3>
                        Front-End <span ref={textRef} />
                    </h3>
                </div>
                <a href='#portfolio'>
                    <img src='assets/down.png' alt='' />
                </a>
            </div>
        </div>
    )
};

export default Intro;