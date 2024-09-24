

// app/test/chartStack/page.js
//Stacked Bar
'use client';

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material'; // MUI의 Typography 컴포넌트 임포트

const colors = ['#FF6384','#36A2EB']; // 두 개의 색상만 필요
// 3af27a
//#015F3F

const Home = () => {
    const [data, setData] = useState([]); // 데이터 상태 초기화

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/sw/get'); // API 호출
                if (!response.ok) {
                    throw new Error('네트워크 응답이 좋지 않습니다.');
                }
                const result = await response.json();

                // SwName의 총합계 및 SwName이면서 name이 '무명'인 것의 합계 계산
                const companyCount = result.reduce((acc, item) => {
                    if (item.SwName) {
                        // SwName의 초기화
                        acc[item.SwName] = (acc[item.SwName] || { total: 0, unnamed: 0 });

                        // '무명'이 아닌 경우 증가
                        if (item.name === '무명') {
                            acc[item.SwName].unnamed += 1; // '무명'인 경우 증가
                        } else {
                            acc[item.SwName].total += 1; // '무명'이 아닌 경우 증가
                        }
                    }
                    return acc;
                }, {});

                // 가공된 데이터를 배열로 변환
                const formattedData = Object.keys(companyCount).map((company) => ({
                    SwName: company,
                    total: companyCount[company].total,     // A: '무명'이 아닌 경우의 합계
                    unnamed: companyCount[company].unnamed, // B: '무명'인 경우의 합계
                }));

                // 출현 횟수를 기준으로 내림차순 정렬하고 상위 10개만 선택
                const top10Data = formattedData
                    .sort((a, b) => (b.total + b.unnamed) - (a.total + a.unnamed)) // 총합계 기준으로 내림차순 정렬
                    .slice(0, 10); // 상위 10개 선택

                setData(top10Data); // 상태 업데이트
            } catch (error) {
                console.error('데이터 가져오기 오류:', error);
            }
        };

        fetchData(); // 데이터 가져오기 함수 호출
    }, []); // 컴포넌트가 마운트될 때만 실행

    return (
        <div style={{ width: '97%', height: '650px', margin: '0 auto' }}>
            <Typography className='chart-header' variant="h4" align="center" sx={{ mt: '1px', mb: '10px'}}>
                사용/재고 현황 (상위 10개)
            </Typography>
            
            <ResponsiveContainer>  {/* ResponsiveContainer: 차트가 부모 컨테이너의 크기에 맞게 반응하도록 설정 */}
                <BarChart data={data} layout="vertical">  {/* 막대차트의 layout을 vertical로 설정 */}
                    <CartesianGrid strokeDasharray="3 3" />  {/* 차트의 그리드 추가 */}
                    <XAxis type="number" />   {/* X축을 수치형으로 설정 */}
                    <YAxis dataKey="SwName" type="category" width={200} textAnchor="end" /> 
                    {/* SwName을 Y축으로 설정 */}
                    <Tooltip /> {/* Tooltip: 마우스를 올리면 데이터 값을 보여주는 툴팁 */}
                    <Legend />   {/* Legend: 차트의 범례를 표시하여 각 데이터 항목을 설명 */}
                    
                    {/* SwName의 총합계와 '무명'의 합계로 스택 */}
                    <Bar dataKey="total" stackId="a" name="사용중" fill={colors[0]} />
                    <Bar dataKey="unnamed" stackId="a" name="재고" fill={colors[1]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Home;
