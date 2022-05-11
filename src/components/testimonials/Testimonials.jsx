import React from 'react';
import './testimonials.scss';

const Testimonials = () => {
    const data = [
        {
            id: 1,
            name: 'Jane Doe',
            icon: 'assets/linkedin.png',
            title: 'Fullstack Developer of EDCRF',
            desc: 'Minus ut commodi atque ex! At, sit recusandae odit as ipsa, et corrupti velit.',
            img: 'assets/woman.png',
        },
        {
            id: 2,
            name: 'John Doe',
            icon: 'assets/linkedin.png',
            title: 'Senior Engineer of WSX',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            img: 'assets/man.png',
            featured: true,
        },
        {
            id: 3,
            name: 'Jon Doe',
            icon: 'assets/linkedin.png',
            title: 'Front-End Developer of QAZ',
            desc: 'Minus Lorem ipsum dolor sit amet consectetur adipisicing elit. Qut commodi atque ex! At, sit recusandae odit as ipsa, et corrupti velit.',
            img: 'assets/man.png',
        },
    ];

    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className='container'>
                {data.map((d) => (
                    <div className={d.featured ? 'card featured' : 'card'}>
                        <div className='top'>
                            <img className='left' src='assets/right-arrow.png' alt='' />
                            <img className='user' src={d.img} alt='' />
                            <a href='https://linkedin.com' target='_blank'><img className='right' src={d.icon} alt='' /></a>
                        </div>
                        <div className='center'>
                            {d.desc}
                        </div>
                        <div className='bottom'>
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Testimonials;