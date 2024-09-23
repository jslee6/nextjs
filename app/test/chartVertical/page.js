// app/test/chart2/page.js
'use client';

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material'; // MUI의 Typography 컴포넌트 임포트

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

                // SwName의 출현 횟수를 세기 위한 데이터 가공
                const companyCount = result.reduce((acc, item) => {
                    if (item.SwName) {
                        acc[item.SwName] = (acc[item.SwName] || 0) + 1; // 출현 횟수 세기
                    }
                    return acc;
                }, {});

                // 가공된 데이터를 배열로 변환
                const formattedData = Object.keys(companyCount).map(company => ({
                    SwName: company,
                    count: companyCount[company], // 각 SW의 출현 횟수
                }));

                // 출현 횟수를 기준으로 내림차순 정렬하고 상위 10개만 선택
                const top10Data = formattedData
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 10);

                setData(top10Data); // 상태 업데이트
            } catch (error) {
                console.error('데이터 가져오기 오류:', error);
            }
        };

        fetchData(); // 데이터 가져오기 함수 호출
    }, []); // 컴포넌트가 마운트될 때만 실행

    return (
        <div style={{ width: '90%', height: '650px', margin: '0 auto' }}>
            

            <Typography variant="h4"  align="center"  sx={{ mt: '1px', mb: '5px', color: '#01437a' }}>
                차트 Top 10 테스트
            </Typography>
            
            <ResponsiveContainer> {/* ResponsiveContainer: 차트가 부모 컨테이너의 크기에 맞게 반응하도록 설정 */}
                <BarChart data={data} layout="vertical"> {/*막대차트의  layout을 vertical로 설정 */}
                    <CartesianGrid strokeDasharray="3 3" /> {/* 차트의 그리드 추가 */}
                    <XAxis type="number" /> {/* X축을 수치형으로 설정 */}
                    <YAxis dataKey="SwName" type="category" width={200} textAnchor="end" /> {/* Y축에 SwName 사용, 폭을 늘림 */}
                    <Tooltip />      {/* Tooltip: 마우스를 올리면 데이터 값을 보여주는 툴팁 */}
                    <Legend />    {/* Legend: 차트의 범례를 표시하여 각 데이터 항목을 설명 */}
                    <Bar dataKey="count" fill="#5b72e5" /> {/* 출현 횟수를 막대로 표시 */}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Home;

