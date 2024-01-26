import React, { useEffect, useState } from "react";
import Filters from '../../components/Filters';
import './style.css';
import {barOptions, pieOptions} from './chart-options';
import Chart from 'react-apexcharts';
import axios from 'axios';
import { buildBarSeries, getPlatformChartData, getGenderChartData} from './helpers';

type PieChartData = {
    labels: string[];
    series: number[];
}

type BarChartData = {
    x: string;
    y: number;
}

const initialPieData = {
    labels: [],
    series: []
}

const BASE_URL = 'http://localhost:8080';

const Charts = () => {

    const [barChartData, setBarChartData] = useState<BarChartData[]>([]);
    const [platformData, setPlatformData] = useState<PieChartData>(initialPieData);
    const [genreData, setGenderData] = useState<PieChartData>(initialPieData);

    useEffect(() => {
        async function getData() {
            const recordsResponse = await axios.get(`${BASE_URL}/records`);
            const gameResponse = await axios.get(`${BASE_URL}/games`);


            const barData = buildBarSeries(gameResponse.data, recordsResponse.data.content);
            setBarChartData(barData);

            const platformChartData = getPlatformChartData(recordsResponse.data.content);
            setPlatformData(platformChartData);

            const genderChartData = getGenderChartData(recordsResponse.data.content);
            setGenderData(genderChartData);
        }

        getData();
    }, [])

    return (
        <div className="page-container">
            <Filters link="/records" linkText="VER TABELA"/>
            <div className="chart-container">
                <div className="top-related">
                    <h1 className="top-related-title">
                        Jogos mais votados
                    </h1>
                    <div className="games-container">
                        <Chart
                            options={barOptions}
                            type="bar"
                            width="700"
                            height="650"
                            series={[{data: barChartData}]}
                         />
                    </div>
                </div>
                <div className="charts">
                    <div className="platform-chart">
                        <h2 className="chart-title">Plataformas</h2>
                            <Chart
                            options={{
                                ...pieOptions,
                                labels: platformData?.labels,
                                dataLabels: {
                                  enabled: true,
                                  offsetX: 10, // ou qualquer número que faça sentido para o seu layout
                                  offsetY: 10, // ou qualquer número que faça sentido para o seu layout
                                },
                              }}
                            type="donut"
                            series={platformData?.series}
                            width="350"
                            />
                    </div>
                    <div className="gender-chart">
                        <h2 className="chart-title">Genêros</h2>
                        <Chart
                            options={{
                                ...pieOptions,
                                labels: genreData?.labels,
                                dataLabels: {
                                  enabled: true,
                                  offsetX: 10, // ou qualquer número que faça sentido para o seu layout
                                  offsetY: 10, // ou qualquer número que faça sentido para o seu layout
                                },
                              }}
                            type="donut"
                            series={genreData?.series}
                            width="350"
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charts;