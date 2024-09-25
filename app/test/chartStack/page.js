
// app/test/chartStack/page.js
'use client';

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Stack, Typography, TextField } from '@mui/material'; // MUI의 Typography 및 TextField 컴포넌트 임포트

const colors = ['#FF6384', '#36A2EB', '#FFCC00']; // 세 개의 색상 필요

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

                // SwName의 총합계 및 '재고'인 경우 계산
                const companyCount = result.reduce((acc, item) => {
                    if (item.SwName) {
                        acc[item.SwName] = (acc[item.SwName] || { total: 0, stock: 0 });
                        acc[item.SwName].total += 1; // 총합계
                        if (item.name === '무명') {
                            acc[item.SwName].stock += 1; // '무명'인 경우
                        }
                    }
                    return acc;
                }, {});

                // 가공된 데이터를 배열로 변환
                const formattedData = Object.keys(companyCount).map((company) => ({
                    SwName: company,
                    total: companyCount[company].total, // 총합계
                    stock: companyCount[company].stock, // 재고 수량
                    used: companyCount[company].total - companyCount[company].stock, // 사용중 수량
                }));

                // 출현 횟수를 기준으로 내림차순 정렬하고 상위 10개만 선택
                const top10Data = formattedData
                    .sort((a, b) => b.total - a.total) // 총합계 기준으로 내림차순 정렬
                    .slice(0, 10); // 상위 10개 선택

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
            item.SwName.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered.slice(0, 10)); // 필터링된 데이터 중 상위 10개만 설정
    };

    // 커스텀 툴팁 컴포넌트 // 파리미터 바꾸면안되네? ,그냥 가져다 쓰자..
    // active : 활성화 , payload: 정보를 담고있는 배열,  label: 데이터 라벨
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const used = payload[0].value;
            const stock = payload[1].value;
            const total = used + stock;

            return (
                <Box style={{ backgroundColor: '#fff', padding: '3px', border: '1px solid #ccc' }}>
                    <Typography>{`${label}`}</Typography>
                    <Typography sx={{ color: colors[0] }}>{`사용중: ${used}`}</Typography>  {/* 사용중 글자색 */}
                    <Typography sx={{ color: colors[1] }}>{`재고: ${stock}`}</Typography> {/* 재고 글자색 */}
                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>{`합계: ${total}`}</Typography> {/* 합계 글자색 */}
                </Box>
            );
        }

        return null;
    };

    return (
        <Box style={{ width: '98%', height: '680px', margin: '0 auto' }}>
            <Stack direction="row" justifyContent="space-between">
                <Box sx={{ width: '200px' }}></Box>

                <Typography className='chart-header' variant="h4" align="center" sx={{ mt: '1px', mb: '10px' }}>
                    사용/재고 현황 (상위 10개)
                </Typography>

                {/* 검색어 입력 필드 */}
                <TextField
                    label="SW명 검색"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearch}
                    sx={{ width: '200px' }}
                />
            </Stack>

            <ResponsiveContainer>  {/* ResponsiveContainer: 차트가 부모 컨테이너의 크기에 맞게 반응하도록 설정 */}
                <BarChart data={filteredData} layout="vertical">  {/* 막대차트의 layout을 vertical로 설정 */}
                    <CartesianGrid strokeDasharray="3 3" />  {/* 차트의 그리드 추가 */}
                    <XAxis type="number" />   {/* X축을 수치형으로 설정 */}
                    <YAxis dataKey="SwName" type="category" width={200} textAnchor="end" /> {/* SwName을 Y축으로 설정 */}
                    <Tooltip content={<CustomTooltip />} /> {/* 커스텀 툴팁 사용 */}
                    {/* <Tooltip/> */}  {/* 기본툴팁 */}
                    <Legend />   {/* Legend: 차트의 범례를 표시하여 각 데이터 항목을 설명 */}
                    <Bar dataKey="used" stackId="a" name="사용중" fill={colors[0]} />
                    <Bar dataKey="stock" stackId="a" name="재고" fill={colors[1]} />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default Home;
