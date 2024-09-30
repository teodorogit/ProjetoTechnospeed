import React, { useContext } from 'react';
import classes from './style.module.css';
import { ApiContext } from '../../context/apiContext';

const Index = ({ title }) => {
    const { setSelectedApi } = useContext(ApiContext);

    const handleClick = () => {
        setSelectedApi(title);
    };

    return (
        <div className={classes.card_api_container} onClick={handleClick}>
            <div>
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default Index;
