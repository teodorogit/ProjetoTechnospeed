import React, { useContext } from 'react';
import Navbar from '../../components/Navbar/index';
import classes from './style.module.css';
import CardAPI from '../../components/CardAPIS/index';
import ChartComponent from '../../components/ChartComponent';

const Index = () => {
    const apis = [
        'Banco do Brasil v2',
        'Itaú v2',
        'Itaú Francesa',
        'Sicoob v2',
        'Sicoob v3',
        'Sicredxi v2',
        'Sicredi v3',
        'Caixa',
        'Santander',
        'Banrisul',
        'Inter',
    ];

    return (
        <div style={{ backgroundColor: '#1B213B' }}>
            <Navbar />
            <section className={classes.container}>
                <div className={classes.div_apis}>
                    {apis.map((api, index) => (
                        <CardAPI key={index} title={api} />
                    ))}
                </div>

                <div className={classes.conteudo_grafico}>
                    <ChartComponent />
                </div>
            </section>
            {/* <a href="/detalhes">Detalhes</a> */}
        </div>
    );
};

export default Index;
