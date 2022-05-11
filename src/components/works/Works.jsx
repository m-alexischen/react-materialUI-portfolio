import React, { useState } from 'react';
import './works.scss';

const Works = () => {
    const data = [
        {
            id: 1,
            icon: 'assets/devIcon.png',
            title: 'Web Development',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'  ,
            img: 'assets/development.jpeg',
        },
        {
            id: 2,
            icon: 'assets/designIcon.png',
            title: 'Web Design',
            desc: 'Deleniti illo maiores minus dolore, ullam earum dolorum ipsum, vitae, repellat reiciendis',
            img: 'assets/development-two.jpeg',
        },
        {
            id: 3,
            icon: 'assets/devIcon.png',
            title: 'Web Development',
            desc: 'Vero provident. Temporibus molestias cum, voluptate repellendus',
            img: 'assets/design.jpeg',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const clickHandler = (way) => {
        way === 'left' 
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    };

    return (
        <div className='works' id='works'>
            <div className='slider' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => (
                    <div className='container'>
                        <div className='item'>
                            <div className='left'>
                                <div className='leftContainer'>
                                    <div className='imgContainer'>
                                        <img src={d.icon} alt='' />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className='right'>
                                <img src={d.img} alt='' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img className='arrow left' src='assets/arrow.png' alt='' onClick={() => clickHandler('left')} />
            <img className='arrow right' src='assets/arrow.png' alt='' onClick={() => clickHandler()} />
        </div>
    )
};

export default Works;