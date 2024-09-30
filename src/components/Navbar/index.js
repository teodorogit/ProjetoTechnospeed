import React from 'react';
import classes from './style.module.css';
import logoTechnospeed from '../../assets/images/logoTechnospeed.png';

const index = () => {
    return (
        <header className={classes.container}>
            <div>
                <img src={logoTechnospeed} alt="" />
            </div>
            <div className={classes.div_status}>
                <p>Status API'S</p>
                <div className={classes.ball_offline}>offline</div>
                <div className={classes.ball_online}>online</div>
                <div className={classes.ball_lentidao}>lentidão</div>
            </div>
            <a href="#" className={classes.btn_suporte}>
                Suporte
            </a>
            <a href="#" className={classes.btn_servicos}>
                Nossos Serviços
            </a>
        </header>
    );
};

export default index;
