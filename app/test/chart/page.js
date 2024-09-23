// app/test/chart/page.js 
// 기본 차트
'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box } from '@mui/material'; // MUI의 Box 컴포넌트 임포트

// 차트에 표시할 데이터 배열
const data = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 2000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
    { name: 'Jul', sales: 3490 },
];

const Home = () => {
    return (
        <div style={{ width: '100%', height: '300px' }}>
            <div style={{ fontSize: '30px' }}>차트 테스트</div>
            {/* <Box sx={{ fontSize: '40px', fontWeight: 'bold' }}>sx 테스트</Box> Mui Box, sx(스타일처럼) 컴포넌트 사용 */}
            
            <ResponsiveContainer>
                {/* ResponsiveContainer: 차트가 부모 컨테이너의 크기에 맞게 반응하도록 설정 */}
                <BarChart data={data}>
                    {/* BarChart: 막대 차트를 생성하는 컴포넌트 */}
                    <CartesianGrid strokeDasharray="3 3" />
                    {/* CartesianGrid: 차트에 그리드를 추가하여 데이터의 가독성을 높임 */}
                    
                    <XAxis dataKey="name" />
                    {/* XAxis: X축을 설정하며, dataKey는 데이터 배열의 속성을 사용하여 축의 레이블을 정의 */}
                    
                    <YAxis />
                    {/* YAxis: Y축을 설정 */}
                    
                    <Tooltip />
                    {/* Tooltip: 마우스를 올리면 데이터 값을 보여주는 툴팁 */}
                    
                    <Legend />
                    {/* Legend: 차트의 범례를 표시하여 각 데이터 항목을 설명 */}
                    
                    <Bar dataKey="sales" fill="#8884d8" />
                    {/* Bar: 데이터의 판매량을 나타내는 막대. dataKey는 데이터 배열의 속성을 사용 */}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Home;
