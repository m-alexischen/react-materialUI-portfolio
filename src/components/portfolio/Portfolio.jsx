import React, { useEffect, useState } from 'react';
import Portfoliolist from '../portfoliolist/Portfoliolist';
import { featuredPortfolio, devPortfolio, designPortfolio} from '../../data';
import './portfolio.scss';

const Portfolio = () => {
    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState([]);

    const list = [
        { 
            id: 'featured',
            title: 'Featured',
        },
        {
            id: 'development',
            title: 'Development',
        },
        {
            id: 'design',
            title: 'Design',
        },
    ];

    useEffect(() => {
        switch(selected) {
            case 'featured':
                setData(featuredPortfolio);
                break;
            case 'development':
                setData(devPortfolio);
                break;
            case 'design':
                setData(designPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected]);

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <Portfoliolist 
                        id={item.id}
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected} 
                    />
                ))}
            </ul>
            <div className='container'>
                {data.map((d) =>(
                    <div className='item'>
                        <img src={d.img} alt='' />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Portfolio;