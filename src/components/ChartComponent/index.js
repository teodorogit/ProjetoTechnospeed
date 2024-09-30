import React, { useContext } from 'react';
import { Chart } from 'react-google-charts';
import { ApiContext } from '../../context/apiContext';
import celularFundo from '../../assets/images/celularFundo.svg';
import classes from './style.module.css';

export const options = {
    title: 'Online x Offline',
    titleTextStyle: {
        color: '#eee',
        fontSize: 18,
    },
    backgroundColor: 'transparent',
    colors: ['#ADFF2F', '#b0120a'],
    curveType: 'function',
    legend: { position: 'left' },
    hAxis: {
        textStyle: {
            color: '#eee',
            fontSize: 14,
        },
    },
    vAxis: {
        title: 'Valores',
        titleTextStyle: {
            color: '#111',
            fontSize: 18,
            bold: true,
        },
        textStyle: {
            color: '#eee',
            fontSize: 14,
        },
    },
    animation: { duration: 1000, easing: 'linear', startup: true },
};

const ChartComponent = () => {
    const { selectedApi, generateChartData } = useContext(ApiContext);

    if (!selectedApi) {
        return (
            <div className={classes.conteudo_grafico}>
                <h2>Selecione uma API, para visualizar o gráfico com o histórico de atividades</h2>
                <img className={classes.fundo_celular} src={celularFundo} alt="" />
            </div>
        );
    }

    const data = generateChartData(selectedApi);

    return <Chart chartType="Bar" width="100%" height="400px" data={data} options={options} />;
};

export default ChartComponent;
