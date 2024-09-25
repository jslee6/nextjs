//app/test/chartStock/page.js
'use client';

import React, { useEffect, useState } from 'react';
import { Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Stack, Box, Typography, TextField } from '@mui/material'; // MUI의 Typography 및 TextField 컴포넌트 임포트

const colors = ['#ffce56', '#ff6384', '#f2a4e1', '#5b72e5', '#4bc0c0', '#9966ff', '#ff5733', '#ff9f40', '#95ea91', '#ea4141'];

const Home = () => {
    const [data, setData] = useState([]); // 전체 데이터 상태 초기화
    const [filteredData, setFilteredData] = useState([]); // 필터링된 데이터 상태
    const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/sw/get'); // API 호출
                if (!response.ok) {
                    throw new Error('네트워크 응답이 좋지 않습니다.');
                }
                const result = await response.json();

                // SwName의 카운트를 위한 데이터 가공 (name이 '무명'인 경우만 포함)
                const companyCount = result.reduce((acc, item) => {
                    if (item.SwName && item.name === '무명') { // '무명'인 경우만 카운트
                        acc[item.SwName] = (acc[item.SwName] || 0) + 1; // SwName 카운트 세기
                    }
                    return acc;
                }, {});

                // 가공된 데이터를 배열로 변환
                const formattedData = Object.keys(companyCount).map((company) => ({
                    SwName: company,
                    count: companyCount[company], // 각 SW의 출현 횟수
                }));

                // 출현 횟수를 기준으로 내림차순 정렬하고 상위 10개만 선택
                const top10Data = formattedData
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 10);

                setData(formattedData); // 전체 데이터 상태 업데이트
                setFilteredData(top10Data); // 초기 필터링 데이터 설정
            } catch (error) {
                console.error('데이터 가져오기 오류:', error);
            }
        };

        fetchData(); // 데이터 가져오기 함수 호출
    }, []); // 컴포넌트가 마운트될 때만 실행

    // 검색어 변경 시 호출되는 함수
    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        // 전체 데이터에서 필터링된 데이터 설정
        const filtered = data.filter(item =>
            item.SwName.toLowerCase().includes(value.toLowerCase()) // 모두 소문자로 검색하게 함
        );
        setFilteredData(filtered.slice(0, 10)); // 필터링된 데이터 중 상위 10개만 설정
    };

    return (
        <div style={{ width: '97%', height: '650px', margin: '0 auto' }}>

            <Stack direction="row" justifyContent="space-between">
                <Box sx={{ width: '200px' }}></Box>

                <Typography className='chart-header' variant="h4" align="center" sx={{ mt: '1px', mb: '10px' }}>
                재고 현황 (상위 10개)
                </Typography>

                {/* 검색어 입력 필드 */}
                <TextField
                    label="SW명 검색"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearch}
                    sx={{ width: '200px', mb: 2 }} // 아래 여백 추가
                />
            </Stack>


         

            <ResponsiveContainer>  {/* ResponsiveContainer: 차트가 부모 컨테이너의 크기에 맞게 반응하도록 설정 */}
                <BarChart data={filteredData} layout="vertical">  {/* 막대차트의 layout을 vertical로 설정 */}
                    <CartesianGrid strokeDasharray="3 3" />  {/* 차트의 그리드 추가 */}
                    <XAxis type="number" />   {/* X축을 수치형으로 설정 */}
                    <YAxis dataKey="SwName" type="category" width={200} textAnchor="end" />
                    <Tooltip /> {/* Tooltip: 마우스를 올리면 데이터 값을 보여주는 툴팁 */}
                    <Legend />   {/* Legend: 차트의 범례를 표시하여 각 데이터 항목을 설명 */}
                    <Bar dataKey="count">   {/* 출현 횟수를 막대로 표시 */}
                        {filteredData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Home;
